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

# strided2object

> Convert a strided array and associated metadata to an object likely to have the same "shape".

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var strided2object = require( '@stdlib/strided/base/strided2object' );
```

#### strided2object( N, x, stride, offset )

Converts a strided array and associated metadata to an object likely to have the same "shape".

```javascript
var obj = strided2object( 4, [ 1, 2, 3, 4 ], 1, 0 );
// returns {...}
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The returned object has the following properties:

    -   **data**: reference to the input array.
    -   **dtype**: input array data type. If unable to resolve the [data type][@stdlib/array/dtype] of the input array, the property value is `null`.
    -   **length**: number of indexed elements.
    -   **stride**: index increment.
    -   **offset**: starting index.
    -   **accessorProtocol**: `boolean` indicating whether the input uses accessors for getting and setting elements.
    -   **accessors**: a two-element array whose first element is an accessor for retrieving an array element (i.e., a getter) and whose second element is an accessor for setting an array element (i.e., a setter).

-   The getter accessor accepts two arguments:

    -   **data**: input array.
    -   **idx**: element index.

-   The setter accessor accepts three arguments:

    -   **data**: input array.
    -   **idx**: element index.
    -   **value**: value to set.

-   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding strided array metadata to ensure that internal functions operating on strided arrays are provided consistent argument "shapes".

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var strided2object = require( '@stdlib/strided/base/strided2object' );

// Create an array:
var x = new Complex64Array( 10 );

// Convert to a standardized object:
var obj = strided2object( x.length, x, 1, 0 );
// returns {...}

console.log( obj );
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

[@stdlib/array/dtype]: https://github.com/stdlib-js/array-dtype

</section>

<!-- /.links -->
