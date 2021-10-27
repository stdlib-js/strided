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

// MAIN //

/**
* Applies a binary function accepting and returning single-precision floating-point numbers to corresponding elements in two single-precision floating-point strided input arrays and assigns each result to an element in a single-precision floating-point strided output array.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Float32Array} y - input array
* @param {integer} strideY - `y` stride length
* @param {Float32Array} z - destination array
* @param {integer} strideZ - `z` stride length
* @param {Function} fcn - binary function to apply
* @returns {Float32Array} `z`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var addf = require( '@stdlib/math/base/ops/addf' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var z = new Float32Array( x.length );
*
* smap2( x.length, x, 1, y, 1, z, 1, addf );
*
* console.log( z );
* // => <Float32Array>[ 2.0, 4.0, 6.0, 8.0, 10.0 ]
*/
function smap2( N, x, strideX, y, strideY, z, strideZ, fcn ) {
	var ix;
	var iy;
	var iz;
	var i;
	if ( N <= 0 ) {
		return z;
	}
	if ( strideX < 0 ) {
		ix = (1-N) * strideX;
	} else {
		ix = 0;
	}
	if ( strideY < 0 ) {
		iy = (1-N) * strideY;
	} else {
		iy = 0;
	}
	if ( strideZ < 0 ) {
		iz = (1-N) * strideZ;
	} else {
		iz = 0;
	}
	for ( i = 0; i < N; i++ ) {
		z[ iz ] = fcn( x[ ix ], y[ iy ] );
		ix += strideX;
		iy += strideY;
		iz += strideZ;
	}
	return z;
}


// EXPORTS //

module.exports = smap2;
