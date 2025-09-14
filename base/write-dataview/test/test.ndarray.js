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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var typedarray = require( '@stdlib/array/typed' );
var zeros = require( '@stdlib/array/zeros' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var DataView = require( '@stdlib/array/dataview' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var reinterpretComplex = require( './../../../base/reinterpret-complex' );
var reinterpretBoolean = require( './../../../base/reinterpret-boolean' );
var writeDataView = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof writeDataView, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( writeDataView.length, 8, 'returns expected value' );
	t.end();
});

tape( 'the function copies each strided array element (float64, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ], dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( x, dt );
	out = writeDataView( x.length, x, 1, 0, view, 1*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function copies each strided array element (float64, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ], dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( x, dt );
	out = writeDataView( x.length, x, 1, 0, view, 1*nbytes, 0, false );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function copies each strided array element (generic, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( x, dt );
	out = writeDataView( x.length, x, 1, 0, view, 1*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function copies each strided array element (generic, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( x, dt );
	out = writeDataView( x.length, x, 1, 0, view, 1*nbytes, 0, false );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function copies each strided array element (accessors, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ], dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( x, dt );
	out = writeDataView( x.length, toAccessorArray( x ), 1, 0, view, 1*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function copies each strided array element (accessors, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ], dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( x, dt );
	out = writeDataView( x.length, toAccessorArray( x ), 1, 0, view, 1*nbytes, 0, false );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function copies each strided array element (complex128, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex128';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ], dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( reinterpretComplex( x, 0 ), 'float64' );
	out = writeDataView( x.length, x, 1, 0, view, 1*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes/2, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function copies each strided array element (complex128, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex128';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ], dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( reinterpretComplex( x, 0 ), 'float64' );
	out = writeDataView( x.length, x, 1, 0, view, 1*nbytes, 0, false );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes/2, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function copies each strided array element (complex64, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex64';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ], dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( reinterpretComplex( x, 0 ), 'float32' );
	out = writeDataView( x.length, x, 1, 0, view, 1*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat32( i*nbytes/2, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function copies each strided array element (complex64, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex64';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ], dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( reinterpretComplex( x, 0 ), 'float32' );
	out = writeDataView( x.length, x, 1, 0, view, 1*nbytes, 0, false );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat32( i*nbytes/2, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function copies each strided array element (boolean, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'bool';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1, 0, 1, 0 ], dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( reinterpretBoolean( x, 0 ), 'uint8' );
	out = writeDataView( x.length, x, 1, 0, view, 1*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getUint8( i*nbytes, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function copies each strided array element (boolean, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'bool';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1, 0, 1, 0 ], dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( reinterpretBoolean( x, 0 ), 'uint8' );
	out = writeDataView( x.length, x, 1, 0, view, 1*nbytes, 0, false );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getUint8( i*nbytes, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports an `x` stride (float64, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 1.0, 3.0, 5.0, 0.0, 0.0 ], dt );
	out = writeDataView( 3, x, 2, 0, view, 1*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports an `x` stride (float64, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 1.0, 3.0, 5.0, 0.0, 0.0 ], dt );
	out = writeDataView( 3, x, 2, 0, view, 1*nbytes, 0, false );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports an `x` stride (complex128, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex128';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 0
		1.0, // 0
		2.0,
		2.0,
		3.0, // 1
		3.0, // 1
		4.0,
		4.0,
		5.0, // 2
		5.0  // 2
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0, 0.0, 0.0, 0.0, 0.0 ], 'float64' );
	out = writeDataView( 3, x, 2, 0, view, 1*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes/2, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports an `x` stride (complex128, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex128';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 0
		1.0, // 0
		2.0,
		2.0,
		3.0, // 1
		3.0, // 1
		4.0,
		4.0,
		5.0, // 2
		5.0  // 2
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0, 0.0, 0.0, 0.0, 0.0 ], 'float64' );
	out = writeDataView( 3, x, 2, 0, view, 1*nbytes, 0, false );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes/2, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports an `x` stride (complex64, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex64';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 0
		1.0, // 0
		2.0,
		2.0,
		3.0, // 1
		3.0, // 1
		4.0,
		4.0,
		5.0, // 2
		5.0  // 2
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0, 0.0, 0.0, 0.0, 0.0 ], 'float32' );
	out = writeDataView( 3, x, 2, 0, view, 1*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat32( i*nbytes/2, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports an `x` stride (complex64, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex64';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 0
		1.0, // 0
		2.0,
		2.0,
		3.0, // 1
		3.0, // 1
		4.0,
		4.0,
		5.0, // 2
		5.0  // 2
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0, 0.0, 0.0, 0.0, 0.0 ], 'float32' );
	out = writeDataView( 3, x, 2, 0, view, 1*nbytes, 0, false );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat32( i*nbytes/2, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports an `x` stride (boolean, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'bool';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1, // 0
		0,
		0, // 1
		1,
		1  // 2
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 1, 0, 1, 0, 0 ], 'uint8' );
	out = writeDataView( 3, x, 2, 0, view, 1*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getUint8( i*nbytes, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports an `x` stride (boolean, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'bool';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1, // 0
		0,
		0, // 1
		1,
		1  // 2
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 1, 0, 1, 0, 0 ], 'uint8' );
	out = writeDataView( 3, x, 2, 0, view, 1*nbytes, 0, false );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getUint8( i*nbytes, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports an `x` offset (float64, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0,
		2.0,
		3.0, // 0
		4.0, // 1
		5.0  // 2
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 3.0, 4.0, 5.0, 0.0, 0.0 ], dt );
	out = writeDataView( 3, x, 1, 2, view, 1*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports an `x` offset (float64, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0,
		2.0,
		3.0, // 0
		4.0, // 1
		5.0  // 2
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 3.0, 4.0, 5.0, 0.0, 0.0 ], dt );
	out = writeDataView( 3, x, 1, 2, view, 1*nbytes, 0, false );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports an `x` offset (complex128, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex128';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0,
		1.0,
		2.0,
		2.0,
		3.0, // 0
		3.0, // 0
		4.0, // 1
		4.0, // 1
		5.0, // 2
		5.0  // 2
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 0.0, 0.0, 0.0, 0.0 ], 'float64' );
	out = writeDataView( 3, x, 1, 2, view, 1*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes/2, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports an `x` offset (complex128, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex128';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0,
		1.0,
		2.0,
		2.0,
		3.0, // 0
		3.0, // 0
		4.0, // 1
		4.0, // 1
		5.0, // 2
		5.0  // 2
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 0.0, 0.0, 0.0, 0.0 ], 'float64' );
	out = writeDataView( 3, x, 1, 2, view, 1*nbytes, 0, false );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes/2, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports an `x` offset (complex64, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex64';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0,
		1.0,
		2.0,
		2.0,
		3.0, // 0
		3.0, // 0
		4.0, // 1
		4.0, // 1
		5.0, // 2
		5.0  // 2
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 0.0, 0.0, 0.0, 0.0 ], 'float32' );
	out = writeDataView( 3, x, 1, 2, view, 1*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat32( i*nbytes/2, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports an `x` offset (complex64, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex64';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0,
		1.0,
		2.0,
		2.0,
		3.0, // 0
		3.0, // 0
		4.0, // 1
		4.0, // 1
		5.0, // 2
		5.0  // 2
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 0.0, 0.0, 0.0, 0.0 ], 'float32' );
	out = writeDataView( 3, x, 1, 2, view, 1*nbytes, 0, false );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat32( i*nbytes/2, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports an `x` offset (boolean, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'bool';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1,
		0,
		0, // 0
		1, // 1
		1  // 2
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 0, 1, 1, 0, 0 ], 'uint8' );
	out = writeDataView( 3, x, 1, 2, view, 1*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getUint8( i*nbytes, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports an `x` offset (boolean, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'bool';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1,
		0,
		0, // 0
		1, // 1
		1  // 2
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 0, 1, 1, 0, 0 ], 'uint8' );
	out = writeDataView( 3, x, 1, 2, view, 1*nbytes, 0, false );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getUint8( i*nbytes, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports a DataView stride (float64, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 1.0, 0.0, 2.0, 0.0, 3.0 ], dt );
	out = writeDataView( 3, x, 1, 0, view, 2*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports a DataView stride (float64, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 1.0, 0.0, 2.0, 0.0, 3.0 ], dt );
	out = writeDataView( 3, x, 1, 0, view, 2*nbytes, 0, false );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports a DataView stride (complex128, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex128';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 0
		1.0, // 0
		2.0, // 1
		2.0, // 1
		3.0, // 2
		3.0, // 2
		4.0,
		4.0,
		5.0,
		5.0
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 1.0, 1.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 3.0, 3.0 ], 'float64' );
	out = writeDataView( 3, x, 1, 0, view, 2*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes/2, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports a DataView stride (complex128, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex128';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 0
		1.0, // 0
		2.0, // 1
		2.0, // 1
		3.0, // 2
		3.0, // 2
		4.0,
		4.0,
		5.0,
		5.0
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 1.0, 1.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 3.0, 3.0 ], 'float64' );
	out = writeDataView( 3, x, 1, 0, view, 2*nbytes, 0, false );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes/2, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports a DataView stride (complex64, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex64';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 0
		1.0, // 0
		2.0, // 1
		2.0, // 1
		3.0, // 2
		3.0, // 2
		4.0,
		4.0,
		5.0,
		5.0
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 1.0, 1.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 3.0, 3.0 ], 'float32' );
	out = writeDataView( 3, x, 1, 0, view, 2*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat32( i*nbytes/2, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports a DataView stride (complex64, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex64';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 0
		1.0, // 0
		2.0, // 1
		2.0, // 1
		3.0, // 2
		3.0, // 2
		4.0,
		4.0,
		5.0,
		5.0
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 1.0, 1.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 3.0, 3.0 ], 'float32' );
	out = writeDataView( 3, x, 1, 0, view, 2*nbytes, 0, false );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat32( i*nbytes/2, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports a DataView stride (boolean, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'bool';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1, // 0
		0, // 1
		1, // 2
		0,
		1
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 1, 0, 0, 0, 1 ], 'uint8' );
	out = writeDataView( 3, x, 1, 0, view, 2*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getUint8( i*nbytes, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports a DataView stride (boolean, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'bool';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1, // 0
		0, // 1
		1, // 2
		0,
		1
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 1, 0, 0, 0, 1 ], 'uint8' );
	out = writeDataView( 3, x, 1, 0, view, 2*nbytes, 0, false );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getUint8( i*nbytes, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports a DataView offset (float64, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 0.0, 0.0, 1.0, 2.0, 3.0 ], dt );
	out = writeDataView( 3, x, 1, 0, view, 1*nbytes, 2*nbytes, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports a DataView offset (float64, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 0.0, 0.0, 1.0, 2.0, 3.0 ], dt );
	out = writeDataView( 3, x, 1, 0, view, 1*nbytes, 2*nbytes, false );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports a DataView offset (complex128, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex128';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 0
		1.0, // 0
		2.0, // 1
		2.0, // 1
		3.0, // 2
		3.0, // 2
		4.0,
		4.0,
		5.0,
		5.0
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ], 'float64' );
	out = writeDataView( 3, x, 1, 0, view, 1*nbytes, 2*nbytes, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes/2, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports a DataView offset (complex128, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex128';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 0
		1.0, // 0
		2.0, // 1
		2.0, // 1
		3.0, // 2
		3.0, // 2
		4.0,
		4.0,
		5.0,
		5.0
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ], 'float64' );
	out = writeDataView( 3, x, 1, 0, view, 1*nbytes, 2*nbytes, false );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes/2, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports a DataView offset (complex64, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex64';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 0
		1.0, // 0
		2.0, // 1
		2.0, // 1
		3.0, // 2
		3.0, // 2
		4.0,
		4.0,
		5.0,
		5.0
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ], 'float32' );
	out = writeDataView( 3, x, 1, 0, view, 1*nbytes, 2*nbytes, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat32( i*nbytes/2, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports a DataView offset (complex64, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex64';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 0
		1.0, // 0
		2.0, // 1
		2.0, // 1
		3.0, // 2
		3.0, // 2
		4.0,
		4.0,
		5.0,
		5.0
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ], 'float32' );
	out = writeDataView( 3, x, 1, 0, view, 1*nbytes, 2*nbytes, false );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat32( i*nbytes/2, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports a DataView offset (boolean, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'bool';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1, // 0
		1, // 1
		1, // 2
		0,
		1
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 0, 0, 1, 1, 1 ], 'uint8' );
	out = writeDataView( 3, x, 1, 0, view, 1*nbytes, 2*nbytes, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getUint8( i*nbytes, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports a DataView offset (boolean, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'bool';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1, // 0
		1, // 1
		1, // 2
		0,
		1
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 0, 0, 1, 1, 1 ], 'uint8' );
	out = writeDataView( 3, x, 1, 0, view, 1*nbytes, 2*nbytes, false );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getUint8( i*nbytes, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function returns a reference to the output DataView', function test( t ) {
	var nbytes;
	var view;
	var buf;
	var out;
	var dt;
	var x;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ], dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	out = writeDataView( x.length, x, 1, 0, view, 1*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the DataView unchanged (float64)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ], dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = zeros( x.length, dt );

	out = writeDataView( -1, x, 1, 0, view, 1*nbytes, 0, true );
	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes, true ), expected[ i ], 'returns expected value for index ' + i );
	}

	out = writeDataView( 0, x, 1, 0, view, 1*nbytes, 0, false );
	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the DataView unchanged (complex128)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex128';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = zeros( x.length*2, 'float64' );

	out = writeDataView( -1, x, 1, 0, view, 1*nbytes, 0, true );
	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes/2, true ), expected[ i ], 'returns expected value for index ' + i );
	}

	out = writeDataView( 0, x, 1, 0, view, 1*nbytes, 0, false );
	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes/2, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the DataView unchanged (complex64)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex64';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = zeros( x.length*2, 'float32' );

	out = writeDataView( -1, x, 1, 0, view, 1*nbytes, 0, true );
	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat32( i*nbytes/2, true ), expected[ i ], 'returns expected value for index ' + i );
	}

	out = writeDataView( 0, x, 1, 0, view, 1*nbytes, 0, false );
	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat32( i*nbytes/2, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the DataView unchanged (boolean)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'bool';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1, 0, 0, 1, 1 ], dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = zeros( x.length, 'uint8' );

	out = writeDataView( -1, x, 1, 0, view, 1*nbytes, 0, true );
	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getUint8( i*nbytes, true ), expected[ i ], 'returns expected value for index ' + i );
	}

	out = writeDataView( 0, x, 1, 0, view, 1*nbytes, 0, false );
	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getUint8( i*nbytes, false ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports negative strides (float64)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 2
		2.0, // 1
		3.0, // 0
		4.0,
		5.0
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 1.0, 0.0, 2.0, 0.0, 3.0 ], dt );
	out = writeDataView( 3, x, -1, 2, view, -2*nbytes, 4*nbytes, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports negative strides (complex128)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex128';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 2
		1.0, // 2
		2.0, // 1
		2.0, // 1
		3.0, // 0
		3.0, // 0
		4.0,
		4.0,
		5.0,
		5.0
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 1.0, 1.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 3.0, 3.0 ], 'float64' );
	out = writeDataView( 3, x, -1, 2, view, -2*nbytes, 4*nbytes, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes/2, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports negative strides (complex64)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex64';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 2
		1.0, // 2
		2.0, // 1
		2.0, // 1
		3.0, // 0
		3.0, // 0
		4.0,
		4.0,
		5.0,
		5.0
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 1.0, 1.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 3.0, 3.0 ], 'float32' );
	out = writeDataView( 3, x, -1, 2, view, -2*nbytes, 4*nbytes, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat32( i*nbytes/2, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports negative strides (boolean)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'bool';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1, // 2
		0, // 1
		1, // 0
		1,
		1
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 1, 0, 0, 0, 1 ], 'uint8' );
	out = writeDataView( 3, x, -1, 2, view, -2*nbytes, 4*nbytes, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getUint8( i*nbytes, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports complex access patterns (float64)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 5.0, 0.0, 3.0, 0.0, 1.0 ], dt );
	out = writeDataView( 3, x, -2, 4, view, 2*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports complex access patterns (complex128)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex128';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 2
		1.0, // 2
		2.0,
		2.0,
		3.0, // 1
		3.0, // 1
		4.0,
		4.0,
		5.0, // 0
		5.0  // 0
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 5.0, 5.0, 0.0, 0.0, 3.0, 3.0, 0.0, 0.0, 1.0, 1.0 ], 'float64' );
	out = writeDataView( 3, x, -2, 4, view, 2*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat64( i*nbytes/2, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports complex access patterns (complex64)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'complex64';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1.0, // 2
		1.0, // 2
		2.0,
		2.0,
		3.0, // 1
		3.0, // 1
		4.0,
		4.0,
		5.0, // 0
		5.0  // 0
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 5.0, 5.0, 0.0, 0.0, 3.0, 3.0, 0.0, 0.0, 1.0, 1.0 ], 'float32' );
	out = writeDataView( 3, x, -2, 4, view, 2*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getFloat32( i*nbytes/2, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});

tape( 'the function supports complex access patterns (boolean)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var buf;
	var out;
	var dt;
	var x;
	var i;

	dt = 'bool';
	nbytes = bytesPerElement( dt );

	xbuf = [
		1, // 2
		0,
		0, // 1
		1,
		1  // 0
	];
	x = typedarray( xbuf, dt );

	buf = new ArrayBuffer( x.length*nbytes );
	view = new DataView( buf );

	expected = typedarray( [ 1, 0, 0, 0, 1 ], 'uint8' );
	out = writeDataView( 3, x, -2, 4, view, 2*nbytes, 0, true );

	t.strictEqual( out, view, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( view.getUint8( i*nbytes, true ), expected[ i ], 'returns expected value for index ' + i );
	}
	t.end();
});
