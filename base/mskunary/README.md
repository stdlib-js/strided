<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# mskunary

> Apply a unary callback to elements in a strided input array according to elements in a strided mask array and assign results to elements in a strided output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var mskunary = require( '@stdlib/strided/base/mskunary' );
```

#### mskunary( arrays, shape, strides, fcn )

Applies a unary callback to elements in a strided input array according to elements in a strided mask array and assigns results to elements in a strided output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var abs = require( '@stdlib/math/base/special/abs' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
var mask = new Uint8Array( [ 0, 0, 0, 1, 0, 0, 0, 1 ] );

// Compute the absolute values in-place:
mskunary( [ x, mask, x ], [ x.length ], [ 1, 1, 1 ], abs );
// x => <Float64Array>[ 2.0, 1.0, 3.0, -5.0, 4.0, 0.0, 1.0, -3.0 ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing one strided input array, a strided mask array, and one strided output array.
-   **shape**: array-like object containing a single element, the number of indexed elements.
-   **strides**: array-like object containing the stride lengths for the strided arrays.
-   **fcn**: unary function to apply.

The `shape` and `strides` parameters determine which elements in the strided arrays are accessed at runtime. For example, to index every other value in the strided input array and to index the first `N` elements of the strided output array in reverse order,

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var abs = require( '@stdlib/math/base/special/abs' );

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var mask = new Uint8Array( [ 0, 1, 0, 0, 0, 0 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

mskunary( [ x, mask, y ], [ 3 ], [ 2, 1, -1 ], abs );
// y => <Float64Array>[ 5.0, 0.0, 1.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var abs = require( '@stdlib/math/base/special/abs' );

// Initial arrays...
var x0 = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var m0 = new Uint8Array( [ 0, 0, 0, 0, 0, 1 ] );
var y0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var m1 = new Uint8Array( m0.buffer, m0.BYTES_PER_ELEMENT*3 ); // start at 4th element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

mskunary( [ x1, m1, y1 ], [ 3 ], [ -2, 1, 1 ], abs );
// y0 => <Float64Array>[ 0.0, 0.0, 0.0, 6.0, 4.0, 0.0 ]
```

#### mskunary.ndarray( arrays, shape, strides, offsets, fcn )

Applies a unary callback to elements in a strided input array according to elements in a strided mask array and assigns results to elements in a strided output array using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var abs = require( '@stdlib/math/base/special/abs' );

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

mskunary.ndarray( [ x, mask, y ], [ x.length ], [ 1, 1, 1 ], [ 0, 0, 0 ], abs );
// y => <Float64Array>[ 1.0, 2.0, 0.0, 4.0, 5.0 ]
```

The function accepts the following additional arguments:

-   **offsets**: array-like object containing the starting indices (i.e., index offsets) for the strided arrays.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsets` parameter supports indexing semantics based on starting indices. For example, to index every other value in the strided input array starting from the second value and to index the last `N` elements in the strided output array,

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var abs = require( '@stdlib/math/base/special/abs' );

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var mask = new Uint8Array( [ 0, 1, 0, 0, 0, 0 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

mskunary.ndarray( [ x, mask, y ], [ 3 ], [ 2, 1, -1 ], [ 1, 0, y.length-1 ], abs );
// y => <Float64Array>[ 0.0, 0.0, 0.0, 6.0, 0.0, 2.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var bernoulli = require( '@stdlib/random/base/bernoulli' ).factory;
var filledarray = require( '@stdlib/array/filled' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var mskunary = require( '@stdlib/strided/base/mskunary' );

function add10( x ) {
    return x + 10;
}

var N = 10;

var x = filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) );
console.log( x );

var m = filledarrayBy( N, 'generic', bernoulli( 0.5 ) );
console.log( m );

var y = filledarray( 0.0, N, 'generic' );
console.log( y );

var shape = [ N ];
var strides = [ 1, 1, -1 ];
var offsets = [ 0, 0, N-1 ];

mskunary.ndarray( [ x, m, y ], shape, strides, offsets, add10 );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

Character codes for data types:

-   **d**: `float64` (double-precision floating-point number).
-   **f**: `float32` (single-precision floating-point number).
-   **c**: `complex64` (single-precision floating-point complex number).
-   **z**: `complex128` (double-precision floating-point complex number).
-   **s**: `int8` (signed 8-bit integer).
-   **b**: `uint8` (unsigned 8-bit integer).
-   **k**: `int16` (signed 16-bit integer).
-   **t**: `uint16` (unsigned 16-bit integer).
-   **i**: `int32` (signed 32-bit integer).
-   **u**: `uint32` (unsigned 32-bit integer).
-   **l**: `int64` (signed 64-bit integer).
-   **v**: `uint64` (unsigned 64-bit integer).
-   **x**: `bool` (boolean).

Function name suffix naming convention:

```text
stdlib_strided_mask_<input_data_type>_<output_data_type>[_as_<callback_arg_data_type>_<callback_return_data_type>]
```

For example,

```c
void stdlib_strided_mask_d_d(...) {...}
```

is a function which accepts one double-precision floating-point strided input array and one double-precision floating-point strided output array. In other words, the suffix encodes the function type signature.

To support callbacks whose input arguments and/or return values are of a different data type than the strided input and/or output array data types, the naming convention supports appending an `as` suffix. For example,

```c
void stdlib_strided_mask_f_f_as_d_d(...) {...}
```

is a function which accepts one single-precision floating-point strided input array and one single-precision floating-point strided output array. However, the callback accepts and returns double-precision floating-point numbers. Accordingly, the input and output values need to be cast using the following conversion sequence

```c
// Convert each input array element to double-precision:
double dxi = (double)fx[ i ];

// Evaluate the callback:
double dyi = f( dxi );

// Convert the callback return value to single-precision:
fy[ i ] = (float)dyi;
```

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/strided/base/mskunary.h"
```

<!-- NOTE: keep the following in alphabetical order -->

#### stdlib_strided_mask_b_b( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning unsigned 8-bit integers to an unsigned 8-bit integer strided input array and assigns results to elements in an unsigned 8-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 1 }; // 1 byte per uint8

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t scale( const uint8_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_b_b( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnUint8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_b_b( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_b_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning unsigned 8-bit integers to an unsigned 8-bit integer strided input array, casts the callback's unsigned 8-bit integer return value to a double-precision floating-point number, and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 8 }; // 1 byte per uint8, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t scale( const uint8_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_b_d( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnUint8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_b_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_b_d_as_d_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning double-precision floating-point numbers to an unsigned 8-bit integer strided input array and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 8 }; // 1 byte per uint8, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double scale( const double x ) {
    return x + 10.0;
}

// Apply the callback:
stdlib_strided_mask_b_d_as_d_d( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_b_d_as_d_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_b_f( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning unsigned 8-bit integers to an unsigned 8-bit integer strided input array, casts the callback's unsigned 8-bit integer return value to a single-precision floating-point number, and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per uint8, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t scale( const uint8_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_b_f( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnUint8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_b_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_b_f_as_d_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning double-precision floating-point numbers to an unsigned 8-bit integer strided input array, casts the callback's double-precision floating-point return value to a single-precision floating-point number, and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per uint8, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double scale( const double x ) {
    return x + 10.0;
}

// Apply the callback:
stdlib_strided_mask_b_f_as_d_d( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_b_f_as_d_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_b_f_as_f_f( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning single-precision floating-point numbers to an unsigned 8-bit integer strided input array, casts the callback's single-precision floating-point return value to a single-precision floating-point number, and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per uint8, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
float scale( const float x ) {
    return x + 10.0f;
}

// Apply the callback:
stdlib_strided_mask_b_f_as_f_f( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_b_f_as_f_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_b_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 32-bit integers to an unsigned 8-bit integer strided input array, casts the callback's unsigned 8-bit integer return value to a signed 32-bit integer, and assigns results to elements in a signed 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per uint8, 4 bytes per int32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t scale( const uint8_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_b_i( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnUint8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_b_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_b_i_as_i_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 32-bit integers to an unsigned 8-bit integer strided input array and assigns results to elements in a signed 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per uint8, 4 bytes per int32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int32_t scale( const int32_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_b_i_as_i_i( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_b_i_as_i_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_b_k( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning unsigned 8-bit integers to an unsigned 8-bit integer strided input array, casts the callback's unsigned 8-bit integer return value to a signed 16-bit integer, and assigns results to elements in a signed 16-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 2 }; // 1 byte per uint8, 2 bytes per int16

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t scale( const uint8_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_b_k( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnUint8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_b_k( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_b_k_as_k_k( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 16-bit integers to an unsigned 8-bit integer strided input array and assigns results to elements in a signed 16-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 2 }; // 1 byte per uint8, 2 bytes per int16

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int16_t scale( const int16_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_b_k_as_k_k( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_b_k_as_k_k( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_b_t( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning unsigned 8-bit integers to an unsigned 8-bit integer strided input array, casts the callback's unsigned 8-bit integer return value to an unsigned 16-bit integer, and assigns results to elements in an unsigned 16-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 2 }; // 1 byte per uint8, 2 bytes per uint16

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t scale( const uint8_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_b_t( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnUint8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_b_t( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_b_t_as_t_t( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning unsigned 16-bit integers to an unsigned 8-bit integer strided input array and assigns results to elements in an unsigned 16-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 2 }; // 1 byte per uint8, 2 bytes per uint16

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint16_t scale( const uint16_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_b_t_as_t_t( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnUint16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_b_t_as_t_t( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_b_u( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning unsigned 8-bit integers to an unsigned 8-bit integer strided input array, casts the callback's unsigned 8-bit integer return value to an unsigned 32-bit integer, and assigns results to elements in an unsigned 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per uint8, 4 bytes per uint32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t scale( const uint8_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_b_u( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnUint8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_b_u( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_b_u_as_u_u( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning unsigned 32-bit integers to an unsigned 8-bit integer strided input array and assigns results to elements in an unsigned 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per uint8, 4 bytes per uint32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint32_t scale( const uint32_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_b_u_as_u_u( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnUint32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_b_u_as_u_u( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_d_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning double-precision floating-point numbers to a double-precision floating-point strided input array and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 8, 1, 8 }; // 8 bytes per double, 1 byte per uint8

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double scale( const double x ) {
    return x + 10.0;
}

// Apply the callback:
stdlib_strided_mask_d_d( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_d_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_d_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting a double-precision floating-point number and returning a signed 32-bit integer to a double-precision floating-point strided input array and assigns results to elements in a signed 32-bit integer strided output array.

```c
#include <stdint.h>
#include <math.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 8, 1, 4 }; // 8 bytes per double, 1 byte per uint8, 4 bytes per int32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Apply the callback:
stdlib_strided_mask_d_i( arrays, shape, strides, (void *)lrint );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat64Int32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_d_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_d_l( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a double-precision floating-point strided input array and assigns results to elements in a signed 64-bit integer strided output array.

```c
#include <stdint.h>
#include <math.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 8, 1, 8 }; // 8 bytes per double, 1 byte per uint8, 8 bytes per int64

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Apply the callback:
stdlib_strided_mask_d_l( arrays, shape, strides, (void *)llrint );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat64Int64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_d_l( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_f_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning single-precision floating-point numbers to a single-precision floating-point strided input array, casts the callback's single-precision floating-point return value to a double-precision floating-point number, and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 4, 1, 8 }; // 4 bytes per float, 1 byte per uint8, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
float scale( const float x ) {
    return x + 10.0f;
}

// Apply the callback:
stdlib_strided_mask_f_d( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_f_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_f_d_as_d_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning double-precision floating-point numbers to a single-precision floating-point strided input array and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 4, 1, 8 }; // 4 bytes per float, 1 byte per uint8, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double scale( const double x ) {
    return x + 10.0;
}

// Apply the callback:
stdlib_strided_mask_f_d_as_d_d( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_f_d_as_d_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_f_f( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning single-precision floating-point numbers to a single-precision floating-point strided input array and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 4, 1, 4 }; // 4 bytes per float, 1 byte per uint8

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
float scale( const float x ) {
    return x + 10.0f;
}

// Apply the callback:
stdlib_strided_mask_f_f( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_f_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_f_f_as_d_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning double-precision floating-point numbers, casts the callback's double-precision floating-point return value to a single-precision floating-point number, and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 4, 1, 4 }; // 4 bytes per float, 1 byte per uint8

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double scale( const double x ) {
    return x + 10.0;
}

// Apply the callback:
stdlib_strided_mask_f_f_as_d_d( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_f_f_as_d_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_f_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting a single-precision floating-point number and returning a signed 32-bit integer to a single-precision floating-point strided input array and assigns results to elements in a signed 32-bit integer strided output array.

```c
#include <stdint.h>
#include <math.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 4, 1, 4 }; // 4 bytes per float, 1 byte per uint8, 4 bytes per int32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Apply the callback:
stdlib_strided_mask_f_i( arrays, shape, strides, (void *)lrintf );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat32Int32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_f_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_f_l( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting a single-precision floating-point number and returning a signed 64-bit integer to a single-precision floating-point strided input array and assigns results to elements in a signed 64-bit integer strided output array.

```c
#include <stdint.h>
#include <math.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 4, 1, 8 }; // 4 bytes per float, 1 byte per uint8, 8 bytes per int64

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Apply the callback:
stdlib_strided_mask_f_l( arrays, shape, strides, (void *)lrintf );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat32Int64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_f_l( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_i_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 32-bit integers to a signed 32-bit integer strided input array, casts the callback's signed 32-bit integer return value to a double-precision floating-point number, and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 4, 1, 8 }; // 4 bytes per int32, 1 byte per uint8, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int32_t scale( const int32_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_i_d( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_i_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_i_d_as_d_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning double-precision floating-point numbers to a signed 32-bit integer strided input array and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 4, 1, 8 }; // 4 bytes per int32, 1 byte per uint8, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double scale( const double x ) {
    return x + 10.0;
}

// Apply the callback:
stdlib_strided_mask_i_d_as_d_d( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_i_d_as_d_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_i_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 32-bit integers to a signed 32-bit integer strided input array and assigns results to elements in a signed 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 4, 1, 4 }; // 4 bytes per int32, 1 byte per uint8

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int32_t scale( const int32_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_i_i( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_i_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_i_u( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 32-bit integers to a signed 32-bit integer strided input array, casts the callback's signed 32-bit integer return value to an unsigned 32-bit integer, and assigns results to elements in an unsigned 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 4, 1, 4 }; // 4 bytes per int32, 1 byte per uint8, 4 bytes per uint32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int32_t abs( const int32_t x ) {
    if ( x < 0 ) {
        return -x;
    }
    return x;
}

// Apply the callback:
stdlib_strided_mask_i_u( arrays, shape, strides, (void *)abs );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_i_u( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_k_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 16-bit integers to a signed 16-bit integer strided input array, casts the callback's signed 16-bit integer return value to a double-precision floating-point number, and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 2, 1, 8 }; // 2 bytes per int16, 1 byte per uint8, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int16_t scale( const int16_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_k_d( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_k_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_k_d_as_d_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning double-precision floating-point numbers to a signed 16-bit integer strided input array and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 2, 1, 8 }; // 2 bytes per int16, 1 byte per uint8, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double scale( const double x ) {
    return x + 10.0;
}

// Apply the callback:
stdlib_strided_mask_k_d_as_d_d( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_k_d_as_d_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_k_f( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 16-bit integers to a signed 16-bit integer strided input array, casts the callback's signed 16-bit integer return value to a single-precision floating-point number, and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 2, 1, 4 }; // 2 bytes per int16, 1 byte per uint8, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int16_t scale( const int16_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_k_f( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_k_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_k_f_as_d_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning double-precision floating-point numbers to a signed 16-bit integer strided input array, casts the callback's double-precision floating-point return value to a single-precision floating-point number, and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 2, 1, 4 }; // 2 bytes per int16, 1 byte per uint8, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double scale( const double x ) {
    return x + 10.0;
}

// Apply the callback:
stdlib_strided_mask_k_f_as_d_d( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_k_f_as_d_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_k_f_as_f_f( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning single-precision floating-point numbers to a signed 16-bit integer strided input array and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 2, 1, 4 }; // 2 bytes per int16, 1 byte per uint8, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
float scale( const float x ) {
    return x + 10.0f;
}

// Apply the callback:
stdlib_strided_mask_k_f_as_f_f( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_k_f_as_f_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_k_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 16-bit integers to a signed 16-bit integer strided input array, casts the callback's signed 16-bit integer return value to a signed 32-bit integer, and assigns results to elements in a signed 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 2, 1, 4 }; // 2 bytes per int16, 1 byte per uint8, 4 bytes per int32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int16_t scale( const int16_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_k_i( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_k_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_k_i_as_i_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 32-bit integers to a signed 16-bit integer strided input array and assigns results to elements in a signed 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 2, 1, 4 }; // 2 bytes per int16, 1 byte per uint8, 4 bytes per int32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int32_t scale( const int32_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_k_i_as_i_i( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_k_i_as_i_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_k_k( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 16-bit integers to a signed 16-bit integer strided input array and assigns results to elements in a signed 16-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 2, 1, 2 }; // 2 bytes per int16, 1 byte per uint8

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int16_t scale( const int16_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_k_k( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_k_k( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_k_t( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returned signed 16-bit integers to a signed 16-bit integer strided input array, casts the callback's signed 16-bit integer return value to an unsigned 16-bit integer, and assigns results to elements in an unsigned 16-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 2, 1, 2 }; // 2 bytes per int16, 1 byte per uint8, 2 bytes per uint16

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int16_t abs( const int16_t x ) {
    if ( x < 0 ) {
        return -x;
    }
    return x;
}

// Apply the callback:
stdlib_strided_mask_k_t( arrays, shape, strides, (void *)abs );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_k_t( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_k_u( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 16-bit integers to a signed 16-bit integer strided input array, casts the callback's signed 16-bit integer return value to an unsigned 32-bit integer, and assigns results to elements in an unsigned 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 2, 1, 4 }; // 2 bytes per int16, 1 byte per uint8, 4 bytes per uint32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int16_t abs( const int16_t x ) {
    if ( x < 0 ) {
        return -x;
    }
    return x;
}

// Apply the callback:
stdlib_strided_mask_k_u( arrays, shape, strides, (void *)abs );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_k_u( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_l_l( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 64-bit integers to a signed 64-bit integer strided input array and assigns results to elements in a signed 64-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
uint8_t m[] = { 0, 1, 0 }; 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 8, 1, 8 }; // 8 bytes per int64, 1 byte per uint8

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int64_t scale( const int64_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_l_l( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_l_l( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_l_v( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 64-bit integers to a signed 64-bit integer strided input array, casts the callback's signed 64-bit integer return value to an unsigned 64-bit integer, and assigns results to elements in an unsigned 64-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
uint8_t m[] = { 0, 1, 0 }; 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 8, 1, 8 }; // 8 bytes per int64, 1 byte per uint8, 8 bytes per uint64

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int64_t abs( const int64_t x ) {
    if ( x < 0 ) {
        return -x;
    }
    return x;
}

// Apply the callback:
stdlib_strided_mask_l_v( arrays, shape, strides, (void *)abs );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_l_v( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_s_b( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 8-bit integers to a signed 8-bit integer strided input array, casts the callback's signed 8-bit integer return value to an unsigned 8-bit integer, and assigns results to elements in an unsigned 8-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 1 }; // 1 byte per int8, 1 byte per uint8, 1 byte per uint8

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int8_t abs( const int8_t x ) {
    if ( x < 0 ) {
        return -x;
    }
    return x;
}

// Apply the callback:
stdlib_strided_mask_s_b( arrays, shape, strides, (void *)abs );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_s_b( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_s_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 8-bit integers to a signed 8-bit integer strided input array, casts the callback's signed 8-bit integer return value to a double-precision floating-point number, and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 8 }; // 1 byte per int8, 1 byte per uint8, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int8_t scale( const int8_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_s_d( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_s_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_s_d_as_d_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning double-precision floating-point numbers to a signed 8-bit integer strided input array and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 8 }; // 1 byte per int8, 1 byte per uint8, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double scale( const double x ) {
    return x + 10.0;
}

// Apply the callback:
stdlib_strided_mask_s_d_as_d_d( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_s_d_as_d_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_s_f( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 8-bit integers to a signed 8-bit integer strided input array, casts the callback's signed 8-bit integer return value to a single-precision floating-point number, and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per int8, 1 byte per uint8, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int8_t scale( const int8_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_s_f( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_s_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_s_f_as_d_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning double-precision floating-point numbers to a signed 8-bit integer strided input array, casts the callback's double-precision floating-point return value to a single-precision floating-point number, and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per int8, 1 byte per uint8, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double scale( const double x ) {
    return x + 10.0;
}

// Apply the callback:
stdlib_strided_mask_s_f_as_d_d( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_s_f_as_d_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_s_f_as_f_f( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning single-precision floating-point numbers to a signed 8-bit integer strided input array and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per int8, 1 byte per uint8, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
float scale( const float x ) {
    return x + 10.0f;
}

// Apply the callback:
stdlib_strided_mask_s_f_as_f_f( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_s_f_as_f_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_s_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 8-bit integers to a signed 8-bit integer strided input array, casts the callback's signed 8-bit integer return value to a signed 32-bit integer, and assigns results to elements in a signed 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per int8, 1 byte per uint8, 4 bytes per int32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int8_t scale( const int8_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_s_i( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_s_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_s_i_as_i_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 32-bit integers to a signed 8-bit integer strided input array and assigns results to elements in a signed 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per int8, 1 byte per uint8, 4 bytes per int32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int32_t scale( const int32_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_s_i_as_i_i( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_s_i_as_i_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_s_k( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 8-bit integers to a signed 8-bit integer strided input array, casts the callback's signed 8-bit integer return value to a signed 16-bit integer, and assigns results to elements in a signed 16-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 2 }; // 1 byte per int8, 1 byte per uint8, 2 bytes per int16

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int8_t scale( const int8_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_s_k( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_s_k( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_s_k_as_k_k( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 16-bit integers to a signed 8-bit integer strided input array and assigns results to elements in a signed 16-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 2 }; // 1 byte per int8, 1 byte per uint8, 2 bytes per int16

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int16_t scale( const int16_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_s_k_as_k_k( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_s_k_as_k_k( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_s_s( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 8-bit integers to a signed 8-bit integer strided input array and assigns results to elements in a signed 8-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 1 }; // 1 byte per int8, 1 byte per uint8

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int8_t scale( const int8_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_s_s( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_s_s( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_s_t( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 8-bit integers to a signed 8-bit integer strided input array, casts the callback's signed 8-bit integer return value to an unsigned 16-bit integer, and assigns results to elements in an unsigned 16-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 2 }; // 1 byte per int8, 1 byte per uint8, 2 bytes per uint16

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int8_t abs( const int8_t x ) {
    if ( x < 0 ) {
        return -x;
    }
    return x;
}

// Apply the callback:
stdlib_strided_mask_s_t( arrays, shape, strides, (void *)abs );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_s_t( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_s_u( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 8-bit integers to a signed 8-bit integer strided input array, casts the callback's signed 8-bit integer return value to an unsigned 32-bit integer, and assigns results to elements in an unsigned 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per int8, 1 byte per uint8, 4 bytes per uint32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int8_t abs( const int8_t x ) {
    if ( x < 0 ) {
        return -x;
    }
    return x;
}

// Apply the callback:
stdlib_strided_mask_s_u( arrays, shape, strides, (void *)abs );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_s_u( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_t_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning unsigned 16-bit integers to an unsigned 16-bit integer strided input array, casts the callback's unsigned 16-bit integer return value to a double-precision floating-point number, and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 2, 1, 8 }; // 2 bytes per uint16, 1 byte per uint8, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint16_t scale( const uint16_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_t_d( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnUint16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_t_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_t_d_as_d_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning double-precision floating-point numbers to an unsigned 16-bit integer strided input array and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 2, 1, 8 }; // 2 bytes per uint16, 1 byte per uint8, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double scale( const double x ) {
    return x + 10.0;
}

// Apply the callback:
stdlib_strided_mask_t_d_as_d_d( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_t_d_as_d_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_t_f( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning unsigned 16-bit integers to an unsigned 16-bit integer strided input array, casts the callback's unsigned 16-bit integer return value to a single-precision floating-point number, and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 2, 1, 4 }; // 2 bytes per uint16, 1 byte per uint8, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint16_t scale( const uint16_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_t_f( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnUint16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_t_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_t_f_as_d_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning double-precision floating-point numbers to an unsigned 16-bit integer strided input array, casts the callback's double-precision floating-point return value to a single-precision floating-point number, and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 2, 1, 4 }; // 2 bytes per uint16, 1 byte per uint8, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double scale( const double x ) {
    return x + 10.0;
}

// Apply the callback:
stdlib_strided_mask_t_f_as_d_d( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_t_f_as_d_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_t_f_as_f_f( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning single-precision floating-point numbers to an unsigned 16-bit integer strided input array and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 2, 1, 4 }; // 2 bytes per uint16, 1 byte per uint8, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
float scale( const float x ) {
    return x + 10.0f;
}

// Apply the callback:
stdlib_strided_mask_t_f_as_f_f( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_t_f_as_f_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_t_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning unsigned 16-bit integers to an unsigned 16-bit integer strided input array, casts the callback's unsigned 16-bit integer return value to a signed 32-bit integer, and assigns results to elements in a signed 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 2, 1, 4 }; // 2 bytes per uint16, 1 byte per uint8, 4 bytes per int32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint16_t scale( const uint16_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_t_i( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnUint16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_t_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_t_i_as_i_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning signed 32-bit integers to an unsigned 16-bit integer strided input array and assigns results to elements in a signed 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 2, 1, 4 }; // 2 bytes per uint16, 1 byte per uint8, 4 bytes per int32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int32_t scale( const int32_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_t_i_as_i_i( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnInt32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_t_i_as_i_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_t_t( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning unsigned 16-bit integers to an unsigned 16-bit integer strided input array and assigns results to elements in an unsigned 16-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 2, 1, 2 }; // 2 bytes per uint16, 1 byte per uint8

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint16_t scale( const uint16_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_t_t( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnUint16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_t_t( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_t_u( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning unsigned 16-bit integers to each element in an unsigned 16-bit integer strided input array, casts the callback's unsigned 16-bit integer return value to an unsigned 32-bit integer, and assigns results to elements in an unsigned 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 2, 1, 4 }; // 2 bytes per uint16, 1 byte per uint8, 4 bytes per uint32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint16_t scale( const uint16_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_t_u( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnUint16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_t_u( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_t_u_as_u_u( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning unsigned 32-bit integers to an unsigned 16-bit integer strided input array and assigns results to elements in an unsigned 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 2, 1, 4 }; // 2 bytes per uint16, 1 byte per uint8, 4 bytes per uint32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint32_t scale( const uint32_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_t_u_as_u_u( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnUint32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_t_u_as_u_u( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_u_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning unsigned 32-bit integers to an unsigned 32-bit integer strided input array, casts the callback's unsigned 32-bit integer return value to a double-precision floating-point number, and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 4, 1, 8 }; // 4 bytes per uint32, 1 byte per uint8, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint32_t scale( const uint32_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_u_d( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnUint32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_u_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_u_d_as_d_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning double-precision floating-point numbers to an unsigned 32-bit integer strided input array and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 4, 1, 8 }; // 4 bytes per uint32, 1 byte per uint8, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double scale( const double x ) {
    return x + 10.0;
}

// Apply the callback:
stdlib_strided_mask_u_d_as_d_d( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_u_d_as_d_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_u_u( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning unsigned 32-bit integers to an unsigned 32-bit integer strided input array and assigns results to elements in an unsigned 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 4, 1, 4 }; // 4 bytes per uint32, 1 byte per uint8

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint32_t scale( const uint32_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_u_u( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnUint32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_u_u( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_mask_v_v( \*arrays[], \*shape, \*strides, \*fcn )

Applies a unary callback accepting and returning unsigned 64-bit integers to an unsigned 64-bit integer strided input array and assigns results to elements in an unsigned 64-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t m[] = { 0, 1, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, m, out };

// Define the strides:
int64_t strides[] = { 8, 1, 8 }; // 8 bytes per uint64, 1 byte per uint8

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint64_t scale( const uint64_t x ) {
    return x + 10;
}

// Apply the callback:
stdlib_strided_mask_v_v( arrays, shape, strides, (void *)scale );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `UnaryFcnUint64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_mask_v_v( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

<!-- macros -->

* * *

#### STDLIB_STRIDED_MSKUNARY_LOOP_PREAMBLE

Macro containing the preamble for a loop which operates on strided array elements according to a strided mask array.

```c
STDLIB_STRIDED_MSKUNARY_LOOP_PREMABLE {
    // Loop body...
}
```

The macro expects the following variables to be defined:

-   **arrays**: `uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last element is a pointer to a strided output array.
-   **shape**: `int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `int64_t*` array containing strides (in bytes) for each strided array.

The macro defines the following variables:

-   **ip1**: `uint8_t*` pointer to the first indexed element of the input strided array.
-   **mp1**: `uint8_t*` pointer to the first indexed element of the mask strided array.
-   **op1**: `uint8_t*` pointer to the first indexed element of the output strided array.
-   **is1**: `int64_t` index increment for the input strided array.
-   **ms1**: `int64_t` index increment for the mask strided array.
-   **os1**: `int64_t` index increment for the output strided array.
-   **n**: `int64_t` number of indexed elements.
-   **i**: `int64_t` loop counter.

```c
#define STDLIB_STRIDED_MSKUNARY_LOOP_PREAMBLE              \
    uint8_t *ip1 = arrays[ 0 ];                            \
    uint8_t *mp1 = arrays[ 1 ];                            \
    uint8_t *op1 = arrays[ 2 ];                            \
    int64_t is1 = strides[ 0 ];                            \
    int64_t ms1 = strides[ 1 ];                            \
    int64_t os1 = strides[ 2 ];                            \
    int64_t n = shape[ 0 ];                                \
    int64_t i;                                             \
    if ( n <= 0 ) {                                        \
        return;                                            \
    }                                                      \
    if ( is1 < 0 ) {                                       \
        ip1 += (1-n) * is1;                                \
    }                                                      \
    if ( ms1 < 0 ) {                                       \
        mp1 += (1-n) * ms1;                                \
    }                                                      \
    if ( os1 < 0 ) {                                       \
        op1 += (1-n) * os1;                                \
    }                                                      \
    for ( i = 0; i < n; i++, ip1 += is1, mp1 += ms1, op1 += os1 )
```

#### STDLIB_STRIDED_MSKUNARY_LOOP_TWO_OUT_PREAMBLE

Macro containing the preamble for a loop which operates on strided array elements according to a strided mask array and updates two strided output arrays.

```c
STDLIB_STRIDED_MSKUNARY_LOOP_TWO_OUT_PREAMBLE {
    // Loop body...
}
```

The macro expects the following variables to be defined:

-   **arrays**: `uint8_t**` array whose first element is a pointer to a strided input array, whose second element is a pointer to a strided mask array, and whose last two elements are pointers to strided output arrays.
-   **shape**: `int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `int64_t*` array containing strides (in bytes) for each strided array.

The macro defines the following variables:

-   **ip1**: `uint8_t*` pointer to the first indexed element of the input strided array.
-   **mp1**: `uint8_t*` pointer to the first indexed element o the mask strided array.
-   **op1**: `uint8_t*` pointer to the first indexed element of the first output strided array.
-   **op2**: `uint8_t*` pointer to the first indexed element of the second output strided array.
-   **is1**: `int64_t` index increment for the input strided array.
-   **ms1**: `int64_t` index increment for the mask strided array.
-   **os1**: `int64_t` index increment for the first output strided array.
-   **os2**: `int64_t` index increment for the second output strided array.
-   **n**: `int64_t` number of indexed elements.
-   **i**: `int64_t` loop counter.

```c
#define STDLIB_STRIDED_MSKUNARY_LOOP_TWO_OUT_PREAMBLE      \
    uint8_t *ip1 = arrays[ 0 ];                            \
    uint8_t *mp1 = arrays[ 1 ];                            \
    uint8_t *op1 = arrays[ 2 ];                            \
    uint8_t *op2 = arrays[ 3 ];                            \
    int64_t is1 = strides[ 0 ];                            \
    int64_t ms1 = strides[ 1 ];                            \
    int64_t os1 = strides[ 2 ];                            \
    int64_t os2 = strides[ 3 ];                            \
    int64_t n = shape[ 0 ];                                \
    int64_t i;                                             \
    if ( n <= 0 ) {                                        \
        return;                                            \
    }                                                      \
    if ( is1 < 0 ) {                                       \
        ip1 += (1-n) * is1;                                \
    }                                                      \
    if ( ms1 < 0 ) {                                       \
        mp1 += (1-n) * ms1;                                \
    }                                                      \
    if ( os1 < 0 ) {                                       \
        op1 += (1-n) * os1;                                \
    }                                                      \
    if ( os2 < 0 ) {                                       \
        op2 += (1-n) * os2;                                \
    }                                                      \
    for ( i = 0; i < n; i++, ip1 += os1, mp1 += ms1, op1 += os1, op2 += os2 )
```

#### STDLIB_STRIDED_MSKUNARY_LOOP_INLINE( tin, tout, expr )

Macro for a unary loop which inlines an expression.

```c
STDLIB_STRIDED_MSKUNARY_LOOP_INLINE( double, double, *out = in1 * in1 )
```

The macro expects the following arguments:

-   **tin**: input strided array element type.
-   **tout**: output strided array element type.
-   **expr**: expression to inline.

In addition to the variables defined by the `STDLIB_STRIDED_MSKUNARY_LOOP_PREAMBLE` macro, the macro defines the following variables:

-   **in1**: `<tin>` input strided array element.
-   **out**: `<tout>*` pointer to an output strided array element.

The macro expects a provided expression to operate on `in1` and to store the result via `*out`.

```c
#define STDLIB_STRIDED_MSKUNARY_LOOP_INLINE( tin, tout, expr )     \
    STDLIB_STRIDED_MSKUNARY_LOOP_PREAMBLE {                        \
        if ( *(uint8_t *)mp1 ) {                                   \
            continue;                                              \
        }                                                          \
        const tin in1 = *(tin *)ip1;                               \
        tout *out = (tout *)op1;                                   \
        expr;                                                      \
    }
```

#### STDLIB_STRIDED_MSKUNARY_LOOP_CLBK( tin, tout )

Macro for a unary loop which invokes a callback.

```c
STDLIB_STRIDED_MSKUNARY_LOOP_CLBK( double, double )
```

The macro expects the following arguments:

-   **tin**: input strided array element data type.
-   **tout**: output strided array element data type.

In addition to the variables expected by `STDLIB_STRIDED_MSKUNARY_LOOP_PREAMBLE`, the macro expects the following variables to be defined:

-   **f**: unary callback. 

In addition to the variables defined by the `STDLIB_STRIDED_MSKUNARY_LOOP_PREAMBLE`, the macro defines the following variables:

-   **x**: `<tin>` input strided array element.

```c
#define STDLIB_STRIDED_MSKUNARY_LOOP_CLBK( tin, tout )     \
    STDLIB_STRIDED_MSKUNARY_LOOP_PREAMBLE {                \
        if ( *(uint8_t *)mp1 ) {                           \
            continue;                                      \
        }                                                  \
        const tin x = *(tin *)ip1;                         \
        *(tout *)op1 = (tout)f( x );                       \
    }
```

#### STDLIB_STRIDED_MSKUNARY_LOOP_CLBK_ARG_CAST( tin, tout, fin )

Macro for a unary loop which invokes a callback requiring arguments be explicitly cast to a different type.

```c
STDLIB_STRIDED_MSKUNARY_LOOP_CLBK_ARG_CAST( float, float, double )
```

The macro expects the following arguments:

-   **tin**: input strided array element data type.
-   **tout**: output strided array element data type.
-   **fin**: callback argument data type.

In addition to the variables expected by `STDLIB_STRIDED_MSKUNARY_LOOP_PREAMBLE`, the macro expects the following variables to be defined:

-   **f**: unary callback. 

In addition to the variables defined by the `STDLIB_STRIDED_MSKUNARY_LOOP_PREAMBLE`, the macro defines the following variables:

-   **x**: `<tin>` input strided array element.

```c
#define STDLIB_STRIDED_MSKUNARY_LOOP_CLBK_ARG_CAST( tin, tout, fin )  \
    STDLIB_STRIDED_MSKUNARY_LOOP_PREAMBLE {                           \
        if ( *(uint8_t *)mp1 ) {                                      \
            continue;                                                 \
        }                                                             \
        const tin x = *(tin *)ip1;                                    \
        *(tout *)op1 = (tout)f( (fin)x );                             \
    }
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

* * *

<section class="examples">

### Examples

```c
#include "stdlib/strided/base/mskunary.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

// Define a callback:
static double scale( const double x ) {
    return x * 10.0;
}

int main() {
    // Create underlying byte arrays:
    uint8_t x[] = { 1, 4, 7 };
    uint8_t m[] = { 0, 1, 0 };
    uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

    // Define a pointer to an array containing pointers to strided arrays:
    uint8_t *arrays[] = { x, m, out };

    // Define the strides:
    int64_t strides[] = { 1, 1, 8 }; // 1 byte per uint8, 8 bytes per double

    // Define the number of elements over which to iterate:
    int64_t shape[] = { 3 };

    // Apply the callback:
    stdlib_strided_mask_b_d_as_d_d( arrays, shape, strides, (void *)scale );

    // Print the contents of the output array:
    uint8_t *op1 = out;
    for ( int64_t i = 0; i < shape[0]; i++, op1 += strides[2] ) {
        const double v = *(double *)op1;
        printf( "out[ %"PRId64" ] = %lf\n", i, v );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
