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
var isArray = require( '@stdlib/assert/is-array' );
var dtypes = require( './../../../dtypes' );
var pkg = require( './../package.json' ).name;
var signatures = require( './../lib' );


// MAIN //

bench( pkg+'::strings', function benchmark( b ) {
	var opts;
	var out;
	var v1;
	var v2;
	var i;

	v1 = dtypes();
	v2 = dtypes();
	opts = {
		'enums': false
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = signatures( v1, v2, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::enums', function benchmark( b ) {
	var opts;
	var out;
	var v1;
	var v2;
	var i;

	v1 = dtypes();
	v2 = dtypes();
	opts = {
		'enums': true
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = signatures( v1, v2, opts );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
