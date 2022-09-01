/*
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

import smap = require( './index' );

/**
* Unary callback.
*
* @param x - input value
* @returns result
*/
function unary( x: number ): number {
	return x;
}


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	smap( x.length, x, 1, y, 1, unary ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	smap( '10', x, 1, y, 1, unary ); // $ExpectError
	smap( true, x, 1, y, 1, unary ); // $ExpectError
	smap( false, x, 1, y, 1, unary ); // $ExpectError
	smap( null, x, 1, y, 1, unary ); // $ExpectError
	smap( undefined, x, 1, y, 1, unary ); // $ExpectError
	smap( [], x, 1, y, 1, unary ); // $ExpectError
	smap( {}, x, 1, y, 1, unary ); // $ExpectError
	smap( ( x: number ): number => x, x, 1, y, 1, unary ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	smap( x.length, 10, 1, y, 1, unary ); // $ExpectError
	smap( x.length, '10', 1, y, 1, unary ); // $ExpectError
	smap( x.length, true, 1, y, 1, unary ); // $ExpectError
	smap( x.length, false, 1, y, 1, unary ); // $ExpectError
	smap( x.length, null, 1, y, 1, unary ); // $ExpectError
	smap( x.length, undefined, 1, y, 1, unary ); // $ExpectError
	smap( x.length, [ '1' ], 1, y, 1, unary ); // $ExpectError
	smap( x.length, {}, 1, y, 1, unary ); // $ExpectError
	smap( x.length, ( x: number ): number => x, 1, y, 1, unary ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	smap( x.length, x, '10', y, 1, unary ); // $ExpectError
	smap( x.length, x, true, y, 1, unary ); // $ExpectError
	smap( x.length, x, false, y, 1, unary ); // $ExpectError
	smap( x.length, x, null, y, 1, unary ); // $ExpectError
	smap( x.length, x, undefined, y, 1, unary ); // $ExpectError
	smap( x.length, x, [], y, 1, unary ); // $ExpectError
	smap( x.length, x, {}, y, 1, unary ); // $ExpectError
	smap( x.length, x, ( x: number ): number => x, y, 1, unary ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	smap( x.length, x, 1, 10, 1, unary ); // $ExpectError
	smap( x.length, x, 1, '10', 1, unary ); // $ExpectError
	smap( x.length, x, 1, true, 1, unary ); // $ExpectError
	smap( x.length, x, 1, false, 1, unary ); // $ExpectError
	smap( x.length, x, 1, null, 1, unary ); // $ExpectError
	smap( x.length, x, 1, undefined, 1, unary ); // $ExpectError
	smap( x.length, x, 1, [ '1' ], 1, unary ); // $ExpectError
	smap( x.length, x, 1, {}, 1, unary ); // $ExpectError
	smap( x.length, x, 1, ( x: number ): number => x, 1, unary ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	smap( x.length, x, 1, y, '10', unary ); // $ExpectError
	smap( x.length, x, 1, y, true, unary ); // $ExpectError
	smap( x.length, x, 1, y, false, unary ); // $ExpectError
	smap( x.length, x, 1, y, null, unary ); // $ExpectError
	smap( x.length, x, 1, y, undefined, unary ); // $ExpectError
	smap( x.length, x, 1, y, [], unary ); // $ExpectError
	smap( x.length, x, 1, y, {}, unary ); // $ExpectError
	smap( x.length, x, 1, y, ( x: number ): number => x, unary ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a unary function...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	smap( x.length, x, 1, y, 1, '10' ); // $ExpectError
	smap( x.length, x, 1, y, 1, 0 ); // $ExpectError
	smap( x.length, x, 1, y, 1, true ); // $ExpectError
	smap( x.length, x, 1, y, 1, false ); // $ExpectError
	smap( x.length, x, 1, y, 1, null ); // $ExpectError
	smap( x.length, x, 1, y, 1, undefined ); // $ExpectError
	smap( x.length, x, 1, y, 1, [] ); // $ExpectError
	smap( x.length, x, 1, y, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	smap(); // $ExpectError
	smap( x.length ); // $ExpectError
	smap( x.length, x ); // $ExpectError
	smap( x.length, x, 1 ); // $ExpectError
	smap( x.length, x, 1, y ); // $ExpectError
	smap( x.length, x, 1, y, 1 ); // $ExpectError
	smap( x.length, x, 1, y, 1, unary, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	smap.ndarray( x.length, x, 1, 0, y, 1, 0, unary ); // $ExpectType Float32Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	smap.ndarray( '10', x, 1, 0, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( true, x, 1, 0, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( false, x, 1, 0, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( null, x, 1, 0, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( undefined, x, 1, 0, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( [], x, 1, 0, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( {}, x, 1, 0, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0, unary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	smap.ndarray( x.length, 10, 1, 0, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, '10', 1, 0, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, true, 1, 0, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, false, 1, 0, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, null, 1, 0, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, undefined, 1, 0, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, [ '1' ], 1, 0, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, {}, 1, 0, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, ( x: number ): number => x, 1, 0, y, 1, 0, unary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	smap.ndarray( x.length, x, '10', 0, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, true, 0, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, false, 0, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, null, 0, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, undefined, 0, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, [], 0, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, {}, 0, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0, unary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	smap.ndarray( x.length, x, 1, '10', y, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, true, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, false, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, null, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, undefined, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, [], y, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, {}, y, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0, unary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	smap.ndarray( x.length, x, 1, 0, 10, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, '10', 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, true, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, false, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, null, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, undefined, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, [ '1' ], 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, {}, 1, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, ( x: number ): number => x, 1, 0, unary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	smap.ndarray( x.length, x, 1, 0, y, '10', 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, true, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, false, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, null, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, undefined, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, [], 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, {}, 0, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0, unary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	smap.ndarray( x.length, x, 1, 0, y, 1, '10', unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, 1, true, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, 1, false, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, 1, null, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, 1, undefined, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, 1, [], unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, 1, {}, unary ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x, unary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a unary function...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	smap.ndarray( x.length, x, 1, 0, y, 1, 0, '10' ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, 1, 0, 0 ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, 1, 0, true ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, 1, 0, false ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, 1, 0, null ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, 1, 0, undefined ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, 1, 0, [] ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, 1, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	smap.ndarray(); // $ExpectError
	smap.ndarray( x.length ); // $ExpectError
	smap.ndarray( x.length, x ); // $ExpectError
	smap.ndarray( x.length, x, 1 ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0 ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectError
	smap.ndarray( x.length, x, 1, 0, y, 1, 0, unary, 10 ); // $ExpectError
}
