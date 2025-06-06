<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# Callbacks

> Assign callbacks to masked unary interfaces according to type [promotion rules][@stdlib/ndarray/promotion-rules].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var callbacks = require( '@stdlib/strided/base/mskunary-signature-callbacks' );
```

#### callbacks( table, signatures )

Assigns callbacks to masked unary interfaces according to type [promotion rules][@stdlib/ndarray/promotion-rules].

```javascript
var signatures = require( '@stdlib/strided/base/mskunary-dtype-signatures' );
var identity = require( '@stdlib/number/float64/base/identity' );
var cidentity = require( '@stdlib/complex/float64/base/identity' );
var cidentityf = require( '@stdlib/complex/float32/base/identity' );

var dtypes = [
    'float64',
    'float32',
    'int32',
    'uint8'
];

var sigs = signatures( dtypes, dtypes );
// returns [...]

var table = {
    'default': identity,
    'complex64': cidentityf,
    'complex128': cidentity
};

var list = callbacks( table, sigs );
// returns [...]
```

The function accepts the following arguments:

-   **table**: callback table.
-   **signatures**: strided array containing masked unary interface signatures.

A callback `table` should have the following properties:

-   **default**: default callback.
-   **complex64**: callback for single-precision complex floating-point numbers.
-   **complex128**: callback for double-precision complex floating-point numbers.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function assumes that the provided signature array has the following properties:

    -   a strided array having a stride length of `3` (i.e., every `3` elements define a masked unary interface signature).
    -   for each signature (i.e., set of two consecutive non-overlapping strided array elements), the first element is the input data type, the second element is the mask data type, and the third element is the return data type.
    -   all signatures (excluding the mask data type) follow type [promotion rules][@stdlib/ndarray/promotion-rules].

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/strided/dtypes' );
var signatures = require( '@stdlib/strided/base/mskunary-dtype-signatures' );
var identity = require( '@stdlib/number/float64/base/identity' );
var cidentity = require( '@stdlib/complex/float64/base/identity' );
var cidentityf = require( '@stdlib/complex/float32/base/identity' );
var callbacks = require( '@stdlib/strided/base/mskunary-signature-callbacks' );

// Get the list of supported strided array data types:
var dt = dtypes();

// Generate masked unary interface signatures:
var sigs = signatures( dt, dt );

// Define a callback table:
var table = {
    'default': identity,
    'complex64': cidentityf,
    'complex128': cidentity
};

// Generate a list of callbacks according to type promotion rules:
var clbks = callbacks( table, sigs );
// returns [...]
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/strided/base/mskunary-dtype-signatures`][@stdlib/strided/base/mskunary-dtype-signatures]</span><span class="delimiter">: </span><span class="description">generate a list of masked unary interface signatures from strided array data types.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/promotion-rules]: https://github.com/stdlib-js/ndarray-promotion-rules

<!-- <related-links> -->

[@stdlib/strided/base/mskunary-dtype-signatures]: https://github.com/stdlib-js/strided/tree/main/base/mskunary-dtype-signatures

<!-- </related-links> -->

</section>

<!-- /.links -->
