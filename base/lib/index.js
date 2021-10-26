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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name binary
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/strided/base/binary}
*/
setReadOnly( ns, 'binary', require( './../../base/binary' ) );

/**
* @name binaryAddonDispatch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/strided/base/binary-addon-dispatch}
*/
setReadOnly( ns, 'binaryAddonDispatch', require( './../../base/binary-addon-dispatch' ) );

/**
* @name dmap
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/strided/base/dmap}
*/
setReadOnly( ns, 'dmap', require( './../../base/dmap' ) );

/**
* @name dmap2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/strided/base/dmap2}
*/
setReadOnly( ns, 'dmap2', require( './../../base/dmap2' ) );

/**
* @name dmskmap
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/strided/base/dmskmap}
*/
setReadOnly( ns, 'dmskmap', require( './../../base/dmskmap' ) );

/**
* @name dtypeEnum2Str
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/strided/base/dtype-enum2str}
*/
setReadOnly( ns, 'dtypeEnum2Str', require( './../../base/dtype-enum2str' ) );

/**
* @name dtypeResolveEnum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/strided/base/dtype-resolve-enum}
*/
setReadOnly( ns, 'dtypeResolveEnum', require( './../../base/dtype-resolve-enum' ) );

/**
* @name dtypeStr2Enum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/strided/base/dtype-str2enum}
*/
setReadOnly( ns, 'dtypeStr2Enum', require( './../../base/dtype-str2enum' ) );

/**
* @name mapBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/strided/base/map-by}
*/
setReadOnly( ns, 'mapBy', require( './../../base/map-by' ) );

/**
* @name metaDataProps
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/strided/base/meta-data-props}
*/
setReadOnly( ns, 'metaDataProps', require( './../../base/meta-data-props' ) );

/**
* @name mskunary
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/strided/base/mskunary}
*/
setReadOnly( ns, 'mskunary', require( './../../base/mskunary' ) );

/**
* @name nullary
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/strided/base/nullary}
*/
setReadOnly( ns, 'nullary', require( './../../base/nullary' ) );

/**
* @name quaternary
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/strided/base/quaternary}
*/
setReadOnly( ns, 'quaternary', require( './../../base/quaternary' ) );

/**
* @name quinary
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/strided/base/quinary}
*/
setReadOnly( ns, 'quinary', require( './../../base/quinary' ) );

/**
* @name smap
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/strided/base/smap}
*/
setReadOnly( ns, 'smap', require( './../../base/smap' ) );

/**
* @name smskmap
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/strided/base/smskmap}
*/
setReadOnly( ns, 'smskmap', require( './../../base/smskmap' ) );

/**
* @name ternary
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/strided/base/ternary}
*/
setReadOnly( ns, 'ternary', require( './../../base/ternary' ) );

/**
* @name unary
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/strided/base/unary}
*/
setReadOnly( ns, 'unary', require( './../../base/unary' ) );

/**
* @name unaryAddonDispatch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/strided/base/unary-addon-dispatch}
*/
setReadOnly( ns, 'unaryAddonDispatch', require( './../../base/unary-addon-dispatch' ) );


// EXPORTS //

module.exports = ns;
