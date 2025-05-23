<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

<!-- lint disable maximum-heading-length -->

# smap2

> Apply a binary function to single-precision floating-point strided input arrays and assign results to a single-precision floating-point strided output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var smap2 = require( '@stdlib/strided/base/smap2' );
```

#### smap2( N, x, strideX, y, strideY, z, strideZ, fcn )

Applies a binary function to single-precision floating-point strided input arrays and assigns results to a single-precision floating-point strided output array.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var addf = require( '@stdlib/number/float32/base/add' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
var y = new Float32Array( [ 2.0, 1.0, 3.0, -2.0, 4.0, 1.0, -1.0, 3.0 ] );
var z = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

smap2( x.length, x, 1, y, 1, z, 1, addf );
// z => <Float32Array>[ 0.0, 2.0, 6.0, -7.0, 8.0, 1.0, -2.0, 0.0 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: index increment for `x`.
-   **y**: input [`Float32Array`][@stdlib/array/float32].
-   **strideY**: index increment for `y`.
-   **z**: output [`Float32Array`][@stdlib/array/float32].
-   **strideZ**: index increment for `z`.
-   **fcn**: function to apply.

The `N` and `stride` parameters determine which strided array elements are accessed at runtime. For example, to index every other value in `x` and to index the first `N` elements of `y` in reverse order,

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var addf = require( '@stdlib/number/float32/base/add' );

var x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var y = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
var z = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

smap2( 3, x, 2, y, -1, z, 1, addf );
// z => <Float32Array>[ 1.0, -2.0, -4.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][@stdlib/array/float32] views.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var addf = require( '@stdlib/number/float32/base/add' );

// Initial arrays...
var x0 = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var y0 = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
var z0 = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element
var z1 = new Float32Array( z0.buffer, z0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

smap2( 3, x1, -2, y1, 1, z1, 1, addf );
// z0 => <Float32Array>[ 0.0, 0.0, -4.0, -1.0, 1.0, 0.0 ]
```

#### smap2.ndarray( N, x, strideX, offsetX, y, strideY, offsetY, z, strideZ, offsetZ, fcn )

Applies a binary function to single-precision floating-point strided input arrays and assigns results to a single-precision floating-point strided output array using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var addf = require( '@stdlib/number/float32/base/add' );

var x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
var y = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0 ] );
var z = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, addf );
// z => <Float32Array>[ 0.0, -1.0, -1.0, -2.0, -2.0 ]
```

The function accepts the following addfitional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.
-   **offsetZ**: starting index for `z`.

While [`typed array`][@stdlib/array/float32] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y` in reverse order,

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var addf = require( '@stdlib/number/float32/base/add' );

var x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var y = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
var z = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

smap2.ndarray( 3, x, 2, 1, y, -1, y.length-1, z, 1, 3, addf );
// z => <Float32Array>[ 0.0, 0.0, 0.0, 1.0, -1.0, -4.0 ]
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
var filledarrayBy = require( '@stdlib/array/filled-by' );
var Float32Array = require( '@stdlib/array/float32' );
var addf = require( '@stdlib/number/float32/base/add' );
var smap2 = require( '@stdlib/strided/base/smap2' );

var x = filledarrayBy( 10, 'float32', discreteUniform( -100, 100 ) );
console.log( x );

var y = filledarrayBy( x.length, 'float32', discreteUniform( -100, 100 ) );
console.log( y );

var z = new Float32Array( x.length );
console.log( z );

smap2.ndarray( x.length, x, 1, 0, y, -1, y.length-1, z, 1, 0, addf );
console.log( z );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/strided/base/smap2.h"
```

#### stdlib_strided_smap2( N, \*X, strideX, \*Y, strideY, \*Z, strideZ, fcn )

Applies a binary function to single-precision floating-point strided input arrays and assigns results to a single-precision floating-point strided output array.

```c
#include <stdint.h>

static float addf( const float x, const float y ) {
    return x + y;
}

float X[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f };
float Y[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f };
float Z[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

int64_t N = 6;

stdlib_strided_smap2( N, X, 1, Y, 1, Z, 1, addf );
```

The function accepts the following arguments:

-   **N**: `[in] int64_t` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX** `[in] int64_t` index increment for `X`.
-   **Y**: `[in] float*` input array.
-   **strideY**: `[in] int64_t` index increment for `Y`.
-   **Z**: `[out] float*` output array.
-   **strideZ**: `[in] int64_t` index increment for `Z`.
-   **fcn**: `[in] float (*fcn)( float, float )` binary function to apply.

```c
void stdlib_strided_smap2( const int64_t N, const float *X, const int64_t strideX, const float *Y, const int64_t strideY, float *Z, const int64_t strideZ, float (*fcn)( float, float ) );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/strided/base/smap2.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

// Define a callback:
static float addf( const float x, const float y ) {
    return x + y;
}

int main( void ) {
    // Create input strided arrays:
    float X[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f };
    float Y[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f };

    // Create an output strided array:
    float Z[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

    // Specify the number of elements:
    int64_t N = 6;

    // Define the strides:
    int64_t strideX = 1;
    int64_t strideY = -1;
    int64_t strideZ = 1;

    // Apply the callback:
    stdlib_strided_smap2( N, X, strideX, Y, strideY, Z, strideZ, addf );

    // Print the results:
    for ( int64_t i = 0; i < N; i++ ) {
        printf( "Z[ %"PRId64" ] = %f\n", i, Z[ i ] );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/strided/base/dmap2`][@stdlib/strided/base/dmap2]</span><span class="delimiter">: </span><span class="description">apply a binary function to double-precision floating-point strided input arrays and assign results to a double-precision floating-point strided output array.</span>
-   <span class="package-name">[`@stdlib/strided/base/binary`][@stdlib/strided/base/binary]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in strided input arrays and assign results to elements in a strided output array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

<!-- <related-links> -->

[@stdlib/strided/base/dmap2]: https://github.com/stdlib-js/strided/tree/main/base/dmap2

[@stdlib/strided/base/binary]: https://github.com/stdlib-js/strided/tree/main/base/binary

<!-- </related-links> -->

</section>

<!-- /.links -->
