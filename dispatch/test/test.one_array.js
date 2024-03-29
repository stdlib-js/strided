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

// MODULES //

var tape = require( 'tape' );
var nullary = require( './../../base/nullary' );
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var dtype = require( '@stdlib/ndarray/base/buffer-dtype' );
var dispatch = require( './../lib' );


// FIXTURES //

var nullaryClbk = require( './fixtures/nullary.js' );
var forEach = require( './fixtures/foreach.js' );
var fill = require( './fixtures/fill.js' );
var sum = require( './fixtures/sum.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dispatch, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function which throws an error if not provided an integer for the first argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64' ];
	data = [ nullaryClbk ];
	strided = dispatch( nullary, types, data, 4, 0, 1 );

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			strided( value, 'float64', x, 1 );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided an array-like object for the third argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64' ];
	data = [ nullaryClbk ];
	strided = dispatch( nullary, types, data, 4, 0, 1 );

	values = [
		'5',
		5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			strided( x.length, 'float64', value, 1 );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided an integer for the fourth argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64' ];
	data = [ nullaryClbk ];
	strided = dispatch( nullary, types, data, 4, 0, 1 );

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			strided( x.length, 'float64', x, value );
		};
	}
});

tape( 'the function returns a function which throws an error if provided insufficient arguments', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var i;

	types = [ 'float64' ];
	data = [ nullaryClbk ];
	strided = dispatch( nullary, types, data, 4, 0, 1 );

	x = new Float64Array( 10 );
	values = [
		[],
		[ x.length ],
		[ x.length, 'float64' ],
		[ x.length, 'float64', x ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( wrapper( values[i] ), Error, 'throws an error when provided ' + values[ i ].length + ' arguments' );
	}
	t.end();

	function wrapper( args ) {
		return function fcn() {
			strided.apply( null, args );
		};
	}
});

tape( 'the function returns a function which throws an error if provided too many arguments', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var i;

	types = [ 'float64' ];
	data = [ nullaryClbk ];
	strided = dispatch( nullary, types, data, 4, 0, 1 );

	x = new Float64Array( 10 );
	values = [
		[ x.length, 'float64', x, 1, 'float64', x ],
		[ x.length, 'float64', x, 1, 'float64', x, 1 ],
		[ x.length, 'float64', x, 1, 'float64', x, 1, 'float64', x ],
		[ x.length, 'float64', x, 1, 'float64', x, 1, 'float64', x, 1 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( wrapper( values[i] ), Error, 'throws an error when provided ' + values[ i ].length + ' arguments' );
	}
	t.end();

	function wrapper( args ) {
		return function fcn() {
			strided.apply( null, args );
		};
	}
});

tape( 'the function returns a function which throws an error if provided an array with an insufficient number of elements (output array)', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64' ];
	data = [ nullaryClbk ];
	strided = dispatch( nullary, types, data, 4, 0, 1 );

	values = [
		new Float64Array( 1 ),
		new Float64Array( 2 ),
		new Float64Array( 3 ),
		new Float64Array( 4 ),
		new Float64Array( 5 ),
		new Float64Array( 6 ),
		new Float64Array( 7 ),
		new Float64Array( 8 ),
		new Float64Array( 9 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided an array of length ' + values[ i ].length );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( value.length+1, 'float64', value, 1 );
		};
	}
});

tape( 'the function returns a function which throws an error if provided an array with an insufficient number of elements (input array)', function test( t ) {
	var strided;
	var values;
	var types;
	var ctx;
	var i;

	types = [ 'float64' ];
	ctx = {
		'sum': 0
	};
	strided = dispatch( sum( ctx ), types, null, 4, 1, 0 );

	values = [
		new Float64Array( 1 ),
		new Float64Array( 2 ),
		new Float64Array( 3 ),
		new Float64Array( 4 ),
		new Float64Array( 5 ),
		new Float64Array( 6 ),
		new Float64Array( 7 ),
		new Float64Array( 8 ),
		new Float64Array( 9 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided an array of length ' + values[ i ].length );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( value.length+1, 'float64', value, 1 );
		};
	}
});

tape( 'the function returns a function which throws an error if a provided stride is incompatible with the number of indexed elements and an array length (output array)', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var i;

	types = [ 'float64' ];
	data = [ nullaryClbk ];
	strided = dispatch( nullary, types, data, 4, 0, 1 );

	x = new Float64Array( 10 );
	values = [
		-7,
		-6,
		-5,
		-4,
		-3,
		-2,
		2,
		3,
		4,
		5,
		6,
		7
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided a stride length of ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( x.length, 'float64', x, value );
		};
	}
});

tape( 'the function returns a function which throws an error if a provided stride is incompatible with the number of indexed elements and an array length (input array)', function test( t ) {
	var strided;
	var values;
	var types;
	var ctx;
	var x;
	var i;

	types = [ 'float64' ];
	ctx = {
		'sum': 0
	};
	strided = dispatch( sum( ctx ), types, null, 4, 1, 0 );

	x = new Float64Array( 10 );
	values = [
		-7,
		-6,
		-5,
		-4,
		-3,
		-2,
		2,
		3,
		4,
		5,
		6,
		7
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided a stride length of ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( x.length, 'float64', x, value );
		};
	}
});

tape( 'the function returns a function which throws an error if unable to resolve a strided array function supporting the provided array argument data types', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float32' ];
	data = [ nullaryClbk, nullaryClbk ];
	strided = dispatch( nullary, types, data, 4, 0, 1 );

	values = [
		new Uint8Array( 4 ),
		new Int32Array( 4 ),
		[ 1, 2, 3, 4 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided an array having data type: ' + dtype( values[i] ) );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( value.length, 'generic', value, 1 );
		};
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function; no data; only input arrays)', function test( t ) {
	var strided;
	var types;
	var ctx;
	var x;

	types = [
		'float64',
		'float32'
	];

	ctx = {
		'sum': 0
	};
	strided = dispatch( sum( ctx ), types, null, 4, 1, 0 );

	ctx.sum = 0;
	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1 );
	t.strictEqual( ctx.sum, 10.0, 'returns expected value' );

	ctx.sum = 5;
	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1 );
	t.strictEqual( ctx.sum, 15.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function; no data; only output arrays)', function test( t ) {
	var expected;
	var strided;
	var types;
	var x;

	types = [
		'float64',
		'float32'
	];

	strided = dispatch( fill( 3.0 ), types, null, 4, 0, 1 );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1 );

	expected = new Float64Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1 );

	expected = new Float32Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function array; no data; only input arrays)', function test( t ) {
	var strided;
	var types;
	var fcns;
	var ctx;
	var x;

	types = [
		'float64',
		'float32'
	];

	ctx = {
		'sum': 0
	};
	fcns = [
		sum( ctx ),
		sum( ctx )
	];
	strided = dispatch( fcns, types, null, 4, 1, 0 );

	ctx.sum = 0;
	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1 );
	t.strictEqual( ctx.sum, 10.0, 'returns expected value' );

	ctx.sum = 5;
	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1 );
	t.strictEqual( ctx.sum, 15.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function array; no data; only output arrays)', function test( t ) {
	var expected;
	var strided;
	var types;
	var fcns;
	var x;

	types = [
		'float64',
		'float32'
	];

	fcns = [
		fill( 3.0 ),
		fill( 4.0 )
	];
	strided = dispatch( fcns, types, null, 4, 0, 1 );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1 );

	expected = new Float64Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1 );

	expected = new Float32Array( [ 4.0, 4.0, 4.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function; data; only input arrays)', function test( t ) {
	var expected;
	var strided;
	var types;
	var data;
	var cnt;
	var x;

	types = [
		'float64',
		'float32'
	];
	data = [
		clbk,
		clbk
	];

	strided = dispatch( forEach, types, data, 4, 1, 0 );
	cnt = 0;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1 );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.strictEqual( cnt, 4, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1 );

	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.strictEqual( cnt, 8, 'returns expected value' );

	t.end();

	function clbk() {
		cnt += 1;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function; data; only output arrays)', function test( t ) {
	var expected;
	var strided;
	var types;
	var data;
	var x;

	types = [
		'float64',
		'float32'
	];
	data = [
		nullaryClbk,
		four
	];

	strided = dispatch( nullary, types, data, 4, 0, 1 );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1 );

	expected = new Float64Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1 );

	expected = new Float32Array( [ 4.0, 4.0, 4.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();

	function four() {
		return 4.0;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function array; data; only input arrays)', function test( t ) {
	var expected;
	var strided;
	var types;
	var data;
	var fcns;
	var cnt;
	var x;

	types = [
		'float64',
		'float32'
	];
	data = [
		clbk,
		clbk
	];
	fcns = [
		forEach,
		forEach
	];
	strided = dispatch( fcns, types, data, 4, 1, 0 );
	cnt = 0;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1 );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.strictEqual( cnt, 4, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1 );

	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.strictEqual( cnt, 8, 'returns expected value' );

	t.end();

	function clbk() {
		cnt += 1;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function array; data; only output arrays)', function test( t ) {
	var expected;
	var strided;
	var types;
	var data;
	var fcns;
	var x;

	types = [
		'float64',
		'float32'
	];
	data = [
		nullaryClbk,
		four
	];
	fcns = [
		nullary,
		nullary
	];
	strided = dispatch( fcns, types, data, 4, 0, 1 );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1 );

	expected = new Float64Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1 );

	expected = new Float32Array( [ 4.0, 4.0, 4.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();

	function four() {
		return 4.0;
	}
});

tape( 'the function returns a function which returns one or more output arrays, if one or more output arrays is specified, and otherwise returns `undefined`', function test( t ) {
	var strided;
	var types;
	var data;
	var out;
	var ctx;
	var x;

	types = [
		'float64',
		'float32'
	];

	// No output arrays...
	ctx = {
		'sum': 0
	};
	strided = dispatch( sum( ctx ), types, null, 4, 1, 0 );

	x = new Float64Array( 10 );
	out = strided( x.length, 'float64', x, 1 );
	t.strictEqual( out, void 0, 'returns expected value' );

	// One or more output arrays...
	data = [
		nullaryClbk,
		nullaryClbk
	];
	strided = dispatch( nullary, types, data, 4, 0, 1 );

	x = new Float64Array( 10 );
	out = strided( x.length, 'float64', x, 1 );
	t.strictEqual( out, x, 'returns expected value' );

	strided = dispatch( fill( 3.0 ), types, null, 4, 0, 1 );

	x = new Float64Array( 10 );
	out = strided( x.length, 'float64', x, 1 );
	t.strictEqual( out, x, 'returns expected value' );

	t.end();
});
