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

# cmap

> Apply a unary function to a single-precision floating-point strided input array and assign results to a single-precision floating-point strided output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cmap = require( '@stdlib/strided/base/cmap' );
```

#### cmap( N, x, strideX, y, strideY, fcn )

Applies a unary function to a single-precision complex floating-point strided input array and assigns results to a single-precision complex floating-point strided output array.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var cceilf = require( '@stdlib/math/base/special/cceilf' );

var x = new Complex64Array( [ -2.3, 1.5, 3.1, -5.2, 4.8, 0.0, -1.6, 3.4 ] );
var y = new Complex64Array( x.length );

cmap( x.length, x, 1, y, 1, cceilf );

var v = y.get( 0 );
// returns <Complex64>

var re = real( v );
// returns -2.0

var im = imag( v );
// returns 2.0
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: index increment for `x`.
-   **y**: output [`Complex64Array`][@stdlib/array/complex64].
-   **strideY**: index increment for `y`.
-   **fcn**: function to apply.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to index every other value in `x` and to index the first `N` elements of `y` in reverse order,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var cceilf = require( '@stdlib/math/base/special/cceilf' );

var x = new Complex64Array( [ -2.3, 1.5, 3.1, -5.2, 4.8, 0.0, -1.6, 3.4 ] );
var y = new Complex64Array( x.length );

cmap( 2, x, 2, y, -1, cceilf );

var v = y.get( 0 );
// returns <Complex64>

var re = real( v );
// returns 5.0

var im = imag( v );
// returns 0.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][@stdlib/array/complex64] views.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var cceilf = require( '@stdlib/math/base/special/cceilf' );

// Initial arrays...
var x0 = new Complex64Array( [ -2.3, 1.5, 3.1, -5.2, 4.8, 0.0, -1.6, 3.4 ] );
var y0 = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Complex64Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

cmap( 2, x1, -2, y1, 1, cceilf );

var v = y0.get( 2 );
// returns <Complex64>

var re = real( v );
// returns -1.0

var im = imag( v );
// returns 4.0
```

#### cmap.ndarray( N, x, strideX, offsetX, y, strideY, offsetY, fcn )

Applies a unary function to a single-precision complex floating-point strided input array and assigns results to a single-precision complex floating-point strided output array using alternative indexing semantics.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var cceilf = require( '@stdlib/math/base/special/cceilf' );

var x = new Complex64Array( [ -2.3, 1.5, 3.1, -5.2, 4.8, 0.0, -1.6, 3.4 ] );
var y = new Complex64Array( x.length );

cmap.ndarray( x.length, x, 1, 0, y, 1, 0, cceilf );

var v = y.get( 0 );
// returns <Complex64>

var re = real( v );
// returns -2.0

var im = imag( v );
// returns 2.0
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][@stdlib/array/complex64] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y` in reverse order,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var cceilf = require( '@stdlib/math/base/special/cceilf' );

var x = new Complex64Array( [ -2.3, 1.5, 3.1, -5.2, 4.8, 0.0, -1.6, 3.4 ] );
var y = new Complex64Array( x.length );

cmap.ndarray( 2, x, 2, 1, y, -1, y.length-1, cceilf );

var v = y.get( y.length-1 );
// returns <Complex64>

var re = real( v );
// returns 4.0

var im = imag( v );
// returns -5.0
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
var Complex64Array = require( '@stdlib/array/complex64' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var cmap = require( '@stdlib/strided/base/cmap' );

function scale( x ) {
    var re = real( x );
    var im = imag( x );
    return new Complex64( re*10.0, im*10.0 );
}

var xbuf = filledarrayBy( 10*2, 'float32', discreteUniform( -100.0, 100.0 ) );
var x = new Complex64Array( xbuf.buffer );
console.log( x );

var y = new Complex64Array( x.length );
console.log( y );

cmap.ndarray( x.length, x, 1, 0, y, -1, y.length-1, scale );
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
#include "stdlib/strided/base/cmap.h"
```

#### stdlib_strided_cmap( N, \*X, strideX, \*Y, strideY, fcn )

Applies a unary function to a single-precision complex floating-point strided input array and assigns results to a single-precision complex floating-point strided output array.

```c
#include <stdint.h>
#include <complex.h>

static float complex scale( const float complex x ) {
    float re = crealf( x );
    float im = cimagf( x );
    return ( re+10.0f ) + ( im+10.0f )*I;
}

float complex X[] = { 1.0f+1.0f*I, 2.0f+2.0f*I, 3.0f+3.0f*I, 4.0f+4.0f*I, 5.0f+5.0f*I, 6.0f+6.0f*I };
float complex Y[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

int64_t N = 6;

stdlib_strided_cmap( N, X, 1, Y, 1, scale );
```

The function accepts the following arguments:

-   **N**: `[in] int64_t` number of indexed elements.
-   **X**: `[in] float complex*` input array.
-   **strideX** `[in] int64_t` index increment for `X`.
-   **Y**: `[out] float complex*` output array.
-   **strideY**: `[in] int64_t` index increment for `Y`.
-   **fcn**: `[in] float complex (*fcn)( float complex )` unary function to apply.

```c
void stdlib_strided_cmap( const int64_t N, const float complex *X, const int64_t strideX, float complex *Y, const int64_t strideY, float complex (*fcn)( float complex ) );
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
#include "stdlib/strided/base/cmap.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>
#include <complex.h>

// Define a callback:
static float complex scale( const float complex x ) {
    float re = crealf( x );
    float im = cimagf( x );
    return ( re+10.0f ) + ( im+10.0f )*I;
}

int main( void ) {
    // Create an input strided array:
    float complex X[] = { 1.0+1.0*I, 2.0+2.0*I, 3.0+3.0*I, 4.0+4.0*I, 5.0+5.0*I, 6.0+6.0*I };

    // Create an output strided array:
    float complex Y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

    // Specify the number of elements:
    int64_t N = 6;

    // Define the strides:
    int64_t strideX = 1;
    int64_t strideY = -1;

    // Apply the callback:
    stdlib_strided_cmap( N, X, strideX, Y, strideY, scale );

    // Print the results:
    for ( int64_t i = 0; i < N; i++ ) {
        printf( "Y[ %"PRId64" ] = %f + %fi\n", i, creal( Y[i] ), cimag( Y[i] ) );
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

-   <span class="package-name">[`@stdlib/strided/base/zmap`][@stdlib/strided/base/zmap]</span><span class="delimiter">: </span><span class="description">apply a unary function to a double-precision complex floating-point strided input array and assign results to a double-precision complex floating-point strided output array.</span>
-   <span class="package-name">[`@stdlib/strided/base/unary`][@stdlib/strided/base/unary]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a strided input array and assign results to elements in a strided output array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

<!-- <related-links> -->

[@stdlib/strided/base/zmap]: https://github.com/stdlib-js/strided/tree/main/base/zmap

[@stdlib/strided/base/unary]: https://github.com/stdlib-js/strided/tree/main/base/unary

<!-- </related-links> -->

</section>

<!-- /.links -->
