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

'use strict';

// MODULES //

var isFunction = require( '@stdlib/assert/is-function' );
var isTypedArrayLike = require( '@stdlib/assert/is-typed-array-like' );
var resolve = require( './../../../base/dtype-resolve-enum' );
var reinterpretComplex64 = require( './../../../base/reinterpret-complex64' );
var reinterpretComplex128 = require( './../../../base/reinterpret-complex128' );
var reinterpretBoolean = require( './../../../base/reinterpret-boolean' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var COMPLEX64 = resolve( 'complex64' );
var COMPLEX128 = resolve( 'complex128' );
var BOOLEAN = resolve( 'bool' );


// MAIN //

/**
* Returns a function which dispatches to a native add-on applying a nullary function.
*
* ## Notes
*
* -   The returned function has the following signature:
*
*     ```text
*     f( N, dtypeX, x, strideX )
*     ```
*
*     where
*
*     -   **N**: number of indexed elements.
*     -   **dtypeX**: `x` data type.
*     -   **x**: output array.
*     -   **strideX**: `x` stride length.
*
* -   The add-on function should have the following signature:
*
*     ```text
*     f( N, dtypeX, x, strideX )
*     ```
*
*     where
*
*     -   **N**: number of indexed elements.
*     -   **dtypeX**: `x` data type (enumeration constant).
*     -   **x**: output array.
*     -   **strideX**: `x` stride length.
*
* -   The fallback function should have the following signature:
*
*     ```text
*     f( N, dtypeX, x, strideX )
*     ```
*
*     where
*
*     -   **N**: number of indexed elements.
*     -   **dtypeX**: `x` data type.
*     -   **x**: output array.
*     -   **strideX**: `x` stride length.
*
* @param {Function} addon - add-on interface
* @param {Function} fallback - fallback function
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be a function
* @returns {Function} dispatch function
*
* @example
* function addon( N, dtypeX, x, strideX ) {
*     // Call into native add-on...
* }
*
* function fallback( N, dtypeX, x, strideX ) {
*     // Fallback JavaScript implementation...
* }
*
* // Create a dispatch function:
* var f = dispatch( addon, fallback );
*
* // ...
*
* // Invoke the dispatch function with strided array arguments:
* f( 2, 'generic', [ 1, 2 ], 1 );
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
	* @param {Collection} x - output array
	* @param {integer} strideX - `x` stride length
	* @throws {TypeError} unable to resolve a strided array function supporting the provided array argument data types
	* @returns {Collection} `x`
	*/
	function dispatcher( N, dtypeX, x, strideX ) {
		var viewX;

		// WARNING: we assume that, if we're provided something resembling a typed array, we're provided a typed array; however, this can lead to potential unintended errors as the native add-on may not work with non-typed array objects (e.g., generic arrays)...
		if ( !isTypedArrayLike( x ) ) {
			fallback( N, dtypeX, x, strideX );
			return x;
		}
		dtypeX = resolve( dtypeX );
		if ( dtypeX === null ) {
			throw new TypeError( 'invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.' );
		}
		if ( dtypeX === COMPLEX64 ) {
			viewX = reinterpretComplex64( x, 0 );
		} else if ( dtypeX === COMPLEX128 ) {
			viewX = reinterpretComplex128( x, 0 );
		} else if ( dtypeX === BOOLEAN ) {
			viewX = reinterpretBoolean( x, 0 );
		} else {
			viewX = x;
		}
		addon( N, dtypeX, viewX, strideX );
		return x;
	}
}


// EXPORTS //

module.exports = dispatch;
