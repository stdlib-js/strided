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

/**
* Dispatch to a native add-on applying a binary function to two input strided arrays.
*
* @module @stdlib/strided/base/binary-addon-dispatch
*
* @example
* var dispatch = require( '@stdlib/strided/base/binary-addon-dispatch' );
*
* function addon( N, dtypeX, x, strideX, dtypeY, y, strideY, dtypeZ, z, strideZ ) {
*     // Call into native add-on...
* }
*
* function fallback( N, dtypeX, x, strideX, dtypeY, y, strideY, dtypeZ, z, strideZ ) {
*     // Fallback JavaScript implementation...
* }
*
* // Create a dispatch function:
* var f = dispatch( addon, fallback );
*
* // ...
*
* // Invoke the dispatch function with strided array arguments:
* f( 2, 'generic', [ 1, 2 ], 1, 'generic', [ 3, 4 ], 1, 'generic', [ 0, 0 ], 1 );
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
