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

<!-- lint disable maximum-heading-length -->

# readDataView

> Copy elements from an input strided [`DataView`][@stdlib/array/dataview] to elements in an output strided array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var readDataView = require( '@stdlib/strided/base/read-dataview' );
```

#### readDataView( N, view, strideView, out, strideOut, littleEndian )

Copies elements from an input strided [`DataView`][@stdlib/array/dataview] to elements in an output strided array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var DataView = require( '@stdlib/array/dataview' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var view = new DataView( x.buffer );

var y = new Float64Array( x.length );
var out = readDataView( x.length, view, 8, y, 1, true );
// e.g., returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]

var bool = ( out === y );
// returns true
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **view**: input [`DataView`][@stdlib/array/dataview].
-   **strideView**: index increment (in bytes) for `view`.
-   **out**: output strided array.
-   **strideOut**: index increment for `out`.
-   **littleEndian**: boolean indicating whether to store values in little-endian format.

The `N` and stride parameters determine which elements in `view` and `out` are accessed at runtime. For example, to index the first `N` elements of `view` in reverse order and to index every other value in `out`,

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var DataView = require( '@stdlib/array/dataview' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var view = new DataView( x.buffer );

var y = new Float64Array( x.length*2 );
var out = readDataView( x.length, view, -8, y, 2, true );
// e.g., returns <Float64Array>[ 4.0, 0.0, 3.0, 0.0, 2.0, 0.0, 1.0, 0.0 ]

var bool = ( out === y );
// returns true
```

Note that indexing is relative to the first index. To introduce an offset, use typed array views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var DataView = require( '@stdlib/array/dataview' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var view = new DataView( x.buffer );

// Initial output array:
var y0 = new Float64Array( x.length+1 );

// Create an offset view:
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var out = readDataView( x.length, view, 8, y1, 1, true );
// e.g., returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]

var bool = ( out === y1 );
// returns true
```

#### readDataView.ndarray( N, view, strideView, offsetView, out, strideOut, offsetOut, littleEndian )

Copies elements from an input strided [`DataView`][@stdlib/array/dataview] to elements in an output strided array using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var DataView = require( '@stdlib/array/dataview' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var view = new DataView( x.buffer );

var y = new Float64Array( x.length );
var out = readDataView.ndarray( x.length, view, 8, 0, y, 1, 0, true );
// e.g., returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]

var bool = ( out === y );
// returns true
```

The function accepts the following additional arguments:

-   **offsetView**: starting index (in bytes) for `view`.
-   **offsetOut**: starting index for `out`.

While typed array views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to index the last `N` elements in `view` in reverse order and to index every other value in `out` starting from the second value,

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var DataView = require( '@stdlib/array/dataview' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var view = new DataView( x.buffer );

var y = new Float64Array( x.length*2 );
var out = readDataView.ndarray( x.length, view, -8, 24, y, 2, 1, true );
// e.g., returns <Float64Array>[ 0.0, 4.0, 0.0, 3.0, 0.0, 2.0, 0.0, 1.0 ]

var bool = ( out === y );
// returns true
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
var DataView = require( '@stdlib/array/dataview' );
var typedarray = require( '@stdlib/array/typed' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var IS_LITTLE_ENDIAN = require( '@stdlib/assert/is-little-endian' );
var logEach = require( '@stdlib/console/log-each' );
var readDataView = require( '@stdlib/strided/base/read-dataview' );

// Specify the array data type:
var dtype = 'float64';

// Resolve the number of bytes per element:
var nbytes = bytesPerElement( dtype );

// Generate an array of random numbers:
var x = discreteUniform( 10, 0, 100, {
    'dtype': dtype
});

// Create a DataView:
var view = new DataView( x.buffer );

// Create an output array:
var out = typedarray( x.length, dtype );

// Read elements from the DataView according to host byte order:
readDataView( out.length, view, nbytes, out, 1, IS_LITTLE_ENDIAN );

// Print the results:
logEach( '%d -> %d', x, out );

// Read elements from the DataView according to the opposite byte order:
readDataView( out.length, view, nbytes, out, 1, !IS_LITTLE_ENDIAN );

// Print the results:
logEach( '%d -> %d', x, out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/dataview]: https://github.com/stdlib-js/array-dataview

</section>

<!-- /.links -->
