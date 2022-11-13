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

// MODULES //

var resolve = require( './../../../base/dtype-resolve-str' );
var Complex64 = require( '@stdlib/complex/float32' );
var Complex128 = require( '@stdlib/complex/float64' );
var wrap = require( '@stdlib/complex/base/wrap-function' );


// VARIABLES //

var C64 = 'complex64';
var C128 = 'complex128';
var CTORS = {
	'complex64': Complex64,
	'complex128': Complex128
};


// FUNCTIONS //

/**
* Resolves a callback based on provided dtypes.
*
* @private
* @param {Object} table - callback table
* @param {Function} table.default - default callback
* @param {Function} table.complex64 - callback for single-precision complex floating-point numbers
* @param {Function} table.complex128 - callback for double-precision complex floating-point numbers
* @param {string} t1 - dtype for first argument
* @param {string} t2 - dtype for second argument
* @param {string} t3 - dtype for return value
* @returns {Function} callback
*/
function resolveCallback( table, t1, t2, t3 ) {
	if ( t3 === C64 || t3 === C128 ) {
		if ( t1 === t2 && t2 === t3 ) {
			return table[ t3 ];
		}
		return wrap( table[ t3 ], 2, CTORS[ t3 ] );
	}
	if ( t3 === 'generic' ) {
		if ( t1 === C128 || t2 === C128 ) {
			if ( t1 === t2 ) {
				return table[ t1 ];
			}
			return wrap( table[ C128 ], 2, CTORS[ C128 ] );
		}
		if ( t1 === C64 || t2 === C64 ) {
			if ( t1 === t2 ) {
				return table[ t1 ];
			}
			return wrap( table[ C64 ], 2, CTORS[ C64 ] );
		}
		// Fall-through...
	}
	return table.default;
}


// MAIN //

/**
* Assigns callbacks to binary interfaces according to type promotion rules.
*
* ## Notes
*
* -   The function assumes that the provided signature array has the following properties:
*
*     -   a strided array having a stride length of `3` (i.e., every `3` elements define a binary interface signature).
*     -   for each signature (i.e., set of three consecutive non-overlapping strided array elements), the first two elements are the input data types and the third element is the return data type.
*     -   all signatures follow type promotion rules.
*
* -   Based on type promotion rules, we can simply use the callback for `float64` (i.e., the assumed "default") for all interfaces not involving complex numbers, even for `float32`, as we shouldn't need to explicitly downcast strided array values. The only time we need to return `float32` values is when input arrays are already `float32` or of a type which can be safely represented in `float32` without concern for truncation.
*
* @param {Object} table - callback table
* @param {Function} table.default - default callback
* @param {Function} table.complex64 - callback for single-precision complex floating-point numbers
* @param {Function} table.complex128 - callback for double-precision complex floating-point numbers
* @param {ArrayLikeObject} signatures - strided array containing binary interface signatures
* @returns {Array<Function>} list of callbacks
*
* @example
* var signatures = require( '@stdlib/strided/base/binary-dtype-signatures' );
* var add = require( '@stdlib/math/base/ops/add' );
* var cadd = require( '@stdlib/math/base/ops/cadd' );
* var caddf = require( '@stdlib/math/base/ops/caddf' );
*
* var dtypes = [
*     'float64',
*     'float32',
*     'int32',
*     'uint8'
* ];
*
* var sigs = signatures( dtypes, dtypes, dtypes );
* // returns [...]
*
* var table = {
*     'default': add,
*     'complex64': caddf,
*     'complex128': cadd
* };
*
* var list = callbacks( table, sigs );
* // returns [...]
*/
function callbacks( table, signatures ) {
	var out;
	var t1;
	var t2;
	var t3;
	var i;

	out = [];
	for ( i = 0; i < signatures.length; i += 3 ) {
		t1 = resolve( signatures[ i ] );
		t2 = resolve( signatures[ i+1 ] );
		t3 = resolve( signatures[ i+2 ] );
		out.push( resolveCallback( table, t1, t2, t3 ) );
	}
	return out;
}


// EXPORTS //

module.exports = callbacks;
