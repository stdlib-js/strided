<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# reinterpret

> Reinterpret a [`BooleanArray`][@stdlib/array/bool] as a [`Uint8Array`][@stdlib/array/uint8].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var reinterpret = require( '@stdlib/strided/base/reinterpret-boolean' );
```

#### reinterpret( x, offset )

Returns a [`Uint8Array`][@stdlib/array/uint8] view of a [`BooleanArray`][@stdlib/array/bool].

```javascript
var BooleanArray = require( '@stdlib/array/bool' );

var x = new BooleanArray( 10 );

var view = reinterpret( x, 0 );
// returns <Uint8Array>

var bool = ( view.buffer === x.buffer );
// returns true

var len = view.length;
// returns 10
```

The `offset` argument specifies the starting index of the returned [`Uint8Array`][@stdlib/array/uint8] view relative to the [`BooleanArray`][@stdlib/array/bool].

```javascript
var BooleanArray = require( '@stdlib/array/bool' );

var x = new BooleanArray( [ true, false, false, true, true, false ] );

var view = reinterpret( x, 2 );
// returns <Uint8Array>

var len = view.length;
// returns 4

var v = view[ 0 ];
// returns 0

v = view[ 1 ];
// returns 1
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

<!-- eslint no-undef: "error" -->

```javascript
var BooleanArray = require( '@stdlib/array/bool' );
var reinterpret = require( '@stdlib/strided/base/reinterpret-boolean' );

// Define a boolean array:
var x = new BooleanArray( [ true, false, false, true, true, false ] );
// returns <BooleanArray>

// Reinterpret as a `uint8` array:
var view = reinterpret( x, 0 );
// returns <Uint8Array>

// Set view elements:
view[ 0 ] = 0;
view[ 1 ] = 1;

// Get the first element of the boolean array:
var v = x.get( 0 );
// returns false

// Get the second element of the boolean array:
v = x.get( 1 );
// returns true
```

</section>

<!-- /.examples -->

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

[@stdlib/array/bool]: https://github.com/stdlib-js/array-bool

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8

</section>

<!-- /.links -->
