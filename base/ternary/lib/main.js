/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Applies a ternary callback to strided input array elements and assigns results to elements in a strided output array.
*
* @param {ArrayLikeObject<Collection>} arrays - array-like object containing three input arrays and one output array
* @param {NonNegativeIntegerArray} shape - array-like object containing a single element, the number of indexed elements
* @param {IntegerArray} strides - array-like object containing the stride lengths for the input and output arrays
* @param {Callback} fcn - ternary callback
* @returns {void}
*
* @example
* var add = require( '@stdlib/math/base/ops/add3' );
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var w = new Float64Array( x.length );
*
* var shape = [ x.length ];
* var strides = [ 1, 1, 1, 1 ];
*
* ternary( [ x, y, z, w ], shape, strides, add );
*
* console.log( w );
* // => <Float64Array>[ 3.0, 6.0, 9.0, 12.0, 15.0 ]
*/
function ternary( arrays, shape, strides, fcn ) {
	var sx;
	var sy;
	var sz;
	var sw;
	var ix;
	var iy;
	var iz;
	var iw;
	var x;
	var y;
	var z;
	var w;
	var N;
	var i;

	N = shape[ 0 ];
	if ( N <= 0 ) {
		return;
	}
	sx = strides[ 0 ];
	sy = strides[ 1 ];
	sz = strides[ 2 ];
	sw = strides[ 3 ];
	if ( sx < 0 ) {
		ix = (1-N) * sx;
	} else {
		ix = 0;
	}
	if ( sy < 0 ) {
		iy = (1-N) * sy;
	} else {
		iy = 0;
	}
	if ( sz < 0 ) {
		iz = (1-N) * sz;
	} else {
		iz = 0;
	}
	if ( sw < 0 ) {
		iw = (1-N) * sw;
	} else {
		iw = 0;
	}
	x = arrays[ 0 ];
	y = arrays[ 1 ];
	z = arrays[ 2 ];
	w = arrays[ 3 ];
	for ( i = 0; i < N; i++ ) {
		w[ iw ] = fcn( x[ ix ], y[ iy ], z[ iz ] );
		ix += sx;
		iy += sy;
		iz += sz;
		iw += sw;
	}
}


// EXPORTS //

module.exports = ternary;
