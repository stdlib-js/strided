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

<!-- lint disable maximum-heading-length -->

# dmskmap

> Apply a unary function to a double-precision floating-point strided input array according to a strided mask array and assign results to a double-precision floating-point strided output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dmskmap = require( '@stdlib/strided/base/dmskmap' );
```

#### dmskmap( N, x, strideX, mask, strideMask, y, strideY, fcn )

Applies a unary function to a double-precision floating-point strided input array according to a strided mask array and assigns results to a double-precision floating-point strided output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var abs = require( '@stdlib/math/base/special/abs' );

var x = new Float64Array( [ -2.0, 1.0, -3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 0, 1, 1, 0 ] );

// Compute the absolute values in-place:
dmskmap( x.length, x, 1, m, 1, x, 1, abs );
// x => <Float64Array>[ 2.0, 1.0, -3.0, 5.0, 4.0, 0.0, -1.0, 3.0 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: index increment for `x`.
-   **mask**: mask [`Uint8Array`][@stdlib/array/uint8].
-   **strideMask**: index increment for `mask`.
-   **y**: output [`Float64Array`][@stdlib/array/float64].
-   **strideY**: index increment for `y`.
-   **fcn**: function to apply.

The `N` and `stride` parameters determine which elements in the strided arrays are accessed at runtime. For example, to index every other value in `x` and to index the first `N` elements of `y` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var abs = require( '@stdlib/math/base/special/abs' );

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 0, 1 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dmskmap( 3, x, 2, m, 2, y, -1, abs );
// y => <Float64Array>[ 5.0, 0.0, 1.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][@stdlib/array/float64] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var abs = require( '@stdlib/math/base/special/abs' );

// Initial arrays...
var x0 = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var m0 = new Uint8Array( [ 0, 0, 1, 0, 0, 1 ] );
var y0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var m1 = new Uint8Array( m0.buffer, m0.BYTES_PER_ELEMENT*3 ); // start at 4th element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

dmskmap( 3, x1, -2, m1, 1, y1, 1, abs );
// y0 => <Float64Array>[ 0.0, 0.0, 0.0, 6.0, 4.0, 0.0 ]
```

#### dmskmap.ndarray( N, x, strideX, offsetX, mask, strideMask, offsetMask, y, strideY, offsetY, fcn )

Applies a unary function to a double-precision floating-point strided input array according to a strided mask array and assigns results to a double-precision floating-point strided output array using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var abs = require( '@stdlib/math/base/special/abs' );

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dmskmap.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0, abs );
// y => <Float64Array>[ 1.0, 2.0, 0.0, 4.0, 5.0 ]
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetMask**: starting index for `mask`.
-   **offsetY**: starting index for `y`.

While [`typed array`][@stdlib/array/float64] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var abs = require( '@stdlib/math/base/special/abs' );

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 0, 1 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dmskmap.ndarray( 3, x, 2, 1, m, 2, 1, y, -1, y.length-1, abs );
// y => <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 4.0, 2.0 ]
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
var round = require( '@stdlib/math/base/special/round' );
var randu = require( '@stdlib/random/base/randu' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var dmskmap = require( '@stdlib/strided/base/dmskmap' );

function scale( x ) {
    return x * 10.0;
}

var x = new Float64Array( 10 );
var m = new Uint8Array( x.length );
var y = new Float64Array( x.length );

var i;
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = round( (randu()*200.0) - 100.0 );
    m[ i ] = bernoulli( 0.2 );
}
console.log( x );
console.log( m );
console.log( y );

dmskmap.ndarray( x.length, x, 1, 0, m, 1, 0, y, -1, y.length-1, scale );
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

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/strided/base/dmskmap.h"
```

#### stdlib_strided_dmskmap( N, \*X, strideX, \*Mask, strideMask, \*Y, strideY, fcn )

Applies a unary function to a double-precision floating-point strided input array according to a strided mask array and assigns results to a double-precision floating-point strided output array.

```c
#include <stdint.h>

static double scale( const double x ) {
    return x * 10.0;
}

double X[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 };
uint8_t M[] = { 0, 0, 1, 0, 0, 1 };
double Y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

int64_t N = 6;

stdlib_strided_dmskmap( N, X, 1, M, 1, Y, 1, scale );
```

The function accepts the following arguments:

-   **N**: `[in] int64_t` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX** `[in] int64_t` index increment for `X`.
-   **Mask**: `[in] uint8_t*` mask array.
-   **strideMask**: `[in] int64_t` index increment for `Mask`.
-   **Y**: `[out] double*` output array.
-   **strideY**: `[in] int64_t` index increment for `Y`.
-   **fcn**: `[in] double (*fcn)( double )` unary function to apply.

```c
void stdlib_strided_dmskmap( const int64_t N, const double *X, const int64_t strideX, const uint8_t *Mask, const int64_t strideMask, double *Y, const int64_t strideY, double (*fcn)( double ) );
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
#include "stdlib/strided/base/dmskmap.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

// Define a callback:
static double scale( const double x ) {
    return x * 10.0;
}

int main( void ) {
    // Create an input strided array:
    double X[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 };

    // Create a mask strided array:
    uint8_t M[] = { 0, 0, 1, 0, 0, 1 };

    // Create an output strided array:
    double Y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

    // Specify the number of elements:
    int64_t N = 6;

    // Define the strides:
    int64_t strideX = 1;
    int64_t strideM = 1;
    int64_t strideY = -1;

    // Apply the callback:
    stdlib_strided_dmskmap( N, X, strideX, M, strideM, Y, strideY, scale );

    // Print the results:
    for ( int64_t i = 0; i < N; i++ ) {
        printf( "Y[ %"PRId64" ] = %lf\n", i, Y[ i ] );
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

-   <span class="package-name">[`@stdlib/strided/base/dmap`][@stdlib/strided/base/dmap]</span><span class="delimiter">: </span><span class="description">apply a unary function to a double-precision floating-point strided input array and assign results to a double-precision floating-point strided output array.</span>
-   <span class="package-name">[`@stdlib/strided/base/dmskmap2`][@stdlib/strided/base/dmskmap2]</span><span class="delimiter">: </span><span class="description">apply a binary function to double-precision floating-point strided input arrays according to a strided mask array and assign results to a double-precision floating-point strided output array.</span>
-   <span class="package-name">[`@stdlib/strided/base/mskunary`][@stdlib/strided/base/mskunary]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a strided input array according to elements in a strided mask array and assign results to elements in a strided output array.</span>
-   <span class="package-name">[`@stdlib/strided/base/smskmap`][@stdlib/strided/base/smskmap]</span><span class="delimiter">: </span><span class="description">apply a unary function to a single-precision floating-point strided input array according to a strided mask array and assign results to a single-precision floating-point strided output array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8

<!-- <related-links> -->

[@stdlib/strided/base/dmap]: https://github.com/stdlib-js/strided/tree/main/base/dmap

[@stdlib/strided/base/dmskmap2]: https://github.com/stdlib-js/strided/tree/main/base/dmskmap2

[@stdlib/strided/base/mskunary]: https://github.com/stdlib-js/strided/tree/main/base/mskunary

[@stdlib/strided/base/smskmap]: https://github.com/stdlib-js/strided/tree/main/base/smskmap

<!-- </related-links> -->

</section>

<!-- /.links -->
