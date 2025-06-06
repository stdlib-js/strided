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

# dmskmap2

> Apply a binary function to double-precision floating-point strided input arrays according to a strided mask array and assign results to a double-precision floating-point strided output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dmskmap2 = require( '@stdlib/strided/base/dmskmap2' );
```

#### dmskmap2( N, x, strideX, y, strideY, mask, strideMask, z, strideZ, fcn )

Applies a binary function to double-precision floating-point strided input arrays according to a strided mask array and assigns results to a double-precision floating-point strided output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var add = require( '@stdlib/number/float64/base/add' );

var x = new Float64Array( [ -2.0, 1.0, -3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var z = new Float64Array( x.length );
var m = new Uint8Array( [ 0, 0, 1, 0, 0, 1, 1, 0 ] );

dmskmap2( x.length, x, 1, y, 1, m, 1, z, 1, add );
// z => <Float64Array>[ -1.0, 3.0, 0.0, -1.0, 9.0, 0.0, 0.0, 5.0 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: index increment for `x`.
-   **y**: input [`Float64Array`][@stdlib/array/float64].
-   **strideY**: index increment for `y`.
-   **mask**: mask [`Uint8Array`][@stdlib/array/uint8].
-   **strideMask**: index increment for `mask`.
-   **z**: output [`Float64Array`][@stdlib/array/float64].
-   **strideZ**: index increment for `z`.
-   **fcn**: function to apply.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to index every other value in `x` and to index the first `N` elements of `y` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var add = require( '@stdlib/number/float64/base/add' );

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var y = new Float64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 0, 1 ] );

dmskmap2( 3, x, 2, y, -1, m, 2, z, 1, add );
// z => <Float64Array>[ 1.0, 0.0, -4.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][@stdlib/array/float64] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var add = require( '@stdlib/number/float64/base/add' );

// Initial arrays...
var x0 = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var y0 = new Float64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
var z0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var m0 = new Uint8Array( [ 0, 0, 1, 0, 0, 1 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element
var z1 = new Float64Array( z0.buffer, z0.BYTES_PER_ELEMENT*2 ); // start at 3rd element
var m1 = new Uint8Array( m0.buffer, m0.BYTES_PER_ELEMENT*3 ); // start at 4th element

dmskmap2( 3, x1, -2, y1, 1, m1, 1, z1, 1, add );
// z0 => <Float64Array>[ 0.0, 0.0, -4.0, -1.0, 0.0, 0.0 ]
```

#### dmskmap2.ndarray( N, x, strideX, offsetX, y, strideY, offsetY, mask, strideMask, offsetMask, z, strideZ, offsetZ, fcn )

Applies a binary function to double-precision floating-point strided input arrays according to a strided mask array and assigns results to a double-precision floating-point strided output array using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var add = require( '@stdlib/number/float64/base/add' );

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
var y = new Float64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0 ] );
var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );

dmskmap2.ndarray( x.length, x, 1, 0, y, 1, 0, m, 1, 0, z, 1, 0, add );
// z => <Float64Array>[ 0.0, -1.0, 0.0, -2.0, -2.0 ]
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.
-   **offsetMask**: starting index for `mask`.
-   **offsetZ**: starting index for `z`.

While [`typed array`][@stdlib/array/float64] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var add = require( '@stdlib/number/float64/base/add' );

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var y = new Float64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 0, 1 ] );

dmskmap2.ndarray( 3, x, 2, 1, y, -1, y.length-1, m, 2, 1, z, 1, 0, add );
// z => <Float64Array>[ 1.0, -1.0, 0.0, 0.0, 0.0, 0.0 ]
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
var Float64Array = require( '@stdlib/array/float64' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var add = require( '@stdlib/number/float64/base/add' );
var dmskmap2 = require( '@stdlib/strided/base/dmskmap2' );

var x = filledarrayBy( 10, 'float64', discreteUniform( -100, 100 ) );
console.log( x );

var y = filledarrayBy( x.length, 'float64', discreteUniform( -100, 100 ) );
console.log( y );

var m = filledarrayBy( x.length, 'uint8', bernoulli( 0.2 ) );
console.log( m );

var z = new Float64Array( x.length );
console.log( z );

dmskmap2.ndarray( x.length, x, 1, 0, y, -1, y.length-1, m, 1, 0, z, 1, 0, add );
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
#include "stdlib/strided/base/dmskmap2.h"
```

#### stdlib_strided_dmskmap2( N, \*X, strideX, \*Y, strideY, \*Mask, strideMask, \*Z, strideZ, fcn )

Applies a binary function to double-precision floating-point strided input arrays according to a strided mask array and assigns results to a double-precision floating-point strided output array.

```c
#include <stdint.h>

static double add( const double x, const double y ) {
    return x + y;
}

double X[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 };
double Y[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 };
double Z[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };
uint8_t M[] = { 0, 0, 1, 0, 0, 1 };

int64_t N = 6;

stdlib_strided_dmskmap2( N, X, 1, Y, 1, M, 1, Z, 1, add );
```

The function accepts the following arguments:

-   **N**: `[in] int64_t` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX** `[in] int64_t` index increment for `X`.
-   **Y**: `[int] double*` input array.
-   **strideY**: `[in] int64_t` index increment for `Y`.
-   **Mask**: `[in] uint8_t*` mask array.
-   **strideMask**: `[in] int64_t` index increment for `Mask`.
-   **Z**: `[out] double*` output array.
-   **strideZ**: `[in] int64_t` index increment for `Z`.
-   **fcn**: `[in] double (*fcn)( double, double )` binary function to apply.

```c
void stdlib_strided_dmskmap2( const int64_t N, const double *X, const int64_t strideX, const double *Y, const int64_t strideY, const uint8_t *Mask, const int64_t strideMask, double *Z, const int64_t strideZ, double (*fcn)( double, double ) );
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
#include "stdlib/strided/base/dmskmap2.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

// Define a callback:
static double add( const double x, const double y ) {
    return x + y;
}

int main( void ) {
    // Create input strided arrays:
    double X[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 };
    double Y[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 };

    // Create a mask strided array:
    uint8_t M[] = { 0, 0, 1, 0, 0, 1 };

    // Create an output strided array:
    double Z[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

    // Specify the number of elements:
    int64_t N = 6;

    // Define the strides:
    int64_t strideX = 1;
    int64_t strideY = -1;
    int64_t strideZ = 1;
    int64_t strideM = 1;

    // Apply the callback:
    stdlib_strided_dmskmap2( N, X, strideX, Y, strideY, M, strideM, Z, strideZ, add );

    // Print the results:
    for ( int64_t i = 0; i < N; i++ ) {
        printf( "Z[ %"PRId64" ] = %lf\n", i, Z[ i ] );
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
-   <span class="package-name">[`@stdlib/strided/base/dmskmap`][@stdlib/strided/base/dmskmap]</span><span class="delimiter">: </span><span class="description">apply a unary function to a double-precision floating-point strided input array according to a strided mask array and assign results to a double-precision floating-point strided output array.</span>
-   <span class="package-name">[`@stdlib/strided/base/smskmap2`][@stdlib/strided/base/smskmap2]</span><span class="delimiter">: </span><span class="description">apply a binary function to single-precision floating-point strided input arrays according to a strided mask array and assign results to a single-precision floating-point strided output array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8

<!-- <related-links> -->

[@stdlib/strided/base/dmap2]: https://github.com/stdlib-js/strided/tree/main/base/dmap2

[@stdlib/strided/base/dmskmap]: https://github.com/stdlib-js/strided/tree/main/base/dmskmap

[@stdlib/strided/base/smskmap2]: https://github.com/stdlib-js/strided/tree/main/base/smskmap2

<!-- </related-links> -->

</section>

<!-- /.links -->
