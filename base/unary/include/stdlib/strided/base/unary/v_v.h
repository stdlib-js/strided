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

#ifndef STDLIB_STRIDED_BASE_UNARY_V_V_H
#define STDLIB_STRIDED_BASE_UNARY_V_V_H

#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Applies a unary callback accepting and returning unsigned 64-bit integers to an unsigned 64-bit integer strided input array and assigns results to elements in an unsigned 64-bit integer strided output array.
*/
void stdlib_strided_v_v( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_STRIDED_BASE_UNARY_V_V_H
