/**
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

#include "stdlib/strided/base/smskmap2.h"
#include "stdlib/strided/base/stride2offset.h"
#include <stdint.h>

/**
* Applies a binary function to single-precision floating-point strided input arrays according to a strided mask array and assigns results to a single-precision floating-point strided output array.
*
* @param N           number of indexed elements
* @param X           input array
* @param strideX     X stride length
* @param Y           input array
* @param strideY     Y stride length
* @param Mask        mask array
* @param strideMask  Mask stride length
* @param Z           destination array
* @param strideZ     Z stride length
* @param fcn         binary function to apply
*
* @example
* #include "stdlib/strided/base/smskmap2.h"
* #include <stdint.h>
*
* static float addf( const float x, const float y ) {
*     return x + y;
* }
*
* float X[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f };
* float Y[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f };
* float Z[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };
* uint8_t M[] = { 0, 0, 1, 0, 0, 1 };
*
* int64_t N = 6;
*
* stdlib_strided_smskmap2( N, X, 1, Y, 1, M, 1, Z, 1, addf );
*/
void stdlib_strided_smskmap2( const int64_t N, const float *X, const int64_t strideX, const float *Y, const int64_t strideY, const uint8_t *Mask, const int64_t strideMask, float *Z, const int64_t strideZ, float (*fcn)( float, float ) ) {
	int64_t ix;
	int64_t iy;
	int64_t iz;
	int64_t im;
	int64_t i;
	if ( N <= 0 ) {
		return;
	}
	ix = stdlib_strided_stride2offset( N, strideX );
	iy = stdlib_strided_stride2offset( N, strideY );
	iz = stdlib_strided_stride2offset( N, strideZ );
	im = stdlib_strided_stride2offset( N, strideMask );
	for ( i = 0; i < N; i++ ) {
		if ( Mask[ im ] == 0 ) {
			Z[ iz ] = fcn( X[ ix ], Y[ iy ] );
		}
		ix += strideX;
		iy += strideY;
		iz += strideZ;
		im += strideMask;
	}
	return;
}
