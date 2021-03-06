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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

/*
* The following modules are intentionally not exported: common, napi
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace strided
*/
var strided = {};

/**
* @name base
* @memberof strided
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/strided/base}
*/
setReadOnly( strided, 'base', require( './../base' ) );

/**
* @name dispatch
* @memberof strided
* @readonly
* @type {Function}
* @see {@link module:@stdlib/strided/dispatch}
*/
setReadOnly( strided, 'dispatch', require( './../dispatch' ) );

/**
* @name dtypes
* @memberof strided
* @readonly
* @type {Function}
* @see {@link module:@stdlib/strided/dtypes}
*/
setReadOnly( strided, 'dtypes', require( './../dtypes' ) );


// EXPORTS //

module.exports = strided;
