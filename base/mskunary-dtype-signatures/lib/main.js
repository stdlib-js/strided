/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var safeCasts = require( '@stdlib/ndarray/safe-casts' );
var resolveEnum = require( './../../../base/dtype-resolve-enum' );
var resolveStr = require( './../../../base/dtype-resolve-str' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Returns the intersection of two sorted lists.
*
* @private
* @param {ArrayLikeObject} list1 - first sorted list
* @param {ArrayLikeObject} list2 - second sorted list
* @returns {ArrayLikeObject} result
*
* @example
* var list1 = [ 'a', 'b', 'c', 'd' ];
* var list2 = [ 'b', 'd', 'e' ];
*
* var out = intersection( list1, list2 );
* // returns [ 'b', 'd' ]
*/
function intersection( list1, list2 ) {
	var out;
	var M;
	var N;
	var v;
	var i;
	var j;
	var k;

	M = list1.length;
	N = list2.length;

	out = [];
	k = 0;
	for ( i = 0; i < M; i++ ) {
		if ( k >= N ) {
			break;
		}
		v = list1[ i ];
		for ( j = k; j < N; j++ ) {
			if ( v === list2[ j ] ) {
				k = j + 1;
				out.push( v );
				break;
			}
		}
	}
	return out;
}

/**
* Resolves a list of data types to data type strings.
*
* @private
* @param {ArrayLikeObject} dtypes - list of data types
* @returns {(StringArray|Error)} data type strings (or an error)
*
* @example
* var out = resolve( [ 1, 2, 3 ] );
* // returns [...]
*/
function resolve( dtypes ) {
	var out;
	var dt;
	var i;

	out = [];
	for ( i = 0; i < dtypes.length; i++ ) {
		dt = resolveStr( dtypes[ i ] );
		if ( dt === null ) {
			return new TypeError( format( 'invalid argument. Must provide recognized data types. Unable to resolve a data type string. Value: `%s`.', dtypes[ i ] ) );
		}
		out.push( dt );
	}
	return out;
}


// MAIN //

/**
* Generates a list of masked unary interface signatures from strided array data types.
*
* ## Notes
*
* -   The function returns a strided array having a stride length of `3` (i.e., every `3` elements define a masked unary interface signature).
* -   For each signature (i.e., set of three consecutive non-overlapping strided array elements), the first element is the input data type, the second element is the mask data type, and the last element is the return data type.
* -   All signatures follow type promotion rules.
* -   The mask array data type is always `uint8`.
*
* @param {Array} dtypes1 - list of supported data types for the first argument
* @param {Array} dtypes2 - list of supported data types for the output argument
* @param {Options} [options] - options
* @param {boolean} [options.enums=false] - boolean flag indicating whether to return signatures as a list of enumeration constants
* @throws {TypeError} must provide recognized data types
* @returns {Array} strided array containing masked unary interface signatures
*
* @example
* var dtypes = [
*     'float64',
*     'float32',
*     'int32',
*     'uint8'
* ];
*
* var sigs = signatures( dtypes, dtypes );
* // e.g., returns [ 'float32', 'uint8', 'float32', ... ]
*/
function signatures( dtypes1, dtypes2, options ) {
	var casts;
	var opts;
	var tmp;
	var out;
	var dt1;
	var dt2;
	var t1;
	var M;
	var i;
	var j;

	if ( arguments.length > 2 ) {
		opts = options;
	} else {
		opts = {};
	}
	// Resolve the list of provided data types to data type strings:
	dt1 = resolve( dtypes1 );
	if ( dt1 instanceof Error ) {
		throw dt1;
	}
	if ( dtypes2 === dtypes1 ) { // don't do work if we don't need to
		dt2 = dt1;
	} else {
		dt2 = resolve( dtypes2 );
		if ( dt2 instanceof Error ) {
			throw dt2;
		}
	}
	// Sort the list of return dtypes:
	dt2.sort();

	// Generate the list of signatures...
	M = dt1.length;
	out = [];
	for ( i = 0; i < M; i++ ) {
		t1 = dt1[ i ];

		// Resolve the list of safe casts for the input dtype:
		casts = safeCasts( t1 );
		if ( casts === null ) {
			continue;
		}
		// Remove safe casts which are not among the supported output dtypes:
		casts = intersection( dt2, casts.sort() );

		// Generate signatures for allowed casts...
		for ( j = 0; j < casts.length; j++ ) {
			out.push( t1, 'uint8', casts[ j ] );
		}
	}
	if ( opts.enums ) {
		tmp = [];
		for ( i = 0; i < out.length; i++ ) {
			tmp.push( resolveEnum( out[ i ] ) );
		}
		out = tmp;
	}
	return out;
}


// EXPORTS //

module.exports = signatures;
