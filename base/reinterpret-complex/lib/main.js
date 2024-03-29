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

var isComplex128Array = require( '@stdlib/array/base/assert/is-complex128array' );
var isComplex64Array = require( '@stdlib/array/base/assert/is-complex64array' );
var reinterpret128 = require( './../../../base/reinterpret-complex128' );
var reinterpret64 = require( './../../../base/reinterpret-complex64' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Reinterprets a complex-valued floating-point array as a real-valued floating-point array having the same precision.
*
* @param {(Complex128Array|Complex64Array)} x - input array
* @param {NonNegativeInteger} offset - starting index
* @throws {TypeError} first argument must be a supported complex-valued floating-point array
* @returns {(Float64Array|Float32Array)} real-valued floating-point array view
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( 10 );
*
* var out = reinterpret( x, 0 );
* // returns <Float64Array>
*
* var bool = ( out.buffer === x.buffer );
* // returns true
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( 10 );
*
* var out = reinterpret( x, 0 );
* // returns <Float32Array>
*
* var bool = ( out.buffer === x.buffer );
* // returns true
*/
function reinterpret( x, offset ) {
	if ( isComplex128Array( x ) ) {
		return reinterpret128( x, offset );
	}
	if ( isComplex64Array( x ) ) {
		return reinterpret64( x, offset );
	}
	// Note: intentionally throw here to catch the scenario in which we add, e.g., a Complex32Array and need to explicitly add support here...
	throw new TypeError( format( 'invalid argument. First argument must be a complex-valued floating-point array. Value: `%s`.', x ) );
}


// EXPORTS //

module.exports = reinterpret;
