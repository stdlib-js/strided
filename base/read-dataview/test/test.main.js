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
var IS_LITTLE_ENDIAN = require( '@stdlib/assert/is-little-endian' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var typedarray = require( '@stdlib/array/typed' );
var zeros = require( '@stdlib/array/zeros' );
var DataView = require( '@stdlib/array/dataview' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var reinterpretComplex = require( './../../../base/reinterpret-complex' );
var reinterpretBoolean = require( './../../../base/reinterpret-boolean' );
var readDataView = require( './../lib/main.js' );


// VARIABLES //

var METHOD_TABLE = {
	'float64': 'getFloat64',
	'float32': 'getFloat32',
	'int64': 'getInt64',
	'int32': 'getInt32',
	'int16': 'getInt16',
	'int8': 'getInt8',
	'uint64': 'getUint64',
	'uint32': 'getUint32',
	'uint16': 'getUint16',
	'uint8': 'getUint8'
};


// FUNCTIONS //

/**
* Converts the endianness of an array.
*
* @private
* @param {string} dtype - array data type
* @param {Collection} x - array to convert
* @param {boolean} toLittleEndian - boolean indicating whether to convert to little endian
* @returns {Collection} converted array
*/
function convertEndianness( dtype, x, toLittleEndian ) {
	var view;
	var out;
	var m;
	var i;
	if ( ( IS_LITTLE_ENDIAN && toLittleEndian ) || ( !IS_LITTLE_ENDIAN && !toLittleEndian ) ) {
		return x;
	}
	view = new DataView( x.buffer );
	out = zeros( x.length, dtype );
	m = METHOD_TABLE[ dtype ];
	for ( i = 0; i < x.length; i++ ) {
		out[ i ] = view[ m ]( i*bytesPerElement( dtype ) );
	}
	return out;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof readDataView, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', function test( t ) {
	t.strictEqual( readDataView.length, 6, 'returns expected value' );
	t.end();
});

tape( 'the function copies each strided view element (float64, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var out;
	var dt;
	var x;
	var y;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ], dt );
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	expected = convertEndianness( dt, typedarray( x, dt ), true );
	out = readDataView( x.length, view, 1*nbytes, y, 1, true );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function copies each strided view element (float64, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var out;
	var dt;
	var x;
	var y;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ], dt );
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	expected = convertEndianness( dt, typedarray( x, dt ), false );
	out = readDataView( x.length, view, 1*nbytes, y, 1, false );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function copies each strided view element (generic, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var out;
	var dt;
	var x;
	var y;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ], dt );
	view = new DataView( x.buffer );

	y = zeros( x.length, 'generic' );

	expected = convertEndianness( dt, typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ], 'float64' ), true );
	out = readDataView( x.length, view, 1*nbytes, y, 1, true );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function copies each strided view element (generic, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var out;
	var dt;
	var x;
	var y;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ], dt );
	view = new DataView( x.buffer );

	y = zeros( x.length, 'generic' );

	expected = convertEndianness( dt, typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ], 'float64' ), false );
	out = readDataView( x.length, view, 1*nbytes, y, 1, false );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function copies each strided view element (accessors, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var ybuf;
	var out;
	var dt;
	var x;
	var y;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ], dt );
	view = new DataView( x.buffer );

	ybuf = zeros( x.length, dt );
	y = toAccessorArray( ybuf );

	expected = convertEndianness( dt, typedarray( x, dt ), true );
	out = readDataView( x.length, view, 1*nbytes, y, 1, true );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );
	t.end();
});

tape( 'the function copies each strided view element (accessors, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var ybuf;
	var out;
	var dt;
	var x;
	var y;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ], dt );
	view = new DataView( x.buffer );

	ybuf = zeros( x.length, dt );
	y = toAccessorArray( ybuf );

	expected = convertEndianness( dt, typedarray( x, dt ), false );
	out = readDataView( x.length, view, 1*nbytes, y, 1, false );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );
	t.end();
});

tape( 'the function copies each strided view element (complex128, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var out;
	var dt;
	var x;
	var y;

	dt = 'complex128';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ], dt );
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	expected = convertEndianness( 'float64', typedarray( reinterpretComplex( x, 0 ), 'float64' ), true );
	out = readDataView( x.length, view, 1*nbytes, y, 1, true );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretComplex( out, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function copies each strided view element (complex128, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var out;
	var dt;
	var x;
	var y;

	dt = 'complex128';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ], dt );
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	expected = convertEndianness( 'float64', typedarray( reinterpretComplex( x, 0 ), 'float64' ), false );
	out = readDataView( x.length, view, 1*nbytes, y, 1, false );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretComplex( out, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function copies each strided view element (complex64, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var out;
	var dt;
	var x;
	var y;

	dt = 'complex64';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ], dt );
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	expected = convertEndianness( 'float32', typedarray( reinterpretComplex( x, 0 ), 'float32' ), true );
	out = readDataView( x.length, view, 1*nbytes, y, 1, true );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretComplex( out, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function copies each strided view element (complex64, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var out;
	var dt;
	var x;
	var y;

	dt = 'complex64';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ], dt );
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	expected = convertEndianness( 'float32', typedarray( reinterpretComplex( x, 0 ), 'float32' ), false );
	out = readDataView( x.length, view, 1*nbytes, y, 1, false );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretComplex( out, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function copies each strided view element (boolean, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var out;
	var dt;
	var x;
	var y;

	dt = 'bool';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1, 0, 1, 0 ], dt );
	view = new DataView( x.buffer );

	y = typedarray( zeros( x.length, 'uint8' ), dt );

	expected = convertEndianness( 'uint8', typedarray( reinterpretBoolean( x, 0 ), 'uint8' ), true );
	out = readDataView( x.length, view, 1*nbytes, y, 1, true );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function copies each strided view element (boolean, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var out;
	var dt;
	var x;
	var y;

	dt = 'bool';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1, 0, 1, 0 ], dt );
	view = new DataView( x.buffer );

	y = typedarray( zeros( x.length, 'uint8' ), dt );

	expected = convertEndianness( 'uint8', typedarray( reinterpretBoolean( x, 0 ), 'uint8' ), false );
	out = readDataView( x.length, view, 1*nbytes, y, 1, false );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `view` stride (float64, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var out;
	var dt;
	var x;
	var y;

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
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	expected = convertEndianness( dt, typedarray( [ 1.0, 3.0, 5.0, 0.0, 0.0 ], dt ), true );
	out = readDataView( 3, view, 2*nbytes, y, 1, true );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `view` stride (float64, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var out;
	var dt;
	var x;
	var y;

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
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	expected = convertEndianness( dt, typedarray( [ 1.0, 3.0, 5.0, 0.0, 0.0 ], dt ), false );
	out = readDataView( 3, view, 2*nbytes, y, 1, false );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `view` stride (complex128, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var out;
	var dt;
	var x;
	var y;

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
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	expected = convertEndianness( 'float64', typedarray( [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0, 0.0, 0.0, 0.0, 0.0 ], 'float64' ), true );
	out = readDataView( 3, view, 2*nbytes, y, 1, true );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretComplex( out, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `view` stride (complex128, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var out;
	var dt;
	var x;
	var y;

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
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	expected = convertEndianness( 'float64', typedarray( [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0, 0.0, 0.0, 0.0, 0.0 ], 'float64' ), false );
	out = readDataView( 3, view, 2*nbytes, y, 1, false );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretComplex( out, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `view` stride (complex64, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var out;
	var dt;
	var x;
	var y;

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
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	expected = convertEndianness( 'float32', typedarray( [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0, 0.0, 0.0, 0.0, 0.0 ], 'float32' ), true );
	out = readDataView( 3, view, 2*nbytes, y, 1, true );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretComplex( out, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `view` stride (complex64, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var out;
	var dt;
	var x;
	var y;

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
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	expected = convertEndianness( 'float32', typedarray( [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0, 0.0, 0.0, 0.0, 0.0 ], 'float32' ), false );
	out = readDataView( 3, view, 2*nbytes, y, 1, false );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretComplex( out, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `view` stride (boolean, little-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var out;
	var dt;
	var x;
	var y;

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
	view = new DataView( x.buffer );

	y = typedarray( zeros( x.length, 'uint8' ), dt );

	expected = convertEndianness( 'uint8', typedarray( [ 1, 0, 1, 0, 0 ], 'uint8' ), true );
	out = readDataView( 3, view, 2*nbytes, y, 1, true );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `view` stride (boolean, big-endian)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var out;
	var dt;
	var x;
	var y;

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
	view = new DataView( x.buffer );

	y = typedarray( zeros( x.length, 'uint8' ), dt );

	expected = convertEndianness( 'uint8', typedarray( [ 1, 0, 1, 0, 0 ], 'uint8' ), false );
	out = readDataView( 3, view, 2*nbytes, y, 1, false );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `out` stride', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var out;
	var dt;
	var x;
	var y;

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
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	expected = convertEndianness( dt, typedarray( [ 1.0, 0.0, 2.0, 0.0, 3.0 ], dt ), true );
	out = readDataView( 3, view, 1*nbytes, y, 2, true );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var nbytes;
	var view;
	var out;
	var dt;
	var x;
	var y;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ], dt );
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	out = readDataView( x.length, view, 1*nbytes, y, 1, true );

	t.strictEqual( out, y, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the output array unchanged (float64)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var out;
	var dt;
	var x;
	var y;

	dt = 'float64';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ], dt );
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	expected = zeros( x.length, dt );

	out = readDataView( -1, view, 1*nbytes, y, 1, true );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = readDataView( 0, view, 1*nbytes, y, 1, false );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the output array unchanged (complex128)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var out;
	var dt;
	var x;
	var y;

	dt = 'complex128';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], dt );
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	expected = zeros( x.length*2, 'float64' );

	out = readDataView( -1, view, 1*nbytes, y, 1, true );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretComplex( out, 0 ), expected, 'returns expected value' );

	out = readDataView( 0, view, 1*nbytes, y, 1, false );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretComplex( out, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the output array unchanged (complex64)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var out;
	var dt;
	var x;
	var y;

	dt = 'complex64';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], dt );
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	expected = zeros( x.length*2, 'float32' );

	out = readDataView( -1, view, 1*nbytes, y, 1, true );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretComplex( out, 0 ), expected, 'returns expected value' );

	out = readDataView( 0, view, 1*nbytes, y, 1, false );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretComplex( out, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the output array unchanged (boolean)', function test( t ) {
	var expected;
	var nbytes;
	var view;
	var out;
	var dt;
	var x;
	var y;

	dt = 'bool';
	nbytes = bytesPerElement( dt );

	x = typedarray( [ 1, 0, 0, 1, 1 ], dt );
	view = new DataView( x.buffer );

	y = typedarray( zeros( x.length, 'uint8' ), dt );

	expected = zeros( x.length, 'uint8' );

	out = readDataView( -1, view, 1*nbytes, y, 1, true );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );

	out = readDataView( 0, view, 1*nbytes, y, 1, false );
	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides (float64)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var out;
	var dt;
	var x;
	var y;

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
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	expected = convertEndianness( dt, typedarray( [ 1.0, 0.0, 2.0, 0.0, 3.0 ], dt ), true );
	out = readDataView( 3, view, -1*nbytes, y, -2, true );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides (complex128)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var out;
	var dt;
	var x;
	var y;

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
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	expected = convertEndianness( 'float64', typedarray( [ 1.0, 1.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 3.0, 3.0 ], 'float64' ), true );
	out = readDataView( 3, view, -1*nbytes, y, -2, true );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretComplex( out, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides (complex64)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var out;
	var dt;
	var x;
	var y;

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
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	expected = convertEndianness( 'float32', typedarray( [ 1.0, 1.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 3.0, 3.0 ], 'float32' ), true );
	out = readDataView( 3, view, -1*nbytes, y, -2, true );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretComplex( out, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides (boolean)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var out;
	var dt;
	var x;
	var y;

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
	view = new DataView( x.buffer );

	y = typedarray( zeros( x.length, 'uint8' ), dt );

	expected = convertEndianness( 'uint8', typedarray( [ 1, 0, 0, 0, 1 ], 'uint8' ), true );
	out = readDataView( 3, view, -1*nbytes, y, -2, true );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns (float64)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var out;
	var dt;
	var x;
	var y;

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
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	expected = convertEndianness( dt, typedarray( [ 5.0, 0.0, 3.0, 0.0, 1.0 ], dt ), true );
	out = readDataView( 3, view, -2*nbytes, y, 2, true );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns (complex128)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var out;
	var dt;
	var x;
	var y;

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
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	expected = convertEndianness( 'float64', typedarray( [ 5.0, 5.0, 0.0, 0.0, 3.0, 3.0, 0.0, 0.0, 1.0, 1.0 ], 'float64' ), true );
	out = readDataView( 3, view, -2*nbytes, y, 2, true );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretComplex( out, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns (complex64)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var out;
	var dt;
	var x;
	var y;

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
	view = new DataView( x.buffer );

	y = zeros( x.length, dt );

	expected = convertEndianness( 'float32', typedarray( [ 5.0, 5.0, 0.0, 0.0, 3.0, 3.0, 0.0, 0.0, 1.0, 1.0 ], 'float32' ), true );
	out = readDataView( 3, view, -2*nbytes, y, 2, true );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretComplex( out, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns (boolean)', function test( t ) {
	var expected;
	var nbytes;
	var xbuf;
	var view;
	var out;
	var dt;
	var x;
	var y;

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
	view = new DataView( x.buffer );

	y = typedarray( zeros( x.length, 'uint8' ), dt );

	expected = convertEndianness( 'uint8', typedarray( [ 1, 0, 0, 0, 1 ], 'uint8' ), true );
	out = readDataView( 3, view, -2*nbytes, y, 2, true );

	t.strictEqual( out, y, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( out, 0 ), expected, 'returns expected value' );
	t.end();
});
