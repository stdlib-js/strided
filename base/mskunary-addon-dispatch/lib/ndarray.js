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

var isFunction = require( '@stdlib/assert/is-function' );
var isTypedArrayLike = require( '@stdlib/assert/is-typed-array-like' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var resolve = require( './../../../base/dtype-resolve-enum' );
var reinterpretComplex64 = require( './../../../base/reinterpret-complex64' );
var reinterpretComplex128 = require( './../../../base/reinterpret-complex128' );
var reinterpretBoolean = require( './../../../base/reinterpret-boolean' );
var offsetView = require( './../../../base/offset-view' );
var minViewBufferIndex = require( './../../../base/min-view-buffer-index' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var COMPLEX64 = resolve( 'complex64' );
var COMPLEX128 = resolve( 'complex128' );
var BOOLEAN = resolve( 'bool' );


// MAIN //

/**
* Returns a function which dispatches to a native add-on applying a unary function to an input strided array according to a mask strided array using alternative indexing semantics.
*
* ## Notes
*
* -   The returned function has the following signature:
*
*     ```text
*     f( N, dtypeX, x, strideX, offsetX, dtypeMask, mask, strideMask, offsetMask, dtypeY, y, strideY, offsetY )
*     ```
*
*     where
*
*     -   **N**: number of indexed elements.
*     -   **dtypeX**: `x` data type.
*     -   **x**: input array.
*     -   **strideX**: `x` stride length.
*     -   **offsetX**: starting `x` index.
*     -   **dtypeMask**: `mask` data type.
*     -   **mask**: mask array.
*     -   **strideMask**: `mask` stride length.
*     -   **offsetMask**: starting `mask` index.
*     -   **dtypeY**: `y` data type.
*     -   **y**: output array.
*     -   **strideY**: `y` stride length.
*     -   **offsetY**: starting `y` index.
*
* -   The add-on function should have the following signature:
*
*     ```text
*     f( N, dtypeX, x, strideX, dtypeMask, mask, strideMask, dtypeY, y, strideY )
*     ```
*
*     where
*
*     -   **N**: number of indexed elements.
*     -   **dtypeX**: `x` data type (enumeration constant).
*     -   **x**: input array.
*     -   **strideX**: `x` stride length.
*     -   **dtypeMask**: `mask` data type (enumeration constant).
*     -   **mask**: mask array.
*     -   **strideMask**: `mask` stride length.
*     -   **dtypeY**: `y` data type (enumeration constant).
*     -   **y**: output array.
*     -   **strideY**: `y` stride length.
*
* -   The fallback function should have the following signature:
*
*     ```text
*     f( N, dtypeX, x, strideX, offsetX, dtypeMask, mask, strideMask, offsetMask, dtypeY, y, strideY, offsetY )
*     ```
*
*     where
*
*     -   **N**: number of indexed elements.
*     -   **dtypeX**: `x` data type.
*     -   **x**: input array.
*     -   **strideX**: `x` stride length.
*     -   **offsetX**: starting `x` index.
*     -   **dtypeMask**: `mask` data type.
*     -   **mask**: mask array.
*     -   **strideMask**: `mask` stride length.
*     -   **offsetMask**: starting `mask` index.
*     -   **dtypeY**: `y` data type.
*     -   **y**: output array.
*     -   **strideY**: `y` stride length.
*     -   **offsetY**: starting `y` index.
*
* @param {Function} addon - add-on interface
* @param {Function} fallback - fallback function
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be a function
* @returns {Function} dispatch function
*
* @example
* function addon( N, dtypeX, x, strideX, dtypeMask, mask, strideMask, dtypeY, y, strideY ) {
*     // Call into native add-on...
* }
*
* function fallback( N, dtypeX, x, strideX, offsetX, dtypeMask, mask, strideMask, offsetMask, dtypeY, y, strideY, offsetY ) {
*     // Fallback JavaScript implementation...
* }
*
* // Create a dispatch function:
* var f = dispatch( addon, fallback );
*
* // ...
*
* // Invoke the dispatch function with strided array arguments:
* f( 2, 'generic', [ 1, 2 ], 1, 0, 'generic', [ 0, 0 ], 1, 0, 'generic', [ 0, 0 ], 1, 0 );
*/
function dispatch( addon, fallback ) {
	if ( !isFunction( addon ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', addon ) );
	}
	if ( !isFunction( fallback ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a function. Value: `%s`.', fallback ) );
	}
	return dispatcher;

	/**
	* Dispatches to a native add-on.
	*
	* @private
	* @param {integer} N - number of indexed elements
	* @param {*} dtypeX - `x` data type
	* @param {Collection} x - input array
	* @param {integer} strideX - `x` stride length
	* @param {NonNegativeInteger} offsetX - starting `x` index
	* @param {*} dtypeMask - `mask` data type
	* @param {Collection} mask - mask array
	* @param {integer} strideMask - `mask` stride length
	* @param {NonNegativeInteger} offsetMask - starting `mask` index
	* @param {*} dtypeY - `y` data type
	* @param {Collection} y - destination array
	* @param {integer} strideY - `y` stride length
	* @param {NonNegativeInteger} offsetY - starting `y` index
	* @throws {TypeError} fifth argument must be a nonnegative integer
	* @throws {TypeError} ninth argument must be a nonnegative integer
	* @throws {TypeError} thirteenth argument must be a nonnegative integer
	* @throws {TypeError} unable to resolve a strided array function supporting the provided array argument data types
	* @returns {Collection} `y`
	*/
	function dispatcher( N, dtypeX, x, strideX, offsetX, dtypeMask, mask, strideMask, offsetMask, dtypeY, y, strideY, offsetY ) { // eslint-disable-line max-params
		var viewMask;
		var viewX;
		var viewY;

		// WARNING: we assume that, if we're provided something resembling a typed array, we're provided a typed array; however, this can lead to potential unintended errors as the native add-on may not work with non-typed array objects (e.g., generic arrays)...
		if ( !isTypedArrayLike( x ) || !isTypedArrayLike( y ) || !isTypedArrayLike( mask ) ) {
			fallback( N, dtypeX, x, strideX, offsetX, dtypeMask, mask, strideMask, offsetMask, dtypeY, y, strideY, offsetY );
			return y;
		}
		dtypeX = resolve( dtypeX );
		dtypeY = resolve( dtypeY );
		dtypeMask = resolve( dtypeMask );
		if ( dtypeX === null || dtypeY === null || dtypeMask === null ) {
			throw new TypeError( 'invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.' );
		}
		if ( !isNonNegativeInteger( offsetX ) ) {
			throw new TypeError( format( 'invalid argument. Input array offset must be a nonnegative integer. Value: `%s`.', offsetX ) );
		}
		if ( !isNonNegativeInteger( offsetY ) ) {
			throw new TypeError( format( 'invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.', offsetY ) );
		}
		if ( !isNonNegativeInteger( offsetMask ) ) {
			throw new TypeError( format( 'invalid argument. Mask array offset must be a nonnegative integer. Value: `%s`.', offsetMask ) );
		}
		offsetX = minViewBufferIndex( N, strideX, offsetX );
		offsetY = minViewBufferIndex( N, strideY, offsetY );
		offsetMask = minViewBufferIndex( N, strideMask, offsetMask );
		if ( dtypeX === COMPLEX64 ) {
			viewX = reinterpretComplex64( x, offsetX );
		} else if ( dtypeX === COMPLEX128 ) {
			viewX = reinterpretComplex128( x, offsetX );
		} else if ( dtypeX === BOOLEAN ) {
			viewX = reinterpretBoolean( x, offsetX );
		} else {
			viewX = offsetView( x, offsetX );
		}
		if ( dtypeY === COMPLEX64 ) {
			viewY = reinterpretComplex64( y, offsetY );
		} else if ( dtypeY === COMPLEX128 ) {
			viewY = reinterpretComplex128( y, offsetY );
		} else if ( dtypeY === BOOLEAN ) {
			viewY = reinterpretBoolean( y, offsetY );
		} else {
			viewY = offsetView( y, offsetY );
		}
		viewMask = offsetView( mask, offsetMask );

		addon( N, dtypeX, viewX, strideX, dtypeMask, viewMask, strideMask, dtypeY, viewY, strideY );
		return y;
	}
}


// EXPORTS //

module.exports = dispatch;
