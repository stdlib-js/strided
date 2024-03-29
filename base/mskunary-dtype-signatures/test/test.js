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

/* eslint-disable array-element-newline */

'use strict';

// MODULES //

var tape = require( 'tape' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var isIntegerArray = require( '@stdlib/assert/is-integer-array' ).primitives;
var str2enum = require( './../../../base/dtype-str2enum' );
var signatures = require( './../lib' );


// VARIABLES //

// List of native C types which should be supported...
var DTYPES = [
	'int8',
	'uint8',
	'int16',
	'uint16',
	'int32',
	'uint32',
	'int64',
	'uint64',

	'float32',
	'float64',

	'complex64',
	'complex128'
];


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof signatures, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument containing an unrecognized data type', function test( t ) {
	var values;
	var i;

	values = [
		[ 'float64', 'foo' ],
		[ 1, 2, 3.14 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			signatures( value, DTYPES );
		};
	}
});

tape( 'the function throws an error if provided a first argument containing an unrecognized data type (options)', function test( t ) {
	var values;
	var i;

	values = [
		[ 'float64', 'foo' ],
		[ 1, 2, 3.14 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			signatures( value, DTYPES, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument containing an unrecognized data type', function test( t ) {
	var values;
	var i;

	values = [
		[ 'float64', 'foo' ],
		[ 1, 2, 3.14 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			signatures( DTYPES, value );
		};
	}
});

tape( 'the function throws an error if provided a second argument containing an unrecognized data type (options)', function test( t ) {
	var values;
	var i;

	values = [
		[ 'float64', 'foo' ],
		[ 1, 2, 3.14 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			signatures( DTYPES, value, {} );
		};
	}
});

tape( 'the function returns a list of signatures (default)', function test( t ) {
	var expected;
	var dtypes;
	var sigs;

	sigs = signatures( DTYPES, DTYPES );
	t.strictEqual( isStringArray( sigs ), true, 'returns an array of strings' );

	dtypes = [ 'float32', 'float64' ];
	expected = [
		'float32', 'uint8', 'float32',
		'float32', 'uint8', 'float64',
		'float64', 'uint8', 'float64'
	];
	sigs = signatures( dtypes, dtypes );
	t.deepEqual( sigs, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a list of signatures (strings)', function test( t ) {
	var expected;
	var dtypes;
	var sigs;
	var opts;

	opts = {
		'enums': false
	};
	sigs = signatures( DTYPES, DTYPES, opts );
	t.strictEqual( isStringArray( sigs ), true, 'returns an array of strings' );

	dtypes = [ 'float32', 'float64' ];
	expected = [
		'float32', 'uint8', 'float32',
		'float32', 'uint8', 'float64',
		'float64', 'uint8', 'float64'
	];
	sigs = signatures( dtypes, dtypes, opts );
	t.deepEqual( sigs, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a list of signatures (enumeration constants)', function test( t ) {
	var expected;
	var dtypes;
	var sigs;
	var opts;

	opts = {
		'enums': true
	};
	sigs = signatures( DTYPES, DTYPES, opts );
	t.strictEqual( isIntegerArray( sigs ), true, 'returns an array of integers' );

	dtypes = [ 'float32', 'float64' ];
	expected = [
		str2enum( 'float32' ), str2enum( 'uint8' ), str2enum( 'float32' ),
		str2enum( 'float32' ), str2enum( 'uint8' ), str2enum( 'float64' ),
		str2enum( 'float64' ), str2enum( 'uint8' ), str2enum( 'float64' )
	];
	sigs = signatures( dtypes, dtypes, opts );
	t.deepEqual( sigs, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a list of signatures (limited output dtypes)', function test( t ) {
	var expected;
	var idtypes;
	var odtypes;
	var sigs;

	idtypes = [ 'int8', 'float32' ];
	odtypes = [ 'float64' ];
	expected = [
		'int8', 'uint8', 'float64',
		'float32', 'uint8', 'float64'
	];
	sigs = signatures( idtypes, odtypes );
	t.deepEqual( sigs, expected, 'returns expected value' );

	t.end();
});
