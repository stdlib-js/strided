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

# str2enum

> Return the enumeration constant associated with a strided array data type string.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var str2enum = require( '@stdlib/strided/base/dtype-str2enum' );
```

#### str2enum( dtype )

Returns the enumeration constant associated with a strided array data type `string`.

```javascript
var v = str2enum( 'float64' );
// returns <number>
```

If unable to resolve an enumeration constant, the function returns `null`.

```javascript
var v = str2enum( 'beep' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Downstream consumers of this function should **not** rely on specific integer values (e.g., `INT8 == 0`). Instead, the function should be used in an opaque manner.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var str2enum = require( '@stdlib/strided/base/dtype-str2enum' );

var v = str2enum( 'float64' );
// returns <number>

v = str2enum( 'float32' );
// returns <number>

v = str2enum( 'int32' );
// returns <number>

v = str2enum( 'int16' );
// returns <number>

v = str2enum( 'int8' );
// returns <number>

v = str2enum( 'uint32' );
// returns <number>

v = str2enum( 'uint16' );
// returns <number>

v = str2enum( 'uint8' );
// returns <number>
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

-   <span class="package-name">[`@stdlib/strided/base/dtype-enum2str`][@stdlib/strided/base/dtype-enum2str]</span><span class="delimiter">: </span><span class="description">return the data type string associated with a strided array data type enumeration constant.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/strided/base/dtype-enum2str]: https://github.com/stdlib-js/strided/tree/main/base/dtype-enum2str

<!-- </related-links> -->

</section>

<!-- /.links -->
