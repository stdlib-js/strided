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

var unary = require( './../../base/unary' ).ndarray;
var abs = require( '@stdlib/math/base/special/abs' );
var Float64Array = require( '@stdlib/array/float64' );
var dispatch = require( './../lib' );

var types = [ 'float64', 'float64' ];

var data = [
	abs
];

var strided = dispatch( unary, types, data, 9, 1, 1 );

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

strided( 3, 'float64', x, 1, 2, 'float64', y, 1, 2 );
console.log( y );
// => <Float64Array>[ 0.0, 0.0, 3.0, 4.0, 5.0 ]
