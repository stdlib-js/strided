/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var path = require( 'path' );
var logger = require( 'debug' );
var readDir = require( '@stdlib/fs/read-dir' ).sync;
var unlink = require( '@stdlib/fs/unlink' ).sync;
var readFile = require( '@stdlib/fs/read-file' ).sync;
var readJSON = require( '@stdlib/fs/read-json' ).sync;
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var replace = require( '@stdlib/string/replace' );
var substringBefore = require( '@stdlib/string/substring-before' );
var substringAfter = require( '@stdlib/string/substring-after' );
var uppercase = require( '@stdlib/string/uppercase' );
var dtypes = require( './../../../dtypes' );
var promotionRules = require( '@stdlib/ndarray/promotion-rules' );
var safeCasts = require( '@stdlib/ndarray/safe-casts' );
var dtypeChar = require( '@stdlib/ndarray/base/dtype-char' );
var dtypeDesc = require( '@stdlib/ndarray/base/dtype-desc' );
var dtype2c = require( '@stdlib/ndarray/base/dtype2c' );
var char2dtype = require( '@stdlib/ndarray/base/char2dtype' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var filledarray = require( '@stdlib/array/filled' );


// VARIABLES //

var FOPTS = {
	'encoding': 'utf8'
};

// Logger:
var debug = logger( 'binary-loops:script' );

// Get the current year:
var CURRENT_YEAR = ( new Date() ).getFullYear().toString();

// Specify the copyright holder:
var COPYRIGHT = 'The Stdlib Authors';

// Templates:
var TMPL_HEADER = readFile( path.join( __dirname, 'templates', 'header.txt' ), FOPTS );
var TMPL_SOURCE = readFile( path.join( __dirname, 'templates', 'source.txt' ), FOPTS );
var TMPL_README = readFile( path.join( __dirname, 'templates', 'docs.txt' ), FOPTS );

// Output directories:
var INCLUDE_DIR = path.resolve( __dirname, '..', 'include', 'stdlib', 'strided', 'base', 'binary' );
var SRC_DIR = path.resolve( __dirname, '..', 'src' );

// Main header file:
var INCLUDE_MAIN = INCLUDE_DIR + '.h';

// Manifest file:
var MANIFEST = path.resolve( __dirname, '..', 'manifest.json' );

// README file:
var README = path.resolve( __dirname, '..', 'README.md' );

// Data types to exclude when generating loops:
var EXCLUDE_DTYPES = [ 'binary', 'generic', 'uint8c' ];

// Resolve a list of dtypes for which we want to create loops:
var DTYPES = filter( dtypes(), EXCLUDE_DTYPES );

// Define "special" loops, which cannot be readily generated according to standardized rules:
var SPECIAL_LOOPS = [];

// Hash containing C macro names:
var MACROS = {
	'default': 'STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED',
	'cast': 'STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED_ARG_CAST'
};

// Regular expression to test for a "loop" file:
var RE_LOOP_FILE = /^[a-z]{2}_[a-z](?:_as_[a-z]{2}_[a-z]|)\.(?:h|c)$/;

// Regular expression to match input and output array dtype characters:
var RE_SIGNATURE = /^([a-z])([a-z])_([a-z])/;

// Regular expression to match callback dtype characters:
var RE_CALLBACK = /_as_([a-z])([a-z])_([a-z])$/;


// FUNCTIONS //

/**
* Removes a list of elements from a provided list.
*
* @private
* @param {ArrayLikeObject} src - list to filter
* @param {ArrayLikeObject} list - items to remove
* @returns {ArrayLikeObject} filtered list
*
* @example
* var src = [ 'a', 'b', 'c', 'd' ];
* var list = [ 'b', 'd' ];
*
* var out = filter( src, list );
* // returns [ 'a', 'c' ]
*/
function filter( src, list ) {
	var out;
	var M;
	var N;
	var v;
	var i;
	var j;

	M = src.length;
	N = list.length;

	out = [];
	for ( i = 0; i < M; i++ ) {
		v = src[ i ];
		for ( j = 0; j < N; j++ ) {
			if ( v === list[ j ] ) {
				break;
			}
		}
		if ( j === N ) {
			out.push( v );
		}
	}
	return out;
}

/**
* Removes loop files from a directory.
*
* @private
* @param {string} dir - directory
*/
function removeLoopFiles( dir ) {
	var list;
	var i;

	list = readDir( dir );
	for ( i = 0; i < list.length; i++ ) {
		if ( RE_LOOP_FILE.test( list[ i ] ) ) {
			unlink( path.join( dir, list[ i ] ) );
		}
	}
}

/**
* Generates a list of loop signatures from a list of strided array data types.
*
* @private
* @param {StringArray} dtypes - list of data types
* @returns {StringArray} list of loop signatures
*/
function signatures( dtypes ) {
	var casts;
	var out;
	var ch1;
	var ch2;
	var ch3;
	var ch4;
	var t1;
	var t2;
	var t3;
	var t4;
	var N;
	var s;
	var i;
	var j;
	var k;

	N = dtypes.length;

	// Generate the list of signatures:
	out = [];
	for ( i = 0; i < N; i++ ) {
		t1 = dtypes[ i ];
		ch1 = dtypeChar( t1 );
		for ( j = 0; j < N; j++ ) {
			t2 = dtypes[ j ];

			// Resolve the promoted type for the current dtype pair:
			t3 = promotionRules( t1, t2 );

			// Resolve single-letter dtype abbreviations:
			ch2 = dtypeChar( t2 );
			ch3 = dtypeChar( t3 );

			// Generate the input/output array signature:
			s = ch1+ch2+'_'+ch3;

			// If the dtypes are not equal, require that the callback signature have the promoted dtype for input and output arguments...
			if ( ch1 === ch2 && ch2 === ch3 ) {
				out.push( s ); // e.g., `ff_f`
			} else {
				out.push( s+'_as_'+ch3+ch3+'_'+ch3 ); // e.g., `fd_d` => `fd_d_as_dd_d`
			}
			// Resolve the list of safe casts for the promoted dtype:
			casts = safeCasts( t3 );

			// Remove the excluded dtypes:
			casts = filter( casts, EXCLUDE_DTYPES );

			// Generate signatures for allowed casts:
			for ( k = 0; k < casts.length; k++ ) {
				t4 = casts[ k ];
				if ( t4 === t3 ) {
					// For float dtypes, allow downcasting from a higher precision...
					if ( ch3 === 'f' ) {
						out.push( ch1+ch2+'_'+ch3+'_as_dd_d' ); // e.g., `bf_f` => `bf_f_as_dd_d`
					} else if ( ch3 === 'c' ) {
						out.push( ch1+ch2+'_'+ch3+'_as_zz_z' ); // e.g., `bf_c` => `bf_c_as_zz_z`
					}
					continue;
				}
				ch4 = dtypeChar( t4 );
				s = ch1+ch2+'_'+ch4;
				if ( ch1 === ch2 ) {
					out.push( s ); // e.g., `ff_d`
				}
				out.push( s+'_as_'+ch4+ch4+'_'+ch4 ); // e.g., `ff_d_as_dd_d`

				// For float dtypes, allow downcasting from a higher precision...
				if ( ch4 === 'f' ) {
					out.push( s+'_as_dd_d' ); // e.g., `bb_f` => `bb_f_as_dd_d`
				} else if ( ch4 === 'c' ) {
					out.push( s+'_as_zz_z' ); // e.g., `bb_c` => `bb_c_as_zz_z`
				}
			}
		}
	}
	// Append any special loops:
	for ( i = 0; i < SPECIAL_LOOPS.length; i++ ) {
		out.push( SPECIAL_LOOPS[ i ] );
	}
	return out.sort();
}

/**
* Creates a header file for a provided loop signature.
*
* @private
* @param {string} signature - loop signature
* @throws {Error} unexpected error
*/
function createHeaderFile( signature ) {
	var fpath;
	var file;
	var err;

	file = replace( TMPL_HEADER, '{{YEAR}}', CURRENT_YEAR );
	file = replace( file, '{{COPYRIGHT}}', COPYRIGHT );
	file = replace( file, '{{INCLUDE_GUARD}}', uppercase( signature ) );
	file = replace( file, '{{SIGNATURE}}', signature );

	fpath = path.join( INCLUDE_DIR, signature+'.h' );

	debug( 'Creating header file: %s', fpath );
	err = writeFile( fpath, file, FOPTS );
	if ( err ) {
		throw err;
	}
}

/**
* Creates header files for a list of loop signatures.
*
* @private
* @param {StringArray} signatures - list of loop signatures
*/
function createHeaderFiles( signatures ) {
	var i;
	for ( i = 0; i < signatures.length; i++ ) {
		createHeaderFile( signatures[ i ] );
	}
}

/**
* Creates a source file for a provided loop signature.
*
* @private
* @param {string} signature - loop signature
* @throws {Error} unexpected error
*/
function createSourceFile( signature ) {
	var match;
	var macro;
	var bytes;
	var fpath;
	var file;
	var args;
	var err;
	var ch1;
	var ch2;
	var ch3;
	var ct1;
	var ct2;
	var ct3;
	var t1;
	var t2;
	var t3;
	var N;

	file = replace( TMPL_SOURCE, '{{YEAR}}', CURRENT_YEAR );
	file = replace( file, '{{COPYRIGHT}}', COPYRIGHT );
	file = replace( file, '{{SIGNATURE}}', signature );
	if ( /[cz]/.test( signature ) ) {
		file = replace( file, '{{INCLUDE_COMPLEX}}', '\n#include <complex.h>' );
		file = replace( file, '{{EXAMPLE_INCLUDE_COMPLEX}}', '\n* #include <complex.h>' );
	} else {
		file = replace( file, '{{INCLUDE_COMPLEX}}', '' );
		file = replace( file, '{{EXAMPLE_INCLUDE_COMPLEX}}', '' );
	}

	// Resolve the array data types:
	match = signature.match( RE_SIGNATURE );
	ch1 = match[ 1 ];
	t1 = char2dtype( ch1 );
	ch2 = match[ 2 ];
	t2 = char2dtype( ch2 );
	ch3 = match[ 3 ];
	t3 = char2dtype( ch3 );

	// Define array strides:
	file = replace( file, '{{INPUT_ARRAY_STRIDE_1}}', bytesPerElement( t1 ).toString() );
	file = replace( file, '{{INPUT_ARRAY_STRIDE_2}}', bytesPerElement( t2 ).toString() );
	file = replace( file, '{{OUTPUT_ARRAY_STRIDE}}', bytesPerElement( t3 ).toString() );

	// Define the number of strided array elements:
	N = 3;
	file = replace( file, '{{N}}', N.toString() );

	// Define underlying byte arrays:
	bytes = filledarray( 0, N*bytesPerElement( t1 ), 'generic' ).join( ', ' );
	file = replace( file, '{{INPUT_ARRAY_BYTES_1}}', bytes );
	bytes = filledarray( 0, N*bytesPerElement( t2 ), 'generic' ).join( ', ' );
	file = replace( file, '{{INPUT_ARRAY_BYTES_2}}', bytes );
	bytes = filledarray( 0, N*bytesPerElement( t3 ), 'generic' ).join( ', ' );
	file = replace( file, '{{OUTPUT_ARRAY_BYTES}}', bytes );

	// Resolve the callback parameter data types:
	match = signature.match( RE_CALLBACK );
	if ( match ) {
		ch1 = match[ 1 ];
		ct1 = dtype2c( char2dtype( ch1 ) );
		ch2 = match[ 2 ];
		ct2 = dtype2c( char2dtype( ch2 ) );
		ch3 = match[ 3 ];
		ct3 = dtype2c( char2dtype( ch3 ) );
	} else {
		ct1 = dtype2c( t1 );
		ct2 = dtype2c( t2 );
		ct3 = dtype2c( t3 );
	}
	file = replace( file, '{{CALLBACK_PARAM_TYPE_1}}', ct1 );
	file = replace( file, '{{CALLBACK_PARAM_TYPE_2}}', ct2 );
	file = replace( file, '{{CALLBACK_RETURN_TYPE}}', ct3 );

	// Resolve the loop macro:
	if ( match ) {
		macro = MACROS.cast;
		args = [ dtype2c( t1 ), dtype2c( t2 ), dtype2c( t3 ), ct1, ct2 ];
	} else {
		macro = MACROS.default;
		args = [ ct1, ct2, ct3 ];
	}
	file = replace( file, '{{LOOP_MACRO}}', macro );
	file = replace( file, '{{LOOP_MACRO_ARGUMENTS}}', args.join( ', ' ) );

	// Create the source file:
	fpath = path.join( SRC_DIR, signature+'.c' );
	debug( 'Creating source file: %s', fpath );
	err = writeFile( fpath, file, FOPTS );
	if ( err ) {
		throw err;
	}
}

/**
* Creates source files for a list of loop signatures.
*
* @private
* @param {StringArray} signatures - list of loop signatures
*/
function createSourceFiles( signatures ) {
	var i;
	for ( i = 0; i < signatures.length; i++ ) {
		createSourceFile( signatures[ i ] );
	}
}

/**
* Generates README documentation for a loop interface.
*
* @private
* @param {string} signature - loop signature
* @returns {string} documentation
*/
function createDoc( signature ) {
	var match;
	var bytes;
	var doc;
	var ch1;
	var ch2;
	var ch3;
	var ct1;
	var ct2;
	var ct3;
	var t1;
	var t2;
	var t3;
	var N;

	doc = replace( TMPL_README, '{{SIGNATURE}}', signature );
	if ( /[cz]/.test( signature ) ) {
		doc = replace( doc, '{{INCLUDE_COMPLEX}}', '\n#include <complex.h>' );
	} else {
		doc = replace( doc, '{{INCLUDE_COMPLEX}}', '' );
	}

	// Resolve the array data types:
	match = signature.match( RE_SIGNATURE );
	ch1 = match[ 1 ];
	t1 = char2dtype( ch1 );
	ch2 = match[ 2 ];
	t2 = char2dtype( ch2 );
	ch3 = match[ 3 ];
	t3 = char2dtype( ch3 );

	// Define array strides:
	doc = replace( doc, '{{INPUT_ARRAY_STRIDE_1}}', bytesPerElement( t1 ).toString() );
	doc = replace( doc, '{{INPUT_ARRAY_STRIDE_2}}', bytesPerElement( t2 ).toString() );
	doc = replace( doc, '{{OUTPUT_ARRAY_STRIDE}}', bytesPerElement( t3 ).toString() );

	// Define the number of strided array elements:
	N = 3;
	doc = replace( doc, '{{N}}', N.toString() );

	// Define underlying byte arrays:
	bytes = filledarray( 0, N*bytesPerElement( t1 ), 'generic' ).join( ', ' );
	doc = replace( doc, '{{INPUT_ARRAY_BYTES_1}}', bytes );
	bytes = filledarray( 0, N*bytesPerElement( t2 ), 'generic' ).join( ', ' );
	doc = replace( doc, '{{INPUT_ARRAY_BYTES_2}}', bytes );
	bytes = filledarray( 0, N*bytesPerElement( t3 ), 'generic' ).join( ', ' );
	doc = replace( doc, '{{OUTPUT_ARRAY_BYTES}}', bytes );

	// Resolve the callback parameter data types:
	match = signature.match( RE_CALLBACK );
	if ( match ) {
		ch1 = match[ 1 ];
		ct1 = dtype2c( char2dtype( ch1 ) );
		ch2 = match[ 2 ];
		ct2 = dtype2c( char2dtype( ch2 ) );
		ch3 = match[ 3 ];
		ct3 = dtype2c( char2dtype( ch3 ) );
	} else {
		ct1 = dtype2c( t1 );
		ct2 = dtype2c( t2 );
		ct3 = dtype2c( t3 );
	}
	doc = replace( doc, '{{CALLBACK_PARAM_TYPE_1}}', ct1 );
	doc = replace( doc, '{{CALLBACK_PARAM_TYPE_2}}', ct2 );
	doc = replace( doc, '{{CALLBACK_RETURN_TYPE}}', ct3 );

	return doc;
}

/**
* Returns a character code list item.
*
* @private
* @param {string} dtype - data type
* @returns {string} list item
*/
function charCodeListItem( dtype ) {
	return [
		'-   **',
		dtypeChar( dtype ),
		'**: `',
		dtype,
		'` (',
		dtypeDesc( dtype ),
		').'
	].join( '' );
}

/**
* Returns a list of character code descriptions.
*
* @private
* @param {StringArray} dtypes - list of data types
* @returns {StringArray} list of character code descriptions
*/
function charCodeList( dtypes ) {
	var out;
	var i;

	out = [];
	for ( i = 0; i < dtypes.length; i++ ) {
		out.push( charCodeListItem( dtypes[ i ] ) );
	}
	return out;
}

/**
* Update the package README.
*
* @private
* @param {StringArray} signatures - list of (sorted) loop signatures
* @throws {Error} unexpected error
*/
function updateREADME( signatures ) {
	var parts;
	var file;
	var docs;
	var out;
	var err;
	var i;

	file = readFile( README, FOPTS );
	if ( file instanceof Error ) {
		throw file;
	}
	docs = [];
	for ( i = 0; i < signatures.length; i++ ) {
		docs.push( createDoc( signatures[ i ] ) );
	}
	out = [];
	parts = file.split( '\n<!-- charcodes -->' );
	out.push( parts[ 0 ] );
	out.push( '<!-- charcodes -->' );
	out.push( '' );
	out.push( charCodeList( DTYPES ).join( '\n' ) );
	out.push( '' );

	parts = parts[ 1 ].split( '<!-- ./charcodes -->\n' );
	out.push( '<!-- ./charcodes -->' );

	parts = parts[ 1 ].split( '\n<!-- loops -->' );
	out.push( parts[ 0 ] );
	out.push( '<!-- loops -->' );
	out.push( '' );
	out.push( docs.join( '\n' ) );

	parts = parts[ 1 ].split( '<!-- ./loops -->\n' );
	out.push( '<!-- ./loops -->' );
	out.push( parts[ 1 ] );

	err = writeFile( README, out.join( '\n' ), FOPTS );
	if ( err ) {
		throw err;
	}
}

/**
* Updates the main header file.
*
* @private
* @param {StringArray} signatures - list of (sorted) loop signatures
* @throws {Error} unexpected error
*/
function updateMainHeader( signatures ) {
	var file;
	var list;
	var err;
	var sig;
	var ch;
	var i;

	file = readFile( INCLUDE_MAIN, FOPTS );
	if ( file instanceof Error ) {
		throw file;
	}
	list = [];
	ch = signatures[ 0 ].charAt( 0 );
	for ( i = 0; i < signatures.length; i++ ) {
		sig = signatures[ i ];
		if ( sig.charAt( 0 ) !== ch ) {
			ch = sig.charAt( 0 );
			list.push( '' );
		}
		list.push( '#include "binary/'+sig+'.h"' );
	}
	file = [
		substringBefore( file, '\n// BEGIN LOOPS' ),
		'// BEGIN LOOPS',
		list.join( '\n' ),
		'// END LOOPS',
		substringAfter( file, '// END LOOPS\n' )
	].join( '\n' );

	err = writeFile( INCLUDE_MAIN, file, FOPTS );
	if ( err ) {
		throw err;
	}
}

/**
* Updates the package manifest.
*
* @private
* @param {StringArray} signatures - list of (sorted) loop signatures
* @throws {Error} unexpected error
*/
function updateManifest( signatures ) {
	var file;
	var list;
	var err;
	var i;

	file = readJSON( MANIFEST, FOPTS );
	if ( file instanceof Error ) {
		throw file;
	}
	list = [];
	for ( i = 0; i < signatures.length; i++ ) {
		list.push( './src/'+signatures[ i ]+'.c' );
	}
	file.confs[ 0 ].src = list;

	err = writeFile( MANIFEST, JSON.stringify( file, null, 2 )+'\n', FOPTS );
	if ( err ) {
		throw err;
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var sigs;

	debug( 'Data types: %s', DTYPES.join( ', ' ) );

	// Generate the list of loop signatures:
	sigs = signatures( DTYPES );
	debug( 'Signatures: %s', '\n'+sigs.join( '\n' ) );

	// Remove loop files from output directories:
	debug( 'Clearing include directory: %s', INCLUDE_DIR );
	removeLoopFiles( INCLUDE_DIR );

	debug( 'Clearing source directory: %s', SRC_DIR );
	removeLoopFiles( SRC_DIR );

	// Create header files for the list of loop signatures:
	debug( 'Creating header files...' );
	createHeaderFiles( sigs );

	// Create source files for the list of loop signatures:
	debug( 'Creating source files...' );
	createSourceFiles( sigs );

	// Update the main header file to include the loop header files:
	debug( 'Updating main header file: %s', INCLUDE_MAIN );
	updateMainHeader( sigs );

	// Update the package manifest to include the loop source files:
	debug( 'Updating manifest file: %s', MANIFEST );
	updateManifest( sigs );

	// Update the package README to include the loop interfaces:
	debug( 'Updating README file: %s', README );
	updateREADME( sigs );

	debug( 'Finished.' );
}

main();
