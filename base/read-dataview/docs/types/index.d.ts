/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection, AccessorArrayLike } from '@stdlib/types/array';

/**
* Interface describing `readDataView`.
*/
interface Routine {
	/**
	* Copies elements from an input strided DataView to elements in an output strided array.
	*
	* @param N - number of indexed elements
	* @param view - output DataView
	* @param strideView - `view` stride length (in bytes)
	* @param out - output array
	* @param strideOut - `out` stride length
	* @param littleEndian - boolean indicating whether the data is stored in little-endian format
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var DataView = require( '@stdlib/array/dataview' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var view = new DataView( x.buffer );
	*
	* var y = new Float64Array( x.length );
	* var out = readDataView( y.length, view, 8, y, 1, true );
	* // e.g., returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
	*
	* var bool = ( out === y );
	* // returns true
	*/
	<T extends Collection | AccessorArrayLike<any>>( N: number, view: DataView, strideView: number, out: T, strideOut: number, littleEndian: boolean ): T;

	/**
	* Copies elements from an input strided DataView to elements in an output strided array.
	*
	* @param N - number of indexed elements
	* @param view - output DataView
	* @param strideView - `view` stride length (in bytes)
	* @param offsetView - starting `view` index (in bytes)
	* @param out - output array
	* @param strideOut - `out` stride length
	* @param offsetOut - starting `out` index
	* @param littleEndian - boolean indicating whether the data is stored in little-endian format
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var DataView = require( '@stdlib/array/dataview' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var view = new DataView( x.buffer );
	*
	* var y = new Float64Array( x.length );
	* var out = readDataView.ndarray( y.length, view, 8, 0, y, 1, 0, true );
	* // e.g., returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
	*
	* var bool = ( out === y );
	* // returns true
	*/
	ndarray<T extends Collection | AccessorArrayLike<any>>( N: number, view: DataView, strideView: number, offsetView: number, out: T, strideOut: number, offsetOut: number, littleEndian: boolean ): T;
}

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
* var out = readDataView( y.length, view, 8, y, 1, true );
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
* var out = readDataView.ndarray( y.length, view, 8, 0, y, 1, 0, true );
* // e.g., returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
*
* var bool = ( out === y );
* // returns true
*/
declare var readDataView: Routine;


// EXPORTS //

export = readDataView;
