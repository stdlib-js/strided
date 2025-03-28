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

var bench = require( '@stdlib/bench' );
var isFunction = require( '@stdlib/assert/is-function' );
var unaryBy = require( './../../base/unary-by' );
var abs = require( '@stdlib/math/base/special/abs' );
var identity = require( '@stdlib/number/float64/base/identity' );
var pkg = require( './../package.json' ).name;
var dispatchBy = require( './../lib' );


// MAIN //

bench( pkg+'::fcns_array', function benchmark( b ) {
	var types;
	var fcns;
	var data;
	var out;
	var i;

	fcns = [ unaryBy ];
	types = [ 'float64', 'float64' ];
	data = [ abs ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = dispatchBy( fcns, types, data, 8, 1, 1, identity );
		if ( typeof out !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( out ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::fcn_arg', function benchmark( b ) {
	var types;
	var data;
	var out;
	var i;

	types = [ 'float64', 'float64' ];
	data = [ abs ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = dispatchBy( unaryBy, types, data, 8, 1, 1, identity );
		if ( typeof out !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( out ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
