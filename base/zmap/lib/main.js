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

var stride2offset = require( './../../../base/stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Applies a unary function to a double-precision complex floating-point strided input array and assigns results to a double-precision complex floating-point strided output array.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Complex128Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Complex128Array} y - destination array
* @param {integer} strideY - `y` stride length
* @param {Function} fcn - unary function to apply
* @returns {Complex128Array} `y`
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* function scale( x ) {
*     var re = real( x );
*     var im = imag( x );
*     return new Complex128( re*10.0, im*10.0 );
* }
*
* var x = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0 ] );
* var y = new Complex128Array( x.length );
*
* zmap( x.length, x, 1, y, 1, scale );
*
* var v = y.get( 0 );
* // returns <Complex128>
*
* var re = real( v );
* // returns 10.0
*
* var im = imag( v );
* // returns 10.0
*/
function zmap( N, x, strideX, y, strideY, fcn ) {
	return ndarray( N, x, strideX, stride2offset( N, strideX ), y, strideY, stride2offset( N, strideY ), fcn ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = zmap;
