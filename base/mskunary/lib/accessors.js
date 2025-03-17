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

'use strict';

// MODULES //

var stride2offset = require( './../../../base/stride2offset' );
var ndarray = require( './accessors.ndarray.js' );


// MAIN //

/**
* Applies a unary callback to elements in a strided input array according to elements in a strided mask array and assigns results to elements in a strided output array.
*
* @private
* @param {ArrayLikeObject<Collection>} arrays - array-like object containing one input array, a mask array, and one output array
* @param {NonNegativeIntegerArray} shape - array-like object containing a single element, the number of indexed elements
* @param {IntegerArray} strides - array-like object containing the stride lengths for the strided arrays
* @param {Array<Function>} accessors - array-like object containing accessors for the strided arrays
* @param {Callback} fcn - unary callback
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* function xget( buf, idx ) {
*     return buf[ idx ] * 2.0;
* }
*
* function mget( buf, idx ) {
*     return buf[ idx ];
* }
*
* function set( buf, idx, value ) {
*     buf[ idx ] = value;
* }
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
* var y = new Float64Array( x.length );
*
* var shape = [ x.length ];
* var strides = [ 1, 1, 1 ];
*
* mskunary( [ x, m, y ], shape, strides, [ xget, mget, set ], scale );
*
* console.log( y );
* // => <Float64Array>[ 20.0, 40.0, 0.0, 80.0, 100.0 ]
*/
function mskunary( arrays, shape, strides, accessors, fcn ) {
	var offsets;
	var N;

	N = shape[ 0 ];
	offsets = [
		stride2offset( N, strides[ 0 ] ),
		stride2offset( N, strides[ 1 ] ),
		stride2offset( N, strides[ 2 ] )
	];
	return ndarray( arrays, shape, strides, offsets, accessors, fcn );
}


// EXPORTS //

module.exports = mskunary;
