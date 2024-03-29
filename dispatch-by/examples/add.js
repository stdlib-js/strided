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
var Int32Array = require( '@stdlib/array/int32' );
var dtypes = require( './../../dtypes' );
var dispatchBy = require( './../lib' );

function add2( arrays, shape, strides, clbk, thisArg ) {
	var sx;
	var sy;
	var sz;
	var ix;
	var iy;
	var iz;
	var N;
	var x;
	var y;
	var z;
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
	sz = strides[ 2 ];
	if ( sz < 0 ) {
		iz = (1-N) * sz;
	} else {
		iz = 0;
	}
	x = arrays[ 0 ];
	y = arrays[ 1 ];
	z = arrays[ 2 ];
	for ( i = 0; i < N; i++ ) {
		v = clbk.call( thisArg, [ x[ ix ], y[ iy ] ], i, [ ix, iy ], [ x, y ] );
		if ( v !== void 0 ) {
			z[ iz ] = v[ 0 ] + v[ 1 ];
		}
		ix += sx;
		iy += sy;
		iz += sz;
	}
}

function accessor( values ) {
	values[ 0 ] *= 2.0;
	values[ 1 ] *= 2.0;
	return values;
}

var fcns = [
	add2,
	add2,
	add2,
	add2,
	add2,
	add2,
	add2,
	add2,
	add2
];

var types = [
	dtypes.float64, dtypes.float64, dtypes.float64,
	dtypes.float32, dtypes.float32, dtypes.float32,
	dtypes.int32, dtypes.int32, dtypes.int32,
	dtypes.uint32, dtypes.uint32, dtypes.uint32,
	dtypes.int16, dtypes.int16, dtypes.int16,
	dtypes.uint16, dtypes.uint16, dtypes.uint16,
	dtypes.int8, dtypes.int8, dtypes.int8,
	dtypes.uint8, dtypes.uint8, dtypes.uint8,
	dtypes.uint8c, dtypes.uint8c, dtypes.uint8c
];

var add = dispatchBy( fcns, types, null, 11, 2, 1 );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var z = new Float64Array( x.length );

add( x.length, dtypes.float64, x, 1, dtypes.float64, y, 1, dtypes.float64, z, 1, accessor ); // eslint-disable-line max-len
console.log( z );

x = new Int32Array( [ 10, 20, 30, 40, 50 ] );
y = new Int32Array( [ 10, 20, 30, 40, 50 ] );
z = new Int32Array( x.length );

add( x.length, dtypes.int32, x, 1, dtypes.int32, y, 1, dtypes.int32, z, 1, accessor ); // eslint-disable-line max-len
console.log( z );
