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

# smap2

> C API for registering a Node-API module exporting a strided array interface for applying a binary callback to single-precision floating-point strided input arrays and assigning results to a single-precision floating-point strided output array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var headerDir = require( '@stdlib/strided/napi/smap2' );
```

#### headerDir

Absolute file path for the directory containing header files for C APIs.

```javascript
var dir = headerDir;
// returns <string>
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
var headerDir = require( '@stdlib/strided/napi/smap2' );

console.log( headerDir );
// => <string>
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
#include "stdlib/strided/napi/smap2.h"
```

#### stdlib_strided_napi_smap2( env, info, fcn )

Invokes a strided array interface which applies a binary callback to single-precision floating-point strided input arrays and assigns results to a single-precision floating-point strided output array.

```c
#include <node_api.h>

// ...

static float addf( const float x, const float y ) {
    return x + y;
}

// ...

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
napi_value addon( napi_env env, napi_callback_info info ) {
    stdlib_strided_napi_smap2( env, info, addf );
    return NULL;
}

// ...
```

The function accepts the following arguments:

-   **env**: `[in] napi_env` environment under which the function is invoked.
-   **info**: `[in] napi_callback_info` callback data.
-   **fcn**: `[in] float (*fcn)( float, float )` binary callback.

```c
void stdlib_strided_napi_smap2( napi_env env, napi_callback_info info, float (*fcn)( float, float ) );
```

#### STDLIB_STRIDED_NAPI_MODULE_SMAP2( clbk )

Macro for registering a Node-API module exporting a strided array interface for applying a binary callback to single-precision floating-point strided input arrays and assigning results to a single-precision floating-point strided output array.

```c
static float addf( const float x, const float y ) {
    return x + y;
}

// ...

// Register a Node-API module:
STDLIB_STRIDED_NAPI_MODULE_SMAP2( addf );
```

The macro expects the following arguments:

-   **clbk**: `float (*fcn)( float, float )` binary callback.

When used, this macro should be used **instead of** `NAPI_MODULE`. The macro includes `NAPI_MODULE`, thus ensuring Node-API module registration.

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   The function expects that the callback `info` argument provides access to the following JavaScript arguments:

    -   **N**: number of indexed elements.
    -   **X**: input [`Float32Array`][@stdlib/array/float32].
    -   **strideX**: `X` stride length.
    -   **Y**: input [`Float32Array`][@stdlib/array/float32].
    -   **strideY**: `Y` stride length.
    -   **Z**: destination [`Float32Array`][@stdlib/array/float32].
    -   **strideZ**: `Z` stride length.

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

</section>

<!-- /.links -->
