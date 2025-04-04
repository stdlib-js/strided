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

/* eslint-disable array-element-newline */

'use strict';

// MODULES //

var tape = require( 'tape' );
var unaryBy = require( './../../base/unary-by' );
var abs = require( '@stdlib/math/base/special/abs' );
var identity = require( '@stdlib/number/float64/base/identity' );
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var dtype = require( '@stdlib/ndarray/base/buffer-dtype' );
var dispatchBy = require( './../lib' );


// FIXTURES //

var forEach = require( './fixtures/foreach.js' );
var map1N = require( './fixtures/map1n.js' );
var fill = require( './fixtures/fill.js' );
var sum = require( './fixtures/sum.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dispatchBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function which throws an error if not provided an integer for the first argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64' ];
	data = [ abs ];
	strided = dispatchBy( unaryBy, types, data, 8, 1, 1 );

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
			var y = new Float64Array( x.length );
			strided( value, 'float64', x, 1, 'float64', y, 1, identity );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided an integer for the first argument (thisArg)', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64' ];
	data = [ abs ];
	strided = dispatchBy( unaryBy, types, data, 8, 1, 1 );

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
			var y = new Float64Array( x.length );
			strided( value, 'float64', x, 1, 'float64', y, 1, identity, {} );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided an array-like object for the third argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64' ];
	data = [ abs ];
	strided = dispatchBy( unaryBy, types, data, 8, 1, 1 );

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
			var y = new Float64Array( x.length );
			strided( x.length, 'float64', value, 1, 'float64', y, 1, identity );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided an array-like object for the third argument (thisArg)', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64' ];
	data = [ abs ];
	strided = dispatchBy( unaryBy, types, data, 8, 1, 1 );

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
			var y = new Float64Array( x.length );
			strided( x.length, 'float64', value, 1, 'float64', y, 1, identity, {} );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided an integer for the fourth argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64' ];
	data = [ abs ];
	strided = dispatchBy( unaryBy, types, data, 8, 1, 1 );

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
			var y = new Float64Array( x.length );
			strided( x.length, 'float64', x, value, 'float64', y, 1, identity );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided an integer for the fourth argument (thisArg)', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64' ];
	data = [ abs ];
	strided = dispatchBy( unaryBy, types, data, 8, 1, 1 );

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
			var y = new Float64Array( x.length );
			strided( x.length, 'float64', x, value, 'float64', y, 1, identity, {} );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided an array-like object for the sixth argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64' ];
	data = [ abs ];
	strided = dispatchBy( unaryBy, types, data, 8, 1, 1 );

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
			var y = new Float64Array( x.length );
			strided( y.length, 'float64', x, 1, 'float64', value, 1, identity );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided an array-like object for the sixth argument (thisArg)', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64' ];
	data = [ abs ];
	strided = dispatchBy( unaryBy, types, data, 8, 1, 1 );

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
			var y = new Float64Array( x.length );
			strided( y.length, 'float64', x, 1, 'float64', value, 1, identity, {} );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided an integer for the seventh argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64' ];
	data = [ abs ];
	strided = dispatchBy( unaryBy, types, data, 8, 1, 1 );

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			strided( y.length, 'float64', x, 1, 'float64', y, value, identity );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided an integer for the seventh argument (thisArg)', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64' ];
	data = [ abs ];
	strided = dispatchBy( unaryBy, types, data, 8, 1, 1 );

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			strided( y.length, 'float64', x, 1, 'float64', y, value, identity, {} );
		};
	}
});

tape( 'the function returns a function which throws an error if provided insufficient arguments', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var y;
	var i;

	types = [ 'float64', 'float64' ];
	data = [ abs ];
	strided = dispatchBy( unaryBy, types, data, 8, 1, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( 10 );
	values = [
		[],
		[ x.length ],
		[ x.length, 'float64' ],
		[ x.length, 'float64', x ],
		[ x.length, 'float64', x, 1 ],
		[ x.length, 'float64', x, 1, 'float64' ],
		[ x.length, 'float64', x, 1, 'float64', y ],
		[ x.length, 'float64', x, 1, 'float64', y, 1 ]
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
	var y;
	var i;

	types = [ 'float64', 'float64' ];
	data = [ abs ];
	strided = dispatchBy( unaryBy, types, data, 8, 1, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( 10 );
	values = [
		[ x.length, 'float64', x, 1, 'float64', y, 1, identity, {}, {} ],
		[ x.length, 'float64', x, 1, 'float64', y, 1, identity, {}, {}, {} ],
		[ x.length, 'float64', x, 1, 'float64', y, 1, identity, {}, {}, {}, {} ],
		[ x.length, 'float64', x, 1, 'float64', y, 1, identity, {}, {}, {}, {}, {} ]
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
	var x;
	var i;

	types = [ 'float64', 'float64' ];
	data = [ abs ];
	strided = dispatchBy( unaryBy, types, data, 8, 1, 1 );

	x = new Float64Array( 10 );
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
			strided( x.length, 'float64', x, 1, 'float64', value, 1, identity );
		};
	}
});

tape( 'the function returns a function which throws an error if provided an array with an insufficient number of elements (output array; thisArg)', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var i;

	types = [ 'float64', 'float64' ];
	data = [ abs ];
	strided = dispatchBy( unaryBy, types, data, 8, 1, 1 );

	x = new Float64Array( 10 );
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
			strided( x.length, 'float64', x, 1, 'float64', value, 1, identity, {} );
		};
	}
});

tape( 'the function returns a function which throws an error if provided an array with an insufficient number of elements (input array)', function test( t ) {
	var strided;
	var values;
	var types;
	var ctx;
	var y;
	var i;

	types = [ 'float64', 'float64' ];
	ctx = {
		'sum': 0
	};
	strided = dispatchBy( sum( ctx ), types, null, 8, 1, 1 );

	y = new Float64Array( 10 );
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
			strided( y.length, 'float64', value, 1, 'float64', y, 1, identity );
		};
	}
});

tape( 'the function returns a function which throws an error if provided an array with an insufficient number of elements (input array; thisArg)', function test( t ) {
	var strided;
	var values;
	var types;
	var ctx;
	var y;
	var i;

	types = [ 'float64', 'float64' ];
	ctx = {
		'sum': 0
	};
	strided = dispatchBy( sum( ctx ), types, null, 8, 1, 1 );

	y = new Float64Array( 10 );
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
			strided( y.length, 'float64', value, 1, 'float64', y, 1, identity, {} );
		};
	}
});

tape( 'the function returns a function which throws an error if a provided stride is incompatible with the number of indexed elements and an array length (output array)', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var y;
	var i;

	types = [ 'float64', 'float64' ];
	data = [ abs ];
	strided = dispatchBy( unaryBy, types, data, 8, 1, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( x.length );
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
			strided( x.length, 'float64', x, 1, 'float64', y, value, identity );
		};
	}
});

tape( 'the function returns a function which throws an error if a provided stride is incompatible with the number of indexed elements and an array length (output array; thisArg)', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var y;
	var i;

	types = [ 'float64', 'float64' ];
	data = [ abs ];
	strided = dispatchBy( unaryBy, types, data, 8, 1, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( x.length );
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
			strided( x.length, 'float64', x, 1, 'float64', y, value, identity, {} );
		};
	}
});

tape( 'the function returns a function which throws an error if a provided stride is incompatible with the number of indexed elements and an array length (input array)', function test( t ) {
	var strided;
	var values;
	var types;
	var ctx;
	var x;
	var y;
	var i;

	types = [ 'float64', 'float64' ];
	ctx = {
		'sum': 0
	};
	strided = dispatchBy( sum( ctx ), types, null, 8, 1, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( 10 );
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
			strided( x.length, 'float64', x, value, 'float64', y, 1, identity );
		};
	}
});

tape( 'the function returns a function which throws an error if a provided stride is incompatible with the number of indexed elements and an array length (input array; thisArg)', function test( t ) {
	var strided;
	var values;
	var types;
	var ctx;
	var x;
	var y;
	var i;

	types = [ 'float64', 'float64' ];
	ctx = {
		'sum': 0
	};
	strided = dispatchBy( sum( ctx ), types, null, 8, 1, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( 10 );
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
			strided( x.length, 'float64', x, value, 'float64', y, 1, identity, {} );
		};
	}
});

tape( 'the function returns a function which throws an error if unable to resolve a strided array function supporting the provided array argument data types', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var i;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];
	data = [ abs, abs ];
	strided = dispatchBy( unaryBy, types, data, 8, 1, 1 );

	x = new Float64Array( 4 );
	values = [
		new Uint8Array( 4 ),
		new Int32Array( 4 ),
		[ 0, 0, 0, 0 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided an array having data type: ' + dtype( values[i] ) );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( x.length, 'float64', x, 1, 'generic', value, 1, identity );
		};
	}
});

tape( 'the function returns a function which throws an error if unable to resolve a strided array function supporting the provided array argument data types (thisArg)', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var i;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];
	data = [ abs, abs ];
	strided = dispatchBy( unaryBy, types, data, 8, 1, 1 );

	x = new Float64Array( 4 );
	values = [
		new Uint8Array( 4 ),
		new Int32Array( 4 ),
		[ 0, 0, 0, 0 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided an array having data type: ' + dtype( values[i] ) );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( x.length, 'float64', x, 1, 'generic', value, 1, identity, {} );
		};
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function; no data; only input arrays)', function test( t ) {
	var strided;
	var types;
	var ctx;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];

	ctx = {
		'sum': 0
	};
	strided = dispatchBy( sum( ctx ), types, null, 8, 2, 0 );

	ctx.sum = 0;
	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1, 'float64', y, 1, fcn );
	t.strictEqual( ctx.sum, 20.0, 'returns expected value' );

	ctx.sum = 5;
	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1, 'float32', y, 1, fcn );
	t.strictEqual( ctx.sum, 25.0, 'returns expected value' );

	t.end();

	function fcn( values ) {
		return values;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function; no data; only input arrays; thisArg)', function test( t ) {
	var strided;
	var thisArg;
	var types;
	var ctx;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];

	ctx = {
		'sum': 0
	};
	strided = dispatchBy( sum( ctx ), types, null, 8, 2, 0 );

	ctx.sum = 0;
	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	thisArg = {
		'count': 0
	};
	strided( x.length, 'float64', x, 1, 'float64', y, 1, fcn, thisArg );
	t.strictEqual( ctx.sum, 20.0, 'returns expected value' );
	t.strictEqual( thisArg.count, 4, 'returns expected value' );

	ctx.sum = 5;
	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	thisArg.count = 0;
	strided( x.length, 'float32', x, 1, 'float32', y, 1, fcn, thisArg );
	t.strictEqual( ctx.sum, 25.0, 'returns expected value' );
	t.strictEqual( thisArg.count, 4, 'returns expected value' );

	t.end();

	function fcn( values ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return values;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function; no data; only output arrays)', function test( t ) {
	var expected;
	var strided;
	var types;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];

	strided = dispatchBy( fill( 3.0 ), types, null, 8, 0, 2 );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( x.length );
	strided( x.length, 'float64', x, 1, 'float64', y, 1, fcn );

	expected = new Float64Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( x.length );
	strided( x.length, 'float32', x, 1, 'float32', y, 1, fcn );

	expected = new Float32Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();

	function fcn() {
		return true;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function; no data; only output arrays; thisArg)', function test( t ) {
	var expected;
	var strided;
	var thisArg;
	var types;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];

	strided = dispatchBy( fill( 3.0 ), types, null, 8, 0, 2 );

	thisArg = {
		'count': 0
	};
	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( x.length );
	strided( x.length, 'float64', x, 1, 'float64', y, 1, fcn, thisArg );

	expected = new Float64Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.strictEqual( thisArg.count, 4, 'returns expected value' );

	thisArg.count = 0;
	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( x.length );
	strided( x.length, 'float32', x, 1, 'float32', y, 1, fcn, thisArg );

	expected = new Float32Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.strictEqual( thisArg.count, 4, 'returns expected value' );

	t.end();

	function fcn() {
		this.count += 1; // eslint-disable-line no-invalid-this
		return true;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function array; no data; only input arrays)', function test( t ) {
	var strided;
	var types;
	var fcns;
	var ctx;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];

	ctx = {
		'sum': 0
	};
	fcns = [
		sum( ctx ),
		sum( ctx )
	];
	strided = dispatchBy( fcns, types, null, 8, 2, 0 );

	ctx.sum = 0;
	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1, 'float64', y, 1, fcn );
	t.strictEqual( ctx.sum, 20.0, 'returns expected value' );

	ctx.sum = 5;
	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1, 'float32', y, 1, fcn );
	t.strictEqual( ctx.sum, 25.0, 'returns expected value' );

	t.end();

	function fcn( values ) {
		return values;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function array; no data; only input arrays; thisArg)', function test( t ) {
	var strided;
	var thisArg;
	var types;
	var fcns;
	var ctx;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];

	ctx = {
		'sum': 0
	};
	fcns = [
		sum( ctx ),
		sum( ctx )
	];
	strided = dispatchBy( fcns, types, null, 8, 2, 0 );

	ctx.sum = 0;
	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	thisArg = {
		'count': 0
	};
	strided( x.length, 'float64', x, 1, 'float64', y, 1, fcn, thisArg );
	t.strictEqual( ctx.sum, 20.0, 'returns expected value' );
	t.strictEqual( thisArg.count, 4, 'returns expected value' );

	ctx.sum = 5;
	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	thisArg.count = 0;
	strided( x.length, 'float32', x, 1, 'float32', y, 1, fcn, thisArg );
	t.strictEqual( ctx.sum, 25.0, 'returns expected value' );
	t.strictEqual( thisArg.count, 4, 'returns expected value' );

	t.end();

	function fcn( values ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return values;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function array; no data; only output arrays)', function test( t ) {
	var expected;
	var strided;
	var types;
	var fcns;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];

	fcns = [
		fill( 3.0 ),
		fill( 4.0 )
	];
	strided = dispatchBy( fcns, types, null, 8, 0, 2 );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( x.length );
	strided( x.length, 'float64', x, 1, 'float64', y, 1, fcn );

	expected = new Float64Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( x.length );
	strided( x.length, 'float32', x, 1, 'float32', y, 1, fcn );

	expected = new Float32Array( [ 4.0, 4.0, 4.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();

	function fcn() {
		return true;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function array; no data; only output arrays; thisArg)', function test( t ) {
	var expected;
	var strided;
	var thisArg;
	var types;
	var fcns;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];

	fcns = [
		fill( 3.0 ),
		fill( 4.0 )
	];
	strided = dispatchBy( fcns, types, null, 8, 0, 2 );

	thisArg = {
		'count': 0
	};
	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( x.length );
	strided( x.length, 'float64', x, 1, 'float64', y, 1, fcn, thisArg );
	t.strictEqual( thisArg.count, 4, 'returns expected value' );

	expected = new Float64Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	thisArg.count = 0;
	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( x.length );
	strided( x.length, 'float32', x, 1, 'float32', y, 1, fcn, thisArg );

	expected = new Float32Array( [ 4.0, 4.0, 4.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.strictEqual( thisArg.count, 4, 'returns expected value' );

	t.end();

	function fcn() {
		this.count += 1; // eslint-disable-line no-invalid-this
		return true;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function; data; only input arrays)', function test( t ) {
	var expected;
	var strided;
	var types;
	var data;
	var cnt;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];
	data = [
		clbk,
		clbk
	];

	strided = dispatchBy( forEach, types, data, 8, 2, 0 );
	cnt = 0;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1, 'float64', y, 1, fcn );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.strictEqual( cnt, 4, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1, 'float32', y, 1, fcn );

	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.strictEqual( cnt, 8, 'returns expected value' );

	t.end();

	function clbk() {
		cnt += 1;
	}

	function fcn( values ) {
		return values;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function; data; only input arrays; thisArg)', function test( t ) {
	var expected;
	var strided;
	var thisArg;
	var types;
	var data;
	var cnt;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];
	data = [
		clbk,
		clbk
	];

	strided = dispatchBy( forEach, types, data, 8, 2, 0 );
	cnt = 0;

	thisArg = {
		'count': 0
	};
	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1, 'float64', y, 1, fcn, thisArg );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.strictEqual( cnt, 4, 'returns expected value' );
	t.strictEqual( thisArg.count, 4, 'returns expected value' );

	thisArg.count = 0;
	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1, 'float32', y, 1, fcn, thisArg );

	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.strictEqual( cnt, 8, 'returns expected value' );
	t.strictEqual( thisArg.count, 4, 'returns expected value' );

	t.end();

	function clbk() {
		cnt += 1;
	}

	function fcn( values ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return values;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function; data; only output arrays)', function test( t ) {
	var expected;
	var strided;
	var types;
	var data;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];
	data = [
		three,
		four
	];

	strided = dispatchBy( map1N, types, data, 8, 0, 2 );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1, 'float64', y, 1, fcn );

	expected = new Float64Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1, 'float32', y, 1, fcn );

	expected = new Float32Array( [ 4.0, 4.0, 4.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();

	function three() {
		return 3.0;
	}

	function four() {
		return 4.0;
	}

	function fcn() {
		return true;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function; data; only output arrays; thisArg)', function test( t ) {
	var expected;
	var strided;
	var thisArg;
	var types;
	var data;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];
	data = [
		three,
		four
	];

	strided = dispatchBy( map1N, types, data, 8, 0, 2 );

	thisArg = {
		'count': 0
	};
	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1, 'float64', y, 1, fcn, thisArg );

	expected = new Float64Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.strictEqual( thisArg.count, 4, 'returns expected value' );

	thisArg.count = 0;
	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1, 'float32', y, 1, fcn, thisArg );

	expected = new Float32Array( [ 4.0, 4.0, 4.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.strictEqual( thisArg.count, 4, 'returns expected value' );

	t.end();

	function three() {
		return 3.0;
	}

	function four() {
		return 4.0;
	}

	function fcn() {
		this.count += 1; // eslint-disable-line no-invalid-this
		return true;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function; data; input and output arrays)', function test( t ) {
	var expected;
	var strided;
	var types;
	var data;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];
	data = [
		abs,
		abs
	];

	strided = dispatchBy( unaryBy, types, data, 8, 1, 1 );

	x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	y = new Float64Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	strided( x.length, 'float64', x, 1, 'float64', y, 1, identity );

	expected = new Float64Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	y = new Float32Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	strided( x.length, 'float32', x, 1, 'float32', y, 1, identity );

	expected = new Float32Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );

	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function; data; input and output arrays; thisArg)', function test( t ) {
	var expected;
	var strided;
	var types;
	var data;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];
	data = [
		abs,
		abs
	];

	strided = dispatchBy( unaryBy, types, data, 8, 1, 1 );

	x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	y = new Float64Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	strided( x.length, 'float64', x, 1, 'float64', y, 1, identity, {} );

	expected = new Float64Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	y = new Float32Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	strided( x.length, 'float32', x, 1, 'float32', y, 1, identity, {} );

	expected = new Float32Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );

	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function array; data; only input arrays)', function test( t ) {
	var expected;
	var strided;
	var types;
	var data;
	var fcns;
	var cnt;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];
	data = [
		clbk,
		clbk
	];
	fcns = [
		forEach,
		forEach
	];
	strided = dispatchBy( fcns, types, data, 8, 2, 0 );
	cnt = 0;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1, 'float64', y, 1, fcn );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.strictEqual( cnt, 4, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1, 'float32', y, 1, fcn );

	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.strictEqual( cnt, 8, 'returns expected value' );

	t.end();

	function clbk() {
		cnt += 1;
	}

	function fcn( values ) {
		return values;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function array; data; only input arrays; thisArg)', function test( t ) {
	var expected;
	var strided;
	var thisArg;
	var types;
	var data;
	var fcns;
	var cnt;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];
	data = [
		clbk,
		clbk
	];
	fcns = [
		forEach,
		forEach
	];
	strided = dispatchBy( fcns, types, data, 8, 2, 0 );
	cnt = 0;

	thisArg = {
		'count': 0
	};
	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1, 'float64', y, 1, fcn, thisArg );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.strictEqual( cnt, 4, 'returns expected value' );
	t.strictEqual( thisArg.count, 4, 'returns expected value' );

	thisArg.count = 0;
	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1, 'float32', y, 1, fcn, thisArg );

	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.strictEqual( cnt, 8, 'returns expected value' );
	t.strictEqual( thisArg.count, 4, 'returns expected value' );

	t.end();

	function clbk() {
		cnt += 1;
	}

	function fcn( values ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return values;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function array; data; only output arrays)', function test( t ) {
	var expected;
	var strided;
	var types;
	var data;
	var fcns;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];
	data = [
		three,
		four
	];
	fcns = [
		map1N,
		map1N
	];
	strided = dispatchBy( fcns, types, data, 8, 0, 2 );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1, 'float64', y, 1, fcn );

	expected = new Float64Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1, 'float32', y, 1, fcn );

	expected = new Float32Array( [ 4.0, 4.0, 4.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();

	function three() {
		return 3.0;
	}

	function four() {
		return 4.0;
	}

	function fcn() {
		return true;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function array; data; only output arrays; thisArg)', function test( t ) {
	var expected;
	var strided;
	var thisArg;
	var types;
	var data;
	var fcns;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];
	data = [
		three,
		four
	];
	fcns = [
		map1N,
		map1N
	];
	strided = dispatchBy( fcns, types, data, 8, 0, 2 );

	thisArg = {
		'count': 0
	};
	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1, 'float64', y, 1, fcn, thisArg );

	expected = new Float64Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.strictEqual( thisArg.count, 4, 'returns expected value' );

	thisArg.count = 0;
	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1, 'float32', y, 1, fcn, thisArg );

	expected = new Float32Array( [ 4.0, 4.0, 4.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.strictEqual( thisArg.count, 4, 'returns expected value' );

	t.end();

	function three() {
		return 3.0;
	}

	function four() {
		return 4.0;
	}

	function fcn() {
		this.count += 1; // eslint-disable-line no-invalid-this
		return true;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function array; data; input and output arrays)', function test( t ) {
	var expected;
	var strided;
	var types;
	var data;
	var fcns;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];
	data = [
		abs,
		abs
	];
	fcns = [
		unaryBy,
		unaryBy
	];
	strided = dispatchBy( fcns, types, data, 8, 1, 1 );

	x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	y = new Float64Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	strided( x.length, 'float64', x, 1, 'float64', y, 1, identity );

	expected = new Float64Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	y = new Float32Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	strided( x.length, 'float32', x, 1, 'float32', y, 1, identity );

	expected = new Float32Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );

	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function array; data; input and output arrays; thisArg)', function test( t ) {
	var expected;
	var strided;
	var types;
	var data;
	var fcns;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];
	data = [
		abs,
		abs
	];
	fcns = [
		unaryBy,
		unaryBy
	];
	strided = dispatchBy( fcns, types, data, 8, 1, 1 );

	x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	y = new Float64Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	strided( x.length, 'float64', x, 1, 'float64', y, 1, identity, {} );

	expected = new Float64Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	y = new Float32Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	strided( x.length, 'float32', x, 1, 'float32', y, 1, identity, {} );

	expected = new Float32Array( [ -1.0, -2.0, -3.0, -4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );

	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which returns one or more output arrays, if one or more output arrays is specified, and otherwise returns `undefined`', function test( t ) {
	var strided;
	var types;
	var data;
	var out;
	var ctx;
	var x;
	var y;

	types = [
		'float64', 'float64',
		'float32', 'float32'
	];

	// No output arrays...
	ctx = {
		'sum': 0
	};
	strided = dispatchBy( sum( ctx ), types, null, 8, 2, 0 );

	x = new Float64Array( 10 );
	y = new Float64Array( x.length );
	out = strided( x.length, 'float64', x, 1, 'float64', y, 1, identity );
	t.strictEqual( out, void 0, 'returns expected value' );

	// One output array...
	data = [
		abs,
		abs
	];
	strided = dispatchBy( unaryBy, types, data, 8, 1, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( x.length );
	out = strided( x.length, 'float64', x, 1, 'float64', y, 1, identity );
	t.strictEqual( out, y, 'returns expected value' );

	strided = dispatchBy( fill( 3.0 ), types, null, 8, 1, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( x.length );
	out = strided( x.length, 'float64', x, 1, 'float64', y, 1, identity );
	t.strictEqual( out, y, 'returns expected value' );

	// Two output arrays...
	strided = dispatchBy( fill( 3.0 ), types, null, 8, 0, 2 );

	x = new Float64Array( 10 );
	y = new Float64Array( x.length );
	out = strided( x.length, 'float64', x, 1, 'float64', y, 1, identity );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( out[ 0 ], x, 'returns expected value' );
	t.strictEqual( out[ 1 ], y, 'returns expected value' );

	t.end();
});
