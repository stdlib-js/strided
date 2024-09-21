/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

/* eslint-disable max-len */

'use strict';

// MODULES //

var isComplex128Array = require( '@stdlib/array/base/assert/is-complex128array' );
var isComplex64Array = require( '@stdlib/array/base/assert/is-complex64array' );
var isBooleanArray = require( '@stdlib/array/base/assert/is-booleanarray' );
var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var reinterpret128 = require( './../../../base/reinterpret-complex128' );
var reinterpret64 = require( './../../../base/reinterpret-complex64' );
var reinterpretBoolean = require( './../../../base/reinterpret-boolean' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );


// VARIABLES //

var METHOD_TABLE = {
	'float64': 'getFloat64',
	'float32': 'getFloat32',
	'float16': 'getFloat16',
	'int64': 'getBigInt64',
	'int32': 'getInt32',
	'int16': 'getInt16',
	'int8': 'getInt8',
	'uint64': 'getBigUint64',
	'uint32': 'getUint32',
	'uint16': 'getUint16',
	'uint8': 'getUint8'
};


// FUNCTIONS //

/**
* Copies elements from an input strided DataView to elements in a strided indexed array.
*
* @private
* @param {string} dtype - output array data type
* @param {NonNegativeInteger} N - number of indexed elements
* @param {DataView} view - input DataView
* @param {integer} strideView - `view` stride length (in bytes)
* @param {NonNegativeInteger} offsetView - starting `view` index (in bytes)
* @param {Object} out - output array object
* @param {integer} strideOut - `out` stride length
* @param {NonNegativeInteger} offsetOut - starting `out` index
* @param {boolean} littleEndian - boolean indicating whether the data is stored in little-endian format
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var DataView = require( '@stdlib/array/dataview' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var view = new DataView( x.buffer );
*
* var y = new Float64Array( x.length );
*
* indexed( 'float64', x.length, view, 8, 0, arraylike2object( y ), 1, 0, true );
* // e.g., y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
*/
function indexed( dtype, N, view, strideView, offsetView, out, strideOut, offsetOut, littleEndian ) {
	var data;
	var io;
	var iv;
	var m;
	var i;

	m = METHOD_TABLE[ dtype ];

	data = out.data;

	io = offsetOut;
	iv = offsetView;
	for ( i = 0; i < N; i++ ) {
		data[ io ] = view[ m ]( iv, littleEndian );
		io += strideOut;
		iv += strideView;
	}
}

/**
* Copies elements from an input strided DataView to elements in a strided complex array.
*
* @private
* @param {string} dtype - output array data type
* @param {NonNegativeInteger} N - number of indexed elements
* @param {DataView} view - input DataView
* @param {integer} strideView - `view` stride length (in bytes)
* @param {NonNegativeInteger} offsetView - starting `view` index (in bytes)
* @param {Collection} out - output array object
* @param {integer} strideOut - `out` stride length
* @param {NonNegativeInteger} offsetOut - starting `out` index
* @param {boolean} littleEndian - boolean indicating whether the data is stored in little-endian format
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var DataView = require( '@stdlib/array/dataview' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var view = new DataView( x.buffer );
*
* var y = new Float64Array( x.length );
*
* complex( 'float64', 2, view, 8, 0, arraylike2object( y ), 1, 0, true );
* // e.g., y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
*/
function complex( dtype, N, view, strideView, offsetView, out, strideOut, offsetOut, littleEndian ) {
	var nbytes;
	var data;
	var io;
	var iv;
	var m;
	var i;

	m = METHOD_TABLE[ dtype ];
	nbytes = bytesPerElement( dtype );

	data = out.data;

	// Adjust meta data to account for interleaved real and imaginary components:
	strideOut *= 2;
	offsetOut *= 2;

	io = offsetOut;
	iv = offsetView;
	for ( i = 0; i < N; i++ ) {
		data[ io ] = view[ m ]( iv, littleEndian );
		data[ io+1 ] = view[ m ]( iv+nbytes, littleEndian );
		io += strideOut;
		iv += strideView;
	}
}

/**
* Copies elements from an input strided DataView to elements in a strided accessor array.
*
* @private
* @param {string} dtype - output array data type
* @param {NonNegativeInteger} N - number of indexed elements
* @param {DataView} view - input DataView
* @param {integer} strideView - `view` stride length (in bytes)
* @param {NonNegativeInteger} offsetView - starting `view` index (in bytes)
* @param {Object} out - output array object
* @param {integer} strideOut - `out` stride length
* @param {NonNegativeInteger} offsetOut - starting `out` index
* @param {boolean} littleEndian - boolean indicating whether the data is stored in little-endian format
* @returns {void}
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
* var Float64Array = require( '@stdlib/array/float64' );
* var DataView = require( '@stdlib/array/dataview' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var view = new DataView( x.buffer );
*
* var y = new Float64Array( x.length );
*
* accessors( 'float64', x.length, view, 8, 0, arraylike2object( toAccessorArray( y ) ), 1, 0, true );
* // e.g., y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
*/
function accessors( dtype, N, view, strideView, offsetView, out, strideOut, offsetOut, littleEndian ) {
	var data;
	var set;
	var io;
	var iv;
	var m;
	var i;

	m = METHOD_TABLE[ dtype ];

	data = out.data;
	set = out.accessors[ 1 ];

	io = offsetOut;
	iv = offsetView;
	for ( i = 0; i < N; i++ ) {
		set( data, io, view[ m ]( iv, littleEndian ) );
		io += strideOut;
		iv += strideView;
	}
	return view;
}


// MAIN //

/**
* Copies elements from an input strided DataView to elements in an output strided array.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {DataView} view - input DataView
* @param {integer} strideView - `view` stride length (in bytes)
* @param {NonNegativeInteger} offsetView - starting `view` index (in bytes)
* @param {Collection} out - output array
* @param {integer} strideOut - `out` stride length
* @param {NonNegativeInteger} offsetOut - starting `out` index
* @param {boolean} littleEndian - boolean indicating whether the data is stored in little-endian format
* @returns {Collection} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var DataView = require( '@stdlib/array/dataview' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var view = new DataView( x.buffer );
*
* var y = new Float64Array( x.length );
* var out = readDataView( x.length, view, 8, 0, y, 1, 0, true );
* // e.g., returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
*
* var bool = ( out === y );
* // returns true
*/
function readDataView( N, view, strideView, offsetView, out, strideOut, offsetOut, littleEndian ) {
	var obj;
	var dt;
	if ( N <= 0 ) {
		return out;
	}
	obj = arraylike2object( out );
	if ( obj.accessorProtocol ) {
		// If provided a complex number array, reinterpret as a real typed array of interleaved real and imaginary components...
		if ( isComplex128Array( out ) ) {
			obj.data = reinterpret128( out, 0 );
			complex( 'float64', N, view, strideView, offsetView, obj, strideOut, offsetOut, littleEndian );
			return out;
		}
		if ( isComplex64Array( out ) ) {
			obj.data = reinterpret64( out, 0 );
			complex( 'float32', N, view, strideView, offsetView, obj, strideOut, offsetOut, littleEndian );
			return out;
		}
		// If provided a boolean array, reinterpret as typed array of integers...
		if ( isBooleanArray( out ) ) {
			obj.data = reinterpretBoolean( out, 0 );
			indexed( 'uint8', N, view, strideView, offsetView, obj, strideOut, offsetOut, littleEndian );
			return out;
		}
		// If provided a "generic" accessor array, assume double-precision floating-point numbers...
		accessors( 'float64', N, view, strideView, offsetView, obj, strideOut, offsetOut, littleEndian );
		return out;
	}
	if ( obj.dtype === null || obj.dtype === 'generic' ) {
		// If provided a "generic" array, assume double-precision floating-point numbers...
		dt = 'float64';
	} else {
		dt = obj.dtype;
	}
	indexed( dt, N, view, strideView, offsetView, obj, strideOut, offsetOut, littleEndian );
	return out;
}


// EXPORTS //

module.exports = readDataView;
