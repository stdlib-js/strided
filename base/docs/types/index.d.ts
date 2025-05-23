/*
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import binary = require( './../../../base/binary' );
import binaryAddonDispatch = require( './../../../base/binary-addon-dispatch' );
import binaryDtypeSignatures = require( './../../../base/binary-dtype-signatures' );
import binarySignatureCallbacks = require( './../../../base/binary-signature-callbacks' );
import cmap = require( './../../../base/cmap' );
import dmap = require( './../../../base/dmap' );
import dmap2 = require( './../../../base/dmap2' );
import dmskmap = require( './../../../base/dmskmap' );
import dmskmap2 = require( './../../../base/dmskmap2' );
import dtypeEnum2Str = require( './../../../base/dtype-enum2str' );
import dtypeResolveEnum = require( './../../../base/dtype-resolve-enum' );
import dtypeResolveStr = require( './../../../base/dtype-resolve-str' );
import dtypeStr2Enum = require( './../../../base/dtype-str2enum' );
import mapBy = require( './../../../base/map-by' );
import mapBy2 = require( './../../../base/map-by2' );
import maxViewBufferIndex = require( './../../../base/max-view-buffer-index' );
import metaDataProps = require( './../../../base/meta-data-props' );
import minViewBufferIndex = require( './../../../base/min-view-buffer-index' );
import mskunary = require( './../../../base/mskunary' );
import mskunaryAddonDispatch = require( './../../../base/mskunary-addon-dispatch' );
import mskunaryDtypeSignatures = require( './../../../base/mskunary-dtype-signatures' );
import mskunarySignatureCallbacks = require( './../../../base/mskunary-signature-callbacks' );
import nullary = require( './../../../base/nullary' );
import nullaryAddonDispatch = require( './../../../base/nullary-addon-dispatch' );
import offsetView = require( './../../../base/offset-view' );
import quaternary = require( './../../../base/quaternary' );
import quinary = require( './../../../base/quinary' );
import readDataView = require( './../../../base/read-dataview' );
import reinterpretBoolean = require( './../../../base/reinterpret-boolean' );
import reinterpretComplex = require( './../../../base/reinterpret-complex' );
import reinterpretComplex64 = require( './../../../base/reinterpret-complex64' );
import reinterpretComplex128 = require( './../../../base/reinterpret-complex128' );
import smap = require( './../../../base/smap' );
import smap2 = require( './../../../base/smap2' );
import smskmap = require( './../../../base/smskmap' );
import smskmap2 = require( './../../../base/smskmap2' );
import stride2offset = require( './../../../base/stride2offset' );
import strided2object = require( './../../../base/strided2object' );
import ternary = require( './../../../base/ternary' );
import unary = require( './../../../base/unary' );
import unaryAddonDispatch = require( './../../../base/unary-addon-dispatch' );
import unaryBy = require( './../../../base/unary-by' );
import unaryDtypeSignatures = require( './../../../base/unary-dtype-signatures' );
import unarySignatureCallbacks = require( './../../../base/unary-signature-callbacks' );
import writeDataView = require( './../../../base/write-dataview' );
import zmap = require( './../../../base/zmap' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Applies a binary callback to strided input array elements and assigns results to elements in a strided output array.
	*
	* @param arrays - array-like object containing two input arrays and one output array
	* @param shape - array-like object containing a single element, the number of indexed elements
	* @param strides - array-like object containing the stride lengths for the input and output arrays
	* @param fcn - binary callback
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* function add( x, y ) {
	*     return x + y;
	* }
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float64Array( x.length );
	*
	* var shape = [ x.length ];
	* var strides = [ 1, 1, 1 ];
	*
	* ns.binary( [ x, y, z ], shape, strides, add );
	*
	* console.log( z );
	* // => <Float64Array>[ 2.0, 4.0, 6.0, 8.0, 10.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* function add( x, y ) {
	*     return x + y;
	* }
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float64Array( x.length );
	*
	* var shape = [ x.length ];
	* var strides = [ 1, 1, 1 ];
	* var offsets = [ 0, 0, 0 ];
	*
	* ns.binary.ndarray( [ x, y, z ], shape, strides, offsets, add );
	*
	* console.log( z );
	* // => <Float64Array>[ 2.0, 4.0, 6.0, 8.0, 10.0 ]
	*/
	binary: typeof binary;

	/**
	* Returns a function which dispatches to a native add-on applying a unary function to two input strided arrays.
	*
	* @param addon - add-on function
	* @param fallback - fallback function
	* @returns dispatch function
	*
	* @example
	* function addon( N, dtypeX, x, strideX, dtypeY, y, strideY, dtypeZ, z, strideZ ) {
	*     // Call into native add-on...
	* }
	*
	* function fallback( N, dtypeX, x, strideX, dtypeY, y, strideY, dtypeZ, z, strideZ ) {
	*     // Fallback JavaScript implementation...
	* }
	*
	* // Create a ns.binaryAddonDispatch function:
	* var f = ns.binaryAddonDispatch( addon, fallback );
	*
	* // ...
	*
	* // Invoke the ns.binaryAddonDispatch function with strided array arguments:
	* f( 2, 'generic', [ 1, 2 ], 1, 'generic', [ 3, 4 ], 1, 'generic', [ 0, 0 ], 1 );
	*
	* @example
	* function addon( N, dtypeX, x, strideX, dtypeY, y, strideY, dtypeZ, z, strideZ ) {
	*     // Call into native add-on...
	* }
	*
	* function fallback( N, dtypeX, x, strideX, offsetX, dtypeY, y, strideY, offsetY, dtypeZ, z, strideZ, offsetZ ) {
	*     // Fallback JavaScript implementation...
	* }
	*
	* // Create a ns.binaryAddonDispatch function:
	* var f = ns.binaryAddonDispatch.ndarray( addon, fallback );
	*
	* // ...
	*
	* // Invoke the ns.binaryAddonDispatch function with strided array arguments:
	* f( 2, 'generic', [ 1, 2 ], 1, 0, 'generic', [ 3, 4 ], 1, 0, 'generic', [ 0, 0 ], 1, 0 );
	*/
	binaryAddonDispatch: typeof binaryAddonDispatch;

	/**
	* Generates a list of binary interface signatures from strided array data types.
	*
	* ## Notes
	*
	* -   The function returns a strided array having a stride length of `3` (i.e., every `3` elements define a binary interface signature).
	* -   For each signature (i.e., set of three consecutive non-overlapping strided array elements), the first two elements are the input data types and the third element is the return data type.
	* -   All signatures follow type promotion rules.
	*
	* @param dtypes1 - list of supported data types for the first argument
	* @param dtypes2 - list of supported data types for the second argument
	* @param dtypes3 - list of supported data types for the output
	* @param options - options
	* @param options.enums - boolean flag indicating whether to return signatures as a list of enumeration constants
	* @throws must provide recognized data types
	* @returns strided array containing binary interface signatures
	*
	* @example
	* var dtypes = [
	*     'float64',
	*     'float32',
	*     'int32',
	*     'uint8'
	* ];
	*
	* var sigs = ns.binaryDtypeSignatures( dtypes, dtypes, dtypes );
	* // returns [ 'float32', 'float32', 'float32', ... ]
	*/
	binaryDtypeSignatures: typeof binaryDtypeSignatures;

	/**
	* Assigns callbacks to binary interfaces according to type promotion rules.
	*
	* ## Notes
	*
	* -   The function assumes that the provided signature array has the following properties:
	*
	*     -   a strided array having a stride length of `3` (i.e., every `3` elements define a binary interface signature).
	*     -   for each signature (i.e., set of three consecutive non-overlapping strided array elements), the first two elements are the input data types and the third element is the return data type.
	*     -   all signatures follow type promotion rules.
	*
	* @param table - callback table
	* @param table.default - default callback
	* @param table.complex64 - callback for single-precision complex floating-point numbers
	* @param table.complex128 - callback for double-precision complex floating-point numbers
	* @param signatures - strided array containing binary interface signatures
	* @returns list of callbacks
	*
	* @example
	* var signatures = require( './../../../base/binary-dtype-signatures' );
	* var add = require( '@stdlib/number/float64/base/add' );
	* var cadd = require( '@stdlib/complex/float64/base/add' );
	* var caddf = require( '@stdlib/complex/float32/base/add' );
	*
	* var dtypes = [
	*     'float64',
	*     'float32',
	*     'int32',
	*     'uint8'
	* ];
	*
	* var sigs = signatures( dtypes, dtypes, dtypes );
	* // returns [...]
	*
	* var table = {
	*     'default': add,
	*     'complex64': caddf,
	*     'complex128': cadd
	* };
	*
	* var list = ns.binarySignatureCallbacks( table, sigs );
	* // returns [...]
	*/
	binarySignatureCallbacks: typeof binarySignatureCallbacks;

	/**
	* Applies a unary function to a single-precision complex floating-point strided input array and assigns results to a single-precision complex floating-point strided output array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param fcn - unary function to apply
	* @returns `y`
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* function scale( x ) {
	*     var re = real( x );
	*     var im = imag( x );
	*     return new Complex64( re*10.0, im*10.0 );
	* }
	*
	* var x = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0 ] );
	* var y = new Complex64Array( x.length );
	*
	* ns.cmap( x.length, x, 1, y, 1, scale );
	*
	* var v = y.get( 0 );
	* // returns <Complex64>
	*
	* var re = real( v );
	* // returns 10.0
	*
	* var im = imag( v );
	* // returns 10.0
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* function scale( x ) {
	*     var re = real( x );
	*     var im = imag( x );
	*     return new Complex64( re*10.0, im*10.0 );
	* }
	*
	* var x = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0 ] );
	* var y = new Complex64Array( x.length );
	*
	* ns.cmap.ndarray( x.length, x, 1, 0, y, 1, 0, scale );
	*
	* var v = y.get( 0 );
	* // returns <Complex64>
	*
	* var re = real( v );
	* // returns 10.0
	*
	* var im = imag( v );
	* // returns 10.0
	*/
	cmap: typeof cmap;

	/**
	* Applies a unary function to a double-precision floating-point strided input array and assigns results to a double-precision floating-point strided output array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param fcn - unary function to apply
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* function identity( x ) {
	*     return x;
	* }
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmap( x.length, x, 1, y, 1, identity );
	* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* function identity( x ) {
	*     return x;
	* }
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmap.ndarray( x.length, x, 1, 0, y, 1, 0, identity );
	* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	dmap: typeof dmap;

	/**
	* Applies a binary function to double-precision floating-point strided input arrays and assigns results to a double-precision floating-point strided output array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - input array
	* @param strideY - `y` stride length
	* @param z - destination array
	* @param strideZ - `z` stride length
	* @param fcn - binary function to apply
	* @returns `z`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var add = require( '@stdlib/number/float64/base/add' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmap2( x.length, x, 1, y, 1, z, 1, add );
	* // z => <Float64Array>[ 2.0, 4.0, 6.0, 8.0, 10.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var add = require( '@stdlib/number/float64/base/add' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, add );
	* // z => <Float64Array>[ 2.0, 4.0, 6.0, 8.0, 10.0 ]
	*/
	dmap2: typeof dmap2;

	/**
	* Applies a unary function to a double-precision floating-point strided input array according to a strided mask array and assigns results to a double-precision floating-point strided output array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param fcn - unary function to apply
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* function identity( x ) {
	*     return x;
	* }
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmskmap( x.length, x, 1, m, 1, y, 1, identity );
	* // y => <Float64Array>[ 1.0, 2.0, 0.0, 4.0, 5.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* function identity( x ) {
	*     return x;
	* }
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmskmap.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0, identity );
	* // y => <Float64Array>[ 1.0, 2.0, 0.0, 4.0, 5.0 ]
	*/
	dmskmap: typeof dmskmap;

	/**
	* Applies a binary function to double-precision floating-point strided input arrays according to a strided mask array and assigns results to a double-precision floating-point strided output array
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - input array
	* @param strideY - `y` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param z - destination array
	* @param strideZ - `z` stride length
	* @param fcn - binary function to apply
	* @returns `z`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	* var add = require( '@stdlib/number/float64/base/add' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* ns.dmskmap2( x.length, x, 1, m, 1, y, 1, add );
	* // z => <Float64Array>[ 2.0, 4.0, 0.0, 8.0, 10.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	* var add = require( '@stdlib/number/float64/base/add' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* ns.dmskmap2.ndarray( x.length, x, 1, 0, y, 1, 0, m, 1, 0, z, 1, 0, add );
	* // z => <Float64Array>[ 2.0, 4.0, 0.0, 8.0, 10.0 ]
	*/
	dmskmap2: typeof dmskmap2;

	/**
	* Returns the data type string associated with a strided array data type enumeration constant.
	*
	* @param dtype - data type enumeration constant
	* @returns data type string
	*
	* @example
	* var str2enum = require( './../../../base/dtype-str2enum' );
	*
	* var v = str2enum( 'float64' );
	* // returns <number>
	*
	* var dt = ns.dtypeEnum2Str( v );
	* // returns 'float64'
	*/
	dtypeEnum2Str: typeof dtypeEnum2Str;

	/**
	* Returns the enumeration constant associated with a strided array data type value.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `INT8 == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param dtype - data type value
	* @returns enumeration constant
	*
	* @example
	* var v = ns.dtypeResolveEnum( 'float64' );
	* // returns <number>
	*/
	dtypeResolveEnum: typeof dtypeResolveEnum;

	/**
	* Returns the data type string associated with a strided array data type value.
	*
	* @param dtype - data type value
	* @returns data type string
	*
	* @example
	* var str2enum = require( './../../../base/dtype-str2enum' );
	*
	* var v = ns.dtypeResolveStr( str2enum( 'float64' ) );
	* // returns 'float64'
	*/
	dtypeResolveStr: typeof dtypeResolveStr;

	/**
	* Returns the enumeration constant associated with a strided array data type string.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `INT8 == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param dtype - data type string
	* @returns enumeration constant
	*
	* @example
	* var v = ns.dtypeStr2Enum( 'float64' );
	* // returns <number>
	*/
	dtypeStr2Enum: typeof dtypeStr2Enum;

	/**
	* Applies a unary function to each element retrieved from a strided input array according to a callback function and assigns results to a strided output array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param fcn - unary function to apply to callback return values
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* var abs = require( '@stdlib/math/base/special/abs' );
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.mapBy( x.length, x, 1, y, 1, abs, accessor );
	* // y => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
	*
	* @example
	* var abs = require( '@stdlib/math/base/special/abs' );
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, abs, accessor );
	* // y => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
	*/
	mapBy: typeof mapBy;

	/**
	* Applies a binary function to each pair of elements retrieved from strided input arrays according to a callback function and assigns results to a strided output array
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - input array
	* @param strideY - `y` stride length
	* @param z - destination array
	* @param strideZ - `z` stride length
	* @param fcn - binary function to apply to callback return values
	* @param clbk - callback function which returns an array-like object containing two values
	* @param thisArg - callback execution context
	* @returns `z`
	*
	* @example
	* var add = require( '@stdlib/number/float64/base/add' );
	*
	* function accessor( values ) {
	*     values[ 0 ] *= 2.0;
	*     values[ 1 ] *= 2.0;
	* }
	*
	* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	* var y = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.mapBy2( x.length, x, 1, y, 1, z, 1, add, accessor );
	* // z => [ 4.0, 0.0, 12.0, 0.0, 20.0 ]
	*
	* @example
	* var add = require( '@stdlib/number/float64/base/add' );
	*
	* function accessor( values ) {
	*     values[ 0 ] *= 2.0;
	*     values[ 1 ] *= 2.0;
	* }
	*
	* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	* var y = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, add, accessor );
	* // z => [ 4.0, 0.0, 12.0, 0.0, 20.0 ]
	*/
	mapBy2: typeof mapBy2;

	/**
	* Returns the maximum accessible index based on a set of provided strided array parameters.
	*
	* @param N - number of indexed elements
	* @param stride - stride length
	* @param offset - starting index
	* @returns maximum accessible index
	*
	* @example
	* var idx = ns.maxViewBufferIndex( 3, 2, 10 );
	* // returns 14
	*/
	maxViewBufferIndex: typeof maxViewBufferIndex;

	/**
	* Defines non-enumerable read-only properties which expose strided array function meta data.
	*
	* @param meta - function meta data
	* @param meta.nargs - total number of arguments (excluding offsets)
	* @param meta.nin - total number of input arrays
	* @param meta.nout - total number of output arrays
	* @param dtypes - list of strided array data types
	* @param obj - object on which to define properties
	* @param bool - boolean indicating whether the provided object should describe an "ndarray" function interface
	* @returns object on which properties were defined
	*
	* @example
	* // Define strided array function meta data:
	* var meta = {
	*     'nargs': 7,
	*     'nin': 1,
	*     'nout': 1
	* };
	*
	* // Define the list of strided array data types:
	* var dtypes = [
	*     'float64', 'float64',
	*     'float32', 'float32',
	*     'generic', 'generic'
	* ];
	*
	* // Define an object/function on which to set the properties:
	* var obj = {};
	*
	* // Set the properties:
	* ns.metaDataProps( meta, dtypes, obj, false );
	*/
	metaDataProps: typeof metaDataProps;

	/**
	* Returns the minimum accessible index based on a set of provided strided array parameters.
	*
	* @param N - number of indexed elements
	* @param stride - stride length
	* @param offset - starting index
	* @returns minimum accessible index
	*
	* @example
	* var idx = ns.minViewBufferIndex( 3, -2, 10 );
	* // returns 6
	*/
	minViewBufferIndex: typeof minViewBufferIndex;

	/**
	* Applies a unary callback to elements in a strided input array according to elements in a strided mask array and assigns results to elements in a strided output array.
	*
	* @param arrays - array-like object containing one input array, a mask array, and one output array
	* @param shape - array-like object containing a single element, the number of indexed elements
	* @param strides - array-like object containing the stride lengths for the strided arrays
	* @param fcn - unary callback
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	* var y = new Float64Array( x.length );
	*
	* var shape = [ x.length ];
	* var strides = [ 1, 1, 1 ];
	*
	* ns.mskunary( [ x, m, y ], shape, strides, scale );
	*
	* console.log( y );
	* // => <Float64Array>[ 10.0, 20.0, 0.0, 40.0, 50.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	* var y = new Float64Array( x.length );
	*
	* var shape = [ x.length ];
	* var strides = [ 1, 1, 1 ];
	* var offsets = [ 0, 0, 0 ];
	*
	* ns.mskunary.ndarray( [ x, m, y ], shape, strides, offsets, scale );
	*
	* console.log( y );
	* // => <Float64Array>[ 10.0, 20.0, 0.0, 40.0, 50.0 ]
	*/
	mskunary: typeof mskunary;

	/**
	* Returns a function which dispatches to a native add-on applying a unary function to an input strided array according to a mask strided array.
	*
	* @param addon - add-on function
	* @param fallback - fallback function
	* @returns dispatch function
	*
	* @example
	* function addon( N, dtypeX, x, strideX, dtypeMask, mask, strideMask, dtypeY, y, strideY ) {
	*     // Call into native add-on...
	* }
	*
	* function fallback( N, dtypeX, x, strideX, dtypeMask, mask, strideMask, dtypeY, y, strideY ) {
	*     // Fallback JavaScript implementation...
	* }
	*
	* // Create a ns.mskunaryAddonDispatch function:
	* var f = ns.mskunaryAddonDispatch( addon, fallback );
	*
	* // ...
	*
	* // Invoke the ns.mskunaryAddonDispatch function with strided array arguments:
	* f( 2, 'generic', [ 1, 2 ], 1, 'generic', [ 0, 0 ], 1, 'generic', [ 0, 0 ], 1 );
	*
	* @example
	* function addon( N, dtypeX, x, strideX, dtypeMask, mask, strideMask, dtypeY, y, strideY ) {
	*     // Call into native add-on...
	* }
	*
	* function fallback( N, dtypeX, x, strideX, offsetX, dtypeMask, mask, strideMask, offsetMask, dtypeY, y, strideY, offsetY ) {
	*     // Fallback JavaScript implementation...
	* }
	*
	* // Create a ns.mskunaryAddonDispatch function:
	* var f = ns.mskunaryAddonDispatch.ndarray( addon, fallback );
	*
	* // ...
	*
	* // Invoke the ns.mskunaryAddonDispatch function with strided array arguments:
	* f( 2, 'generic', [ 1, 2 ], 1, 0, 'generic', [ 0, 0 ], 1, 0, 'generic', [ 0, 0 ], 1, 0 );
	*/
	mskunaryAddonDispatch: typeof mskunaryAddonDispatch;

	/**
	* Generates a list of masked unary interface signatures from strided array data types.
	*
	* ## Notes
	*
	* -   The function returns a strided array having a stride length of `3` (i.e., every `3` elements define a masked unary interface signature).
	* -   For each signature (i.e., set of three consecutive non-overlapping strided array elements), the first element is the input data type, the second element is the mask data type, and the last element is the return data type.
	* -   All signatures follow type promotion rules.
	* -   The mask array data type is always `uint8`.
	*
	* @param dtypes1 - list of supported data types for the first argument
	* @param dtypes2 - list of supported data types for the output argument
	* @param options - options
	* @param options.enums - boolean flag indicating whether to return signatures as a list of enumeration constants
	* @throws must provide recognized data types
	* @returns strided array containing masked unary interface signatures
	*
	* @example
	* var dtypes = [
	*     'float64',
	*     'float32',
	*     'int32',
	*     'uint8'
	* ];
	*
	* var sigs = ns.mskunaryDtypeSignatures( dtypes, dtypes );
	* // e.g., returns [ 'float32', 'uint8', 'float32', ... ]
	*/
	mskunaryDtypeSignatures: typeof mskunaryDtypeSignatures;

	/**
	* Assigns callbacks to masked unary interfaces according to type promotion rules.
	*
	* ## Notes
	*
	* -   The function assumes that the provided signature array has the following properties:
	*
	*     -   a strided array having a stride length of `3` (i.e., every `3` elements define a masked unary interface signature).
	*     -   for each signature (i.e., set of three consecutive non-overlapping strided array elements), the first element is the input data type, the second element is the mask data type, and the last element is the return data type.
	*     -   all signatures (excluding the mask data type) follow type promotion rules.
	*
	* @param table - callback table
	* @param table.default - default callback
	* @param table.complex64 - callback for single-precision complex floating-point numbers
	* @param table.complex128 - callback for double-precision complex floating-point numbers
	* @param signatures - strided array containing masked unary interface signatures
	* @returns list of callbacks
	*
	* @example
	* var signatures = require( './../../../base/mskunary-dtype-signatures' );
	* var identity = require( '@stdlib/number/float64/base/identity' );
	* var cidentity = require( '@stdlib/complex/float64/base/identity' );
	* var cidentityf = require( '@stdlib/complex/float32/base/identity' );
	*
	* var dtypes = [
	*     'float64',
	*     'float32',
	*     'int32',
	*     'uint8'
	* ];
	*
	* var sigs = signatures( dtypes, dtypes );
	* // returns [...]
	*
	* var table = {
	*     'default': identity,
	*     'complex64': cidentityf,
	*     'complex128': cidentity
	* };
	*
	* var list = ns.mskunarySignatureCallbacks( table, sigs );
	* // returns [...]
	*/
	mskunarySignatureCallbacks: typeof mskunarySignatureCallbacks;

	/**
	* Applies a nullary callback and assigns results to elements in a strided output array.
	*
	* @param arrays - array-like object containing one output array
	* @param shape - array-like object containing a single element, the number of indexed elements
	* @param strides - array-like object containing the stride length for the output array
	* @param fcn - nullary callback
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* function fill() {
	*     return 3.0;
	* }
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	*
	* var shape = [ x.length ];
	* var strides = [ 1 ];
	*
	* ns.nullary( [ x ], shape, strides, fill );
	*
	* console.log( x );
	* // => <Float64Array>[ 3.0, 3.0, 3.0, 3.0, 3.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* function fill() {
	*     return 3.0;
	* }
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	*
	* var shape = [ x.length ];
	* var strides = [ 1 ];
	* var offsets = [ 0 ];
	*
	* ns.nullary.ndarray( [ x ], shape, strides, offsets, fill );
	*
	* console.log( x );
	* // => <Float64Array>[ 3.0, 3.0, 3.0, 3.0, 3.0 ]
	*/
	nullary: typeof nullary;

	/**
	* Returns a function which dispatches to a native add-on applying a nullary function.
	*
	* @param addon - add-on function
	* @param fallback - fallback function
	* @returns dispatch function
	*
	* @example
	* function addon( N, dtypeX, x, strideX ) {
	*     // Call into native add-on...
	* }
	*
	* function fallback( N, dtypeX, x, strideX ) {
	*     // Fallback JavaScript implementation...
	* }
	*
	* // Create a ns.nullaryAddonDispatch function:
	* var f = ns.nullaryAddonDispatch( addon, fallback );
	*
	* // ...
	*
	* // Invoke the ns.nullaryAddonDispatch function with strided array arguments:
	* f( 2, 'generic', [ 1, 2 ], 1 );
	*
	* @example
	* function addon( N, dtypeX, x, strideX ) {
	*     // Call into native add-on...
	* }
	*
	* function fallback( N, dtypeX, x, strideX, offsetX ) {
	*     // Fallback JavaScript implementation...
	* }
	*
	* // Create a ns.nullaryAddonDispatch function:
	* var f = ns.nullaryAddonDispatch.ndarray( addon, fallback );
	*
	* // ...
	*
	* // Invoke the ns.nullaryAddonDispatch function with strided array arguments:
	* f( 2, 'generic', [ 1, 2 ], 1, 0 );
	*/
	nullaryAddonDispatch: typeof nullaryAddonDispatch;

	/**
	* Returns a typed array view having the same data type as a provided input typed array and starting at a specified index offset.
	*
	* @param x - input array
	* @param offset - starting index
	* @returns typed array view
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( 10 );
	*
	* var out = ns.offsetView( x, 0 );
	* // returns <Float64Array>
	*
	* var bool = ( out.buffer === x.buffer );
	*/
	offsetView: typeof offsetView;

	/**
	* Applies a quaternary callback to strided input array elements and assigns results to elements in a strided output array.
	*
	* @param arrays - array-like object containing four input arrays and one output array
	* @param shape - array-like object containing a single element, the number of indexed elements
	* @param strides - array-like object containing the stride lengths for the input and output arrays
	* @param fcn - quaternary callback
	*
	* @example
	* var add = require( '@stdlib/number/float64/base/add4' );
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var u = new Float64Array( x.length );
	*
	* var shape = [ x.length ];
	* var strides = [ 1, 1, 1, 1, 1 ];
	*
	* ns.quaternary( [ x, y, z, w, u ], shape, strides, add );
	*
	* console.log( u );
	* // => <Float64Array>[ 4.0, 8.0, 12.0, 16.0, 20.0 ]
	*
	* @example
	* var add = require( '@stdlib/number/float64/base/add4' );
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var u = new Float64Array( x.length );
	*
	* var shape = [ x.length ];
	* var strides = [ 1, 1, 1, 1, 1 ];
	* var offsets = [ 0, 0, 0, 0, 0 ];
	*
	* ns.quaternary.ndarray( [ x, y, z, w, u ], shape, strides, offsets, add );
	*
	* console.log( u );
	* // => <Float64Array>[ 4.0, 8.0, 12.0, 16.0, 20.0 ]
	*/
	quaternary: typeof quaternary;

	/**
	* Applies a quinary callback to strided input array elements and assigns results to elements in a strided output array.
	*
	* @param arrays - array-like object containing five input arrays and one output array
	* @param shape - array-like object containing a single element, the number of indexed elements
	* @param strides - array-like object containing the stride lengths for the input and output arrays
	* @param fcn - quinary callback
	*
	* @example
	* var add = require( '@stdlib/number/float64/base/add5' );
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var u = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var v = new Float64Array( x.length );
	*
	* var shape = [ x.length ];
	* var strides = [ 1, 1, 1, 1, 1, 1 ];
	*
	* ns.quinary( [ x, y, z, w, u, v ], shape, strides, add );
	*
	* console.log( v );
	* // => <Float64Array>[ 5.0, 10.0, 15.0, 20.0, 25.0 ]
	*
	* @example
	* var add = require( '@stdlib/number/float64/base/add5' );
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var u = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var v = new Float64Array( x.length );
	*
	* var shape = [ x.length ];
	* var strides = [ 1, 1, 1, 1, 1, 1 ];
	* var offsets = [ 0, 0, 0, 0, 0, 0 ];
	*
	* ns.quinary.ndarray( [ x, y, z, w, u, v ], shape, strides, offsets, add );
	*
	* console.log( v );
	* // => <Float64Array>[ 5.0, 10.0, 15.0, 20.0, 25.0 ]
	*/
	quinary: typeof quinary;

	/**
	* Copies elements from an input strided DataView to elements in an output strided array.
	*
	* @param N - number of indexed elements
	* @param view - output DataView
	* @param strideView - `view` stride length (in bytes)
	* @param out - output array
	* @param strideOut - `out` stride length
	* @param littleEndian - boolean indicating whether the data is stored in little-endian format
	* @returns output DataView
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var DataView = require( '@stdlib/array/dataview' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var view = new DataView( x.buffer );
	*
	* var y = new Float64Array( x.length );
	* var out = ns.readDataView( x.length, view, 8, y, 1, true );
	* // e.g., returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
	*
	* var bool = ( out === y );
	* // returns true
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var DataView = require( '@stdlib/array/dataview' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var view = new DataView( x.buffer );
	*
	* var y = new Float64Array( x.length );
	* var out = ns.readDataView.ndarray( x.length, view, 8, 0, y, 1, 0, true );
	* // e.g., returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
	*
	* var bool = ( out === y );
	* // returns true
	*/
	readDataView: typeof readDataView;

	/**
	* Reinterprets a `BooleanArray` as a `Uint8Array`.
	*
	* @param x - input array
	* @param offset - starting index
	* @returns `Uint8Array` view
	*
	* @example
	* var BooleanArray = require( '@stdlib/array/bool' );
	*
	* var x = new BooleanArray( 10 );
	*
	* var out = ns.reinterpretBoolean( x, 0 );
	* // returns <Uint8Array>
	*
	* var bool = ( out.buffer === x.buffer );
	* // returns true
	*/
	reinterpretBoolean: typeof reinterpretBoolean;

	/**
	* Reinterprets a `Complex128Array` as a `Float64Array`.
	*
	* @param x - input array
	* @param offset - starting index
	* @returns `Float64Array` view
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( 10 );
	*
	* var out = ns.reinterpretComplex( x, 0 );
	* // returns <Float64Array>
	*
	* var bool = ( out.buffer === x.buffer );
	*/
	reinterpretComplex: typeof reinterpretComplex;

	/**
	* Reinterprets a `Complex64Array` as a `Float32Array`.
	*
	* @param x - input array
	* @param offset - starting index
	* @returns `Float32Array` view
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var x = new Complex64Array( 10 );
	*
	* var out = ns.reinterpretComplex64( x, 0 );
	* // returns <Float32Array>
	*
	* var bool = ( out.buffer === x.buffer );
	*/
	reinterpretComplex64: typeof reinterpretComplex64;

	/**
	* Reinterprets a `Complex128Array` as a `Float64Array`.
	*
	* @param x - input array
	* @param offset - starting index
	* @returns `Float64Array` view
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( 10 );
	*
	* var out = ns.reinterpretComplex128( x, 0 );
	* // returns <Float64Array>
	*
	* var bool = ( out.buffer === x.buffer );
	*/
	reinterpretComplex128: typeof reinterpretComplex128;

	/**
	* Applies a unary function to a single-precision floating-point strided input array and assigns results to a single-precision floating-point strided output array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param fcn - unary function to apply
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* function identity( x ) {
	*     return x;
	* }
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smap( x.length, x, 1, y, 1, identity );
	* // y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* function identity( x ) {
	*     return x;
	* }
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smap.ndarray( x.length, x, 1, 0, y, 1, 0, identity );
	* // y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	smap: typeof smap;

	/**
	* Applies a binary function to single-precision floating-point strided input arrays and assigns results to a single-precision floating-point strided output array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - input array
	* @param strideY - `y` stride length
	* @param z - destination array
	* @param strideZ - `z` stride length
	* @param fcn - binary function to apply
	* @returns `z`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var addf = require( '@stdlib/number/float32/base/add' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smap2( x.length, x, 1, y, 1, z, 1, addf );
	* // z => <Float32Array>[ 2.0, 4.0, 6.0, 8.0, 10.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var addf = require( '@stdlib/number/float32/base/add' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, addf );
	* // z => <Float32Array>[ 2.0, 4.0, 6.0, 8.0, 10.0 ]
	*/
	smap2: typeof smap2;

	/**
	* Applies a unary function to a single-precision floating-point strided input array according to a strided mask array and assigns results to a single-precision floating-point strided output array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param fcn - unary function to apply
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* function identity( x ) {
	*     return x;
	* }
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smskmap( x.length, x, 1, m, 1, y, 1, identity );
	* // y => <Float32Array>[ 1.0, 2.0, 0.0, 4.0, 5.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* function identity( x ) {
	*     return x;
	* }
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smskmap.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0, identity );
	* // y => <Float32Array>[ 1.0, 2.0, 0.0, 4.0, 5.0 ]
	*/
	smskmap: typeof smskmap;

	/**
	* Applies a binary function to single-precision floating-point strided input arrays according to a strided mask array and assigns results to a single-precision floating-point strided output array
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - input array
	* @param strideY - `y` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param z - destination array
	* @param strideZ - `z` stride length
	* @param fcn - binary function to apply
	* @returns `z`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	* var addf = require( '@stdlib/number/float32/base/add' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* ns.smskmap2( x.length, x, 1, m, 1, y, 1, addf );
	* // z => <Float32Array>[ 2.0, 4.0, 0.0, 8.0, 10.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	* var addf = require( '@stdlib/number/float32/base/add' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* ns.smskmap2.ndarray( x.length, x, 1, 0, y, 1, 0, m, 1, 0, z, 1, 0, addf );
	* // z => <Float32Array>[ 2.0, 4.0, 0.0, 8.0, 10.0 ]
	*/
	smskmap2: typeof smskmap2;

	/**
	* Returns the index offset which specifies the location of the first indexed value in a strided array.
	*
	* @param N - number of indexed elements
	* @param stride - index increment
	* @returns offset
	*
	* @example
	* var offset = ns.stride2offset( 10, -10 );
	* // returns 90
	*/
	stride2offset: typeof stride2offset;

	/**
	* Converts a strided array and associated metadata to an object likely to have the same "shape".
	*
	* ## Notes
	*
	* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding strided array metadata to ensure that internal functions operating on strided arrays are provided consistent argument "shapes".
	*
	* -   The returned object has the following properties:
	*
	*     -   **data**: reference to the input array.
	*     -   **dtype**: array data type.
	*     -   **length**: number of indexed elements.
	*     -   **stride**: index increment.
	*     -   **offset**: starting index.
	*     -   **accessorProtocol**: boolean indicating whether the input array uses accessors for getting and setting elements.
	*     -   **accessors**: a two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - index increment
	* @param offset - index offset
	* @returns object containing strided array data
	*
	* @example
	* var x = {
	*     '0': 1,
	*     '1': 2,
	*     '2': 3,
	*     '4': 4,
	*     'length': 4
	* };
	* var obj = ns.strided2object( 4, x, 1, 0 );
	* // returns {...}
	*
	* var bool = obj.accessorProtocol;
	* // returns false
	*
	* var fcns = obj.accessors;
	* // returns [ <Function>, <Function> ]
	*
	* var v = fcns[ 0 ]( x.data, 2 );
	* // returns 3
	*/
	strided2object: typeof strided2object;

	/**
	* Applies a ternary callback to strided input array elements and assigns results to elements in a strided output array.
	*
	* @param arrays - array-like object containing three input arrays and one output array
	* @param shape - array-like object containing a single element, the number of indexed elements
	* @param strides - array-like object containing the stride lengths for the input and output arrays
	* @param fcn - ternary callback
	*
	* @example
	* var add = require( '@stdlib/number/float64/base/add3' );
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var w = new Float64Array( x.length );
	*
	* var shape = [ x.length ];
	* var strides = [ 1, 1, 1, 1 ];
	*
	* ns.ternary( [ x, y, z, w ], shape, strides, add );
	*
	* console.log( w );
	* // => <Float64Array>[ 3.0, 6.0, 9.0, 12.0, 15.0 ]
	*
	* @example
	* var add = require( '@stdlib/number/float64/base/add3' );
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var w = new Float64Array( x.length );
	*
	* var shape = [ x.length ];
	* var strides = [ 1, 1, 1, 1 ];
	* var offsets = [ 0, 0, 0, 0 ];
	*
	* ns.ternary.ndarray( [ x, y, z, w ], shape, strides, offsets, add );
	*
	* console.log( w );
	* // => <Float64Array>[ 3.0, 6.0, 9.0, 12.0, 15.0 ]
	*/
	ternary: typeof ternary;

	/**
	* Applies a unary callback to elements in a strided input array and assigns results to elements in a strided output array.
	*
	* @param arrays - array-like object containing one input array and one output array
	* @param shape - array-like object containing a single element, the number of indexed elements
	* @param strides - array-like object containing the stride lengths for the input and output arrays
	* @param fcn - unary callback
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( x.length );
	*
	* var shape = [ x.length ];
	* var strides = [ 1, 1 ];
	*
	* ns.unary( [ x, y ], shape, strides, scale );
	*
	* console.log( y );
	* // => <Float64Array>[ 10.0, 20.0, 30.0, 40.0, 50.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( x.length );
	*
	* var shape = [ x.length ];
	* var strides = [ 1, 1 ];
	* var offsets = [ 0, 0 ];
	*
	* ns.unary.ndarray( [ x, y ], shape, strides, offsets, scale );
	*
	* console.log( y );
	* // => <Float64Array>[ 10.0, 20.0, 30.0, 40.0, 50.0 ]
	*/
	unary: typeof unary;

	/**
	* Returns a function which dispatches to a native add-on applying a unary function to an input strided array.
	*
	* @param addon - add-on function
	* @param fallback - fallback function
	* @returns dispatch function
	*
	* @example
	* function addon( N, dtypeX, x, strideX, dtypeY, y, strideY ) {
	*     // Call into native add-on...
	* }
	*
	* function fallback( N, dtypeX, x, strideX, dtypeY, y, strideY ) {
	*     // Fallback JavaScript implementation...
	* }
	*
	* // Create a ns.unaryAddonDispatch function:
	* var f = ns.unaryAddonDispatch( addon, fallback );
	*
	* // ...
	*
	* // Invoke the ns.unaryAddonDispatch function with strided array arguments:
	* f( 2, 'generic', [ 1, 2 ], 1, 'generic', [ 0, 0 ], 1 );
	*
	* @example
	* function addon( N, dtypeX, x, strideX, dtypeY, y, strideY ) {
	*     // Call into native add-on...
	* }
	*
	* function fallback( N, dtypeX, x, strideX, offsetX, dtypeY, y, strideY, offsetY ) {
	*     // Fallback JavaScript implementation...
	* }
	*
	* // Create a ns.unaryAddonDispatch function:
	* var f = ns.unaryAddonDispatch.ndarray( addon, fallback );
	*
	* // ...
	*
	* // Invoke the ns.unaryAddonDispatch function with strided array arguments:
	* f( 2, 'generic', [ 1, 2 ], 1, 0, 'generic', [ 0, 0 ], 1, 0 );
	*/
	unaryAddonDispatch: typeof unaryAddonDispatch;

	/**
	* Applies a unary function to each element retrieved from a strided input array according to a callback function and assigns results to a strided output array.
	*
	* @param arrays - array-like object containing one input array and one output array
	* @param shape - array-like object containing a single element, the number of indexed elements
	* @param strides - array-like object containing the stride lengths for the input and output arrays
	* @param fcn - unary function to apply to callback return values
	* @param clbk - callback function
	* @param thisArg - callback execution context
	*
	* @example
	* var abs = require( '@stdlib/math/base/special/abs' );
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* var shape = [ x.length ];
	* var strides = [ 1, 1 ];
	*
	* ns.unaryBy( [ x, y ], shape, strides, abs, accessor );
	* // y => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
	*
	* @example
	* var abs = require( '@stdlib/math/base/special/abs' );
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* var shape = [ x.length ];
	* var strides = [ 1, 1 ];
	* var offsets = [ 0, 0 ];
	*
	* ns.unaryBy.ndarray( [ x, y ], shape, strides, offsets, abs, accessor );
	* // y => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
	*/
	unaryBy: typeof unaryBy;

	/**
	* Generates a list of unary interface signatures from strided array data types.
	*
	* ## Notes
	*
	* -   The function returns a strided array having a stride length of `2` (i.e., every `2` elements define a unary interface signature).
	* -   For each signature (i.e., set of two consecutive non-overlapping strided array elements), the first element is the input data type and the second element is the return data type.
	* -   All signatures follow type promotion rules.
	*
	* @param dtypes1 - list of supported data types for the first argument
	* @param dtypes2 - list of supported data types for the output argument
	* @param options - options
	* @param options.enums - boolean flag indicating whether to return signatures as a list of enumeration constants
	* @throws must provide recognized data types
	* @returns strided array containing unary interface signatures
	*
	* @example
	* var dtypes = [
	*     'float64',
	*     'float32',
	*     'int32',
	*     'uint8'
	* ];
	*
	* var sigs = ns.unaryDtypeSignatures( dtypes, dtypes );
	* // e.g., returns [ 'float32', 'float32', ... ]
	*/
	unaryDtypeSignatures: typeof unaryDtypeSignatures;

	/**
	* Assigns callbacks to unary interfaces according to type promotion rules.
	*
	* ## Notes
	*
	* -   The function assumes that the provided signature array has the following properties:
	*
	*     -   a strided array having a stride length of `2` (i.e., every `2` elements define a unary interface signature).
	*     -   for each signature (i.e., set of two consecutive non-overlapping strided array elements), the first element is the input data type and the second element is the return data type.
	*     -   all signatures follow type promotion rules.
	*
	* @param table - callback table
	* @param table.default - default callback
	* @param table.complex64 - callback for single-precision complex floating-point numbers
	* @param table.complex128 - callback for double-precision complex floating-point numbers
	* @param signatures - strided array containing unary interface signatures
	* @returns list of callbacks
	*
	* @example
	* var signatures = require( './../../../base/unary-dtype-signatures' );
	* var identity = require( '@stdlib/number/float64/base/identity' );
	* var cidentity = require( '@stdlib/complex/float64/base/identity' );
	* var cidentityf = require( '@stdlib/complex/float32/base/identity' );
	*
	* var dtypes = [
	*     'float64',
	*     'float32',
	*     'int32',
	*     'uint8'
	* ];
	*
	* var sigs = signatures( dtypes, dtypes );
	* // returns [...]
	*
	* var table = {
	*     'default': identity,
	*     'complex64': cidentityf,
	*     'complex128': cidentity
	* };
	*
	* var list = ns.unarySignatureCallbacks( table, sigs );
	* // returns [...]
	*/
	unarySignatureCallbacks: typeof unarySignatureCallbacks;

	/**
	* Copies elements from an input strided array to elements in a strided DataView.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param view - output DataView
	* @param strideView - `view` stride length (in bytes)
	* @param littleEndian - boolean indicating whether to store the data in little-endian format
	* @returns output DataView
	*
	* @example
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	* var DataView = require( '@stdlib/array/dataview' );
	*
	* var x = [ 1.0, 2.0, 3.0, 4.0 ];
	*
	* var buf = new ArrayBuffer( 32 );
	* var view = new DataView( buf );
	*
	* var out = ns.writeDataView( 4, x, 1, view, 8, true );
	* // returns <DataView>
	*
	* var bool = ( out === view );
	* // returns true
	*
	* var v = view.getFloat64( 0, true );
	* // returns 1.0
	*
	* @example
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	* var DataView = require( '@stdlib/array/dataview' );
	*
	* var x = [ 1.0, 2.0, 3.0, 4.0 ];
	*
	* var buf = new ArrayBuffer( 32 );
	* var view = new DataView( buf );
	*
	* var out = ns.writeDataView.ndarray( 4, x, 1, 0, view, 8, 0, true );
	* // returns <DataView>
	*
	* var bool = ( out === view );
	* // returns true
	*
	* var v = view.getFloat64( 0, true );
	* // returns 1.0
	*/
	writeDataView: typeof writeDataView;

	/**
	* Applies a unary function to a double-precision complex floating-point strided input array and assigns results to a double-precision complex floating-point strided output array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param fcn - unary function to apply
	* @returns `y`
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	*
	* function scale( x ) {
	*     var re = real( x );
	*     var im = imag( x );
	*     return new Complex128( re*10.0, im*10.0 );
	* }
	*
	* var x = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0 ] );
	* var y = new Complex128Array( x.length );
	*
	* ns.zmap( x.length, x, 1, y, 1, scale );
	*
	* var v = y.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( v );
	* // returns 10.0
	*
	* var im = imag( v );
	* // returns 10.0
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	*
	* function scale( x ) {
	*     var re = real( x );
	*     var im = imag( x );
	*     return new Complex128( re*10.0, im*10.0 );
	* }
	*
	* var x = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0 ] );
	* var y = new Complex128Array( x.length );
	*
	* ns.zmap.ndarray( x.length, x, 1, 0, y, 1, 0, scale );
	*
	* var v = y.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( v );
	* // returns 10.0
	*
	* var im = imag( v );
	* // returns 10.0
	*/
	zmap: typeof zmap;
}

/**
* Base strided.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
