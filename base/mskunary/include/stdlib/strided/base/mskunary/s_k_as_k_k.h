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

#ifndef STDLIB_STRIDED_BASE_MSKUNARY_S_K_AS_K_K_H
#define STDLIB_STRIDED_BASE_MSKUNARY_S_K_AS_K_K_H

#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Applies a unary callback accepting and returning signed 16-bit integers to a signed 8-bit integer strided input array and assigns results to elements in a signed 16-bit integer strided output array.
*/
void stdlib_strided_mask_s_k_as_k_k( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_STRIDED_BASE_MSKUNARY_S_K_AS_K_K_H
