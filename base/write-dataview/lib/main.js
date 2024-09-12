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
* Copies elements from an input strided array to elements in a strided DataView.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Collection} x - input array
* @param {integer} strideX - `x` stride length
* @param {DataView} view - output DataView
* @param {integer} strideView - `view` stride length (in bytes)
* @param {boolean} littleEndian - boolean indicating whether to store the data in little-endian format
* @returns {DataView} output DataView
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var DataView = require( '@stdlib/array/dataview' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
*
* var buf = new ArrayBuffer( 32 );
* var view = new DataView( buf );
*
* var out = writeDataView( 4, x, 1, view, 8, true );
* // returns <DataView>
*
* var bool = ( out === view );
* // returns true
*
* var v = view.getFloat64( 0, true );
* // returns 1.0
*/
function writeDataView( N, x, strideX, view, strideView, littleEndian ) {
	return ndarray( N, x, strideX, stride2offset( N, strideX ), view, strideView, stride2offset( N, strideView ), littleEndian ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = writeDataView;
