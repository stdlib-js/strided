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
* Applies a unary function to each element retrieved from a strided input array according to a callback function and assigns results to a strided output array.
*
* @private
* @param {ArrayLikeObject<Collection>} arrays - array-like object containing one input array and one output array
* @param {NonNegativeIntegerArray} shape - array-like object containing a single element, the number of indexed elements
* @param {IntegerArray} strides - array-like object containing the stride lengths for the input and output arrays
* @param {Array<Function>} accessors - array-like object containing accessors for the input and output arrays
* @param {Function} fcn - unary function to apply to callback return values
* @param {Callback} clbk - callback
* @param {*} [thisArg] - callback execution context
* @returns {void}
*
* @example
* var abs = require( '@stdlib/math/base/special/abs' );
*
* function accessor( v ) {
*     return v;
* }
*
* function xget( buf, idx ) {
*     return buf[ idx ] * 2.0;
* }
*
* function yset( buf, idx, value ) {
*     buf[ idx ] = value;
* }
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* var shape = [ x.length ];
* var strides = [ 1, 1 ];
*
* unaryBy( [ x, y ], shape, strides, [ xget, yset ], abs, accessor );
*
* console.log( y );
* // => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
*/
function unaryBy( arrays, shape, strides, accessors, fcn, clbk, thisArg ) {
	var offsets;
	var N;

	N = shape[ 0 ];
	offsets = [
		stride2offset( N, strides[ 0 ] ),
		stride2offset( N, strides[ 1 ] )
	];
	return ndarray( arrays, shape, strides, offsets, accessors, fcn, clbk, thisArg );
}


// EXPORTS //

module.exports = unaryBy;
