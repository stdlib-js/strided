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

/* eslint-disable array-element-newline */

'use strict';

var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Int8Array = require( '@stdlib/array/int8' );
var dtypes = require( './../../dtypes' );
var sin = require( '@stdlib/math/base/special/sin' );
var dispatchBy = require( './../lib' );

function apply( arrays, shape, strides, fcn, clbk, thisArg ) {
	var sx;
	var sy;
	var ix;
	var iy;
	var N;
	var x;
	var y;
	var v;
	var i;

	N = shape[ 0 ];
	if ( N <= 0 ) {
		return;
	}
	sx = strides[ 0 ];
	if ( sx < 0 ) {
		ix = (1-N) * sx;
	} else {
		ix = 0;
	}
	sy = strides[ 1 ];
	if ( sy < 0 ) {
		iy = (1-N) * sy;
	} else {
		iy = 0;
	}
	x = arrays[ 0 ];
	y = arrays[ 1 ];
	for ( i = 0; i < N; i++ ) {
		v = clbk.call( thisArg, x[ ix ], i, ix, x );
		if ( v !== void 0 ) {
			y[ iy ] = fcn( v );
		}
		ix += sx;
		iy += sy;
	}
}

function accessor( v ) {
	return v * 2.0;
}

var fcns = [
	apply,
	apply,
	apply,
	apply,
	apply,
	apply,
	apply,
	apply,
	apply,
	apply,
	apply,
	apply,
	apply,
	apply,
	apply
];

var types = [
	dtypes.float64, dtypes.float64,
	dtypes.float32, dtypes.float64,
	dtypes.float32, dtypes.float32,
	dtypes.int32, dtypes.float64,
	dtypes.uint32, dtypes.float64,
	dtypes.int16, dtypes.float64,
	dtypes.int16, dtypes.float32,
	dtypes.uint16, dtypes.float64,
	dtypes.uint16, dtypes.float32,
	dtypes.int8, dtypes.float64,
	dtypes.int8, dtypes.float32,
	dtypes.uint8, dtypes.float64,
	dtypes.uint8, dtypes.float32,
	dtypes.uint8c, dtypes.float64,
	dtypes.uint8c, dtypes.float32
];

var data = [
	sin,
	sin,
	sin,
	sin,
	sin,
	sin,
	sin,
	sin,
	sin,
	sin,
	sin,
	sin,
	sin,
	sin,
	sin
];

var sine = dispatchBy( fcns, types, data, 8, 1, 1 );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( x.length );

sine( x.length, dtypes.float64, x, 1, dtypes.float64, y, 1, accessor );
console.log( y );

x = new Int8Array( [ 1, 2, 3, 4, 5 ] );
y = new Float32Array( x.length );

sine( x.length, dtypes.int8, x, 1, dtypes.float32, y, 1, accessor );
console.log( y );
