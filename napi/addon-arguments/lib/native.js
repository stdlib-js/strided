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

// MODULES //

var enumerate = require( './../../../dtypes' ).enumerate;
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Wrapper function exposing the C API to JavaScript.
*
* @private
* @param {integer} N - number of indexed elements
* @param {string} dtypeX - `x` data type
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {string} dtypeY - `y` data type
* @param {Float64Array} y - destination array
* @param {integer} strideY - `y` stride length
* @returns {Float64Array} `y`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( 10 );
* var y = new Float64Array( x.length );
*
* wrapper( x.length, 'float64', x, 1, 'float64', y, 1 );
*/
function wrapper( N, dtypeX, x, strideX, dtypeY, y, strideY ) {
	addon( N, enumerate( dtypeX ), x, strideX, enumerate( dtypeY ), y, strideY ); // eslint-disable-line max-len
	return y;
}


// EXPORTS //

module.exports = wrapper;
