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

var stride2offset = require( './../../../base/stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Copies elements from an input strided DataView to elements in an output strided array.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {DataView} view - output DataView
* @param {integer} strideView - `view` stride length (in bytes)
* @param {Collection} out - input array
* @param {integer} strideOut - `out` stride length
* @param {boolean} littleEndian - boolean indicating whether the data is stored in little-endian format
* @returns {Collection} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var DataView = require( '@stdlib/array/dataview' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var view = new DataView( x.buffer );
*
* var y = new Float64Array( x.length );
* var out = readDataView( x.length, view, 8, y, 1, true );
* // e.g., returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
*
* var bool = ( out === y );
* // returns true
*/
function readDataView( N, view, strideView, out, strideOut, littleEndian ) {
	return ndarray( N, view, strideView, stride2offset( N, strideView ), out, strideOut, stride2offset( N, strideOut ), littleEndian ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = readDataView;
