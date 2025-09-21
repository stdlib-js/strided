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
	'float64': 'setFloat64',
	'float32': 'setFloat32',
	'float16': 'setFloat16',
	'int64': 'setBigInt64',
	'int32': 'setInt32',
	'int16': 'setInt16',
	'int8': 'setInt8',
	'uint64': 'setBigUint64',
	'uint32': 'setUint32',
	'uint16': 'setUint16',
	'uint8': 'setUint8'
};


// FUNCTIONS //

/**
* Copies elements from an input strided indexed array to elements in a strided DataView.
*
* @private
* @param {string} dtype - input array data type
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {DataView} view - output DataView
* @param {integer} strideView - `view` stride length (in bytes)
* @param {NonNegativeInteger} offsetView - starting `view` index (in bytes)
* @param {boolean} littleEndian - boolean indicating whether to store the data in little-endian format
* @returns {DataView} output DataView
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var DataView = require( '@stdlib/array/dataview' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = new Float64Array( [ 1.0, 0.0, 1.0, 0.0 ] );
*
* var buf = new ArrayBuffer( 32 );
* var view = new DataView( buf );
*
* var out = indexed( 'float64', 4, arraylike2object( x ), 1, 0, view, 8, 0, true );
* // returns <DataView>
*
* var bool = ( out === view );
* // returns true
*
* var v = view.getFloat64( 0, true );
* // returns 1.0
*/
function indexed( dtype, N, x, strideX, offsetX, view, strideView, offsetView, littleEndian ) {
	var data;
	var ix;
	var iv;
	var m;
	var i;

	m = METHOD_TABLE[ dtype ];

	data = x.data;

	ix = offsetX;
	iv = offsetView;
	for ( i = 0; i < N; i++ ) {
		view[ m ]( iv, data[ ix ], littleEndian );
		ix += strideX;
		iv += strideView;
	}
	return view;
}

/**
* Copies elements from an input strided complex array to elements in a strided DataView.
*
* @private
* @param {string} dtype - input array data type
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Collection} x - input array object
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {DataView} view - output DataView
* @param {integer} strideView - `view` stride length (in bytes)
* @param {NonNegativeInteger} offsetView - starting `view` index (in bytes)
* @param {boolean} littleEndian - boolean indicating whether to store the data in little-endian format
* @returns {DataView} output DataView
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var DataView = require( '@stdlib/array/dataview' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = new Float64Array( [ 1.0, 0.0, 1.0, 0.0 ] );
*
* var buf = new ArrayBuffer( 32 );
* var view = new DataView( buf );
*
* var out = complex( 'float64', 2, arraylike2object( x ), 1, 0, view, 8, 0, true );
* // returns <DataView>
*
* var bool = ( out === view );
* // returns true
*
* var v = view.getFloat64( 0, true );
* // returns 1.0
*/
function complex( dtype, N, x, strideX, offsetX, view, strideView, offsetView, littleEndian ) {
	var nbytes;
	var data;
	var ix;
	var iv;
	var m;
	var i;

	m = METHOD_TABLE[ dtype ];
	nbytes = bytesPerElement( dtype );

	data = x.data;

	// Adjust meta data to account for interleaved real and imaginary components:
	strideX *= 2;
	offsetX *= 2;

	ix = offsetX;
	iv = offsetView;
	for ( i = 0; i < N; i++ ) {
		view[ m ]( iv, data[ ix ], littleEndian );
		view[ m ]( iv+nbytes, data[ ix+1 ], littleEndian );
		ix += strideX;
		iv += strideView;
	}
	return view;
}

/**
* Copies elements from an input strided accessor array to elements in a strided DataView.
*
* @private
* @param {string} dtype - input array data type
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {DataView} view - output DataView
* @param {integer} strideView - `view` stride length (in bytes)
* @param {NonNegativeInteger} offsetView - starting `view` index (in bytes)
* @param {boolean} littleEndian - boolean indicating whether to store the data in little-endian format
* @returns {DataView} output DataView
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var DataView = require( '@stdlib/array/dataview' );
*
* var x = arraylike2object( toAccessorArray( [ 1.0, 2.0, 3.0, 4.0 ] ) );
*
* var buf = new ArrayBuffer( 32 );
* var view = new DataView( buf );
*
* var out = accessors( 'float64', 4, x, 1, 0, view, 8, 0, true );
* // returns <DataView>
*
* var bool = ( out === view );
* // returns true
*
* var v = view.getFloat64( 0, true );
* // returns 1.0
*/
function accessors( dtype, N, x, strideX, offsetX, view, strideView, offsetView, littleEndian ) {
	var data;
	var get;
	var ix;
	var iv;
	var m;
	var i;

	m = METHOD_TABLE[ dtype ];

	data = x.data;
	get = x.accessors[ 0 ];

	ix = offsetX;
	iv = offsetView;
	for ( i = 0; i < N; i++ ) {
		view[ m ]( iv, get( data, ix ), littleEndian );
		ix += strideX;
		iv += strideView;
	}
	return view;
}


// MAIN //

/**
* Copies elements from an input strided array to elements in a strided DataView.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Collection} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {DataView} view - output DataView
* @param {integer} strideView - `view` stride length (in bytes)
* @param {NonNegativeInteger} offsetView - starting `view` index (in bytes)
* @param {boolean} littleEndian - boolean indicating whether to store the data in little-endian format
* @returns {DataView} output DataView
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var DataView = require( '@stdlib/array/dataview' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
*
* var buf = new ArrayBuffer( 32 );
* var view = new DataView( buf );
*
* var out = writeDataView( 4, x, 1, 0, view, 8, 0, true );
* // returns <DataView>
*
* var bool = ( out === view );
* // returns true
*
* var v = view.getFloat64( 0, true );
* // returns 1.0
*/
function writeDataView( N, x, strideX, offsetX, view, strideView, offsetView, littleEndian ) {
	var obj;
	var dt;
	if ( N <= 0 ) {
		return view;
	}
	obj = arraylike2object( x );
	if ( obj.accessorProtocol ) {
		// If provided a complex number array, reinterpret as a real typed array of interleaved real and imaginary components...
		if ( isComplex128Array( x ) ) {
			obj.data = reinterpret128( x, 0 );
			return complex( 'float64', N, obj, strideX, offsetX, view, strideView, offsetView, littleEndian );
		}
		if ( isComplex64Array( x ) ) {
			obj.data = reinterpret64( x, 0 );
			return complex( 'float32', N, obj, strideX, offsetX, view, strideView, offsetView, littleEndian );
		}
		// If provided a boolean array, reinterpret as typed array of integers...
		if ( isBooleanArray( x ) ) {
			obj.data = reinterpretBoolean( x, 0 );
			return indexed( 'uint8', N, obj, strideX, offsetX, view, strideView, offsetView, littleEndian );
		}
		// If provided a "generic" accessor array, assume double-precision floating-point numbers...
		return accessors( 'float64', N, obj, strideX, offsetX, view, strideView, offsetView, littleEndian );
	}
	if ( obj.dtype === null || obj.dtype === 'generic' ) {
		// If provided a "generic" array, assume double-precision floating-point numbers...
		dt = 'float64';
	} else {
		dt = obj.dtype;
	}
	return indexed( dt, N, obj, strideX, offsetX, view, strideView, offsetView, littleEndian );
}


// EXPORTS //

module.exports = writeDataView;
