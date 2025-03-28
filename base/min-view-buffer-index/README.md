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

# minViewBufferIndex

> Return the minimum accessible index based on a set of provided strided array parameters.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var minViewBufferIndex = require( '@stdlib/strided/base/min-view-buffer-index' );
```

#### minViewBufferIndex( N, stride, offset )

Returns the minimum accessible index based on a set of provided strided array parameters.

```javascript
var idx = minViewBufferIndex( 3, -2, 10 );
// returns 6
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If `N <= 0`, the function returns the specified `offset`; however, do note that, when `N` equals zero, no strided array elements should be accessed.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var minViewBufferIndex = require( '@stdlib/strided/base/min-view-buffer-index' );

// Generate a random number of indexed elements:
var N = discreteUniform( 10, 20 );

// Generate a random stride length:
var stride = discreteUniform( -10, 10 );

// Generate a random offset:
var offset = discreteUniform( 0, 100 ) + ( ( stride < 0 ) ? (1-N)*stride : 0 );

// Compute the minimum accessible index:
var idx = minViewBufferIndex( N, stride, offset );

console.log( 'N: %d, stride: %d, offset: %d => %d', N, stride, offset, idx );
```

</section>

<!-- /.examples -->

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
#include "stdlib/strided/base/min_view_buffer_index.h"
```

#### stdlib_strided_min_view_buffer_index( N, stride, offset )

Returns the minimum accessible index based on a set of provided strided array parameters.

```c
#include "stdlib/strided/base/min_view_buffer_index.h"
#include <stdint.h>

int64_t offset = stdlib_strided_min_view_buffer_index( 3, -2, 10 );
// returns 6
```

The function accepts the following arguments:

-   **N**: `[in] int64_t` number of indexed elements.
-   **stride**: `[in] int64_t` index increment.
-   **offset**: `[in] int64_t` starting index.

```c
int64_t stdlib_strided_min_view_buffer_index( const int64_t N, const int64_t stride, const int64_t offset );
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
#include "stdlib/strided/base/min_view_buffer_index.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
    // Specify the number of indexed elements:
    int64_t N = 6;

    // Define a stride:
    int64_t stride = -2;

    // Define an offset:
    int64_t offset = 100;

    // Compute the minimum accessible index:
    int64_t idx = stdlib_strided_min_view_buffer_index( N, stride, offset );

    // Print the results:
    printf( "N: %"PRId64", stride: %"PRId64", offset: %"PRId64" => idx: %"PRId64"\n", N, stride, offset, idx );
}
```

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

* * *

## See Also

-   <span class="package-name">[`@stdlib/strided/base/offset-view`][@stdlib/strided/base/offset-view]</span><span class="delimiter">: </span><span class="description">return a typed array view having the same data type as a provided input typed array and starting at a specified index offset.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/strided/base/offset-view]: https://github.com/stdlib-js/strided/tree/main/base/offset-view

<!-- </related-links> -->

</section>

<!-- /.links -->
