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

# writeDataView

> Copy elements from an input strided array to elements in a strided [`DataView`][@stdlib/array/dataview].

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var writeDataView = require( '@stdlib/strided/base/write-dataview' );
```

#### writeDataView( N, x, strideX, view, strideView, littleEndian )

Copies elements from an input strided array to elements in a strided [`DataView`][@stdlib/array/dataview].

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );
var DataView = require( '@stdlib/array/dataview' );

var x = [ 1.0, 2.0, 3.0, 4.0 ];

var buf = new ArrayBuffer( 32 );
var view = new DataView( buf );

var out = writeDataView( 4, x, 1, view, 8, true );
// returns <DataView>

var bool = ( out === view );
// returns true

var v = view.getFloat64( 0, true );
// returns 1.0

v = view.getFloat64( 8, true );
// returns 2.0
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input strided array.
-   **strideX**: index increment for `x`.
-   **view**: output [`DataView`][@stdlib/array/dataview].
-   **strideView**: index increment (in bytes) for `view`.
-   **littleEndian**: boolean indicating whether to store values in little-endian format.

The `N` and stride parameters determine which elements in `x` and `view` are accessed at runtime. For example, to index every other value in `x` and to index the first `N` elements of `view` in reverse order,

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );
var DataView = require( '@stdlib/array/dataview' );

var x = [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0 ];

var buf = new ArrayBuffer( 64 );
var view = new DataView( buf );

var out = writeDataView( 4, x, 2, view, -8, true );
// returns <DataView>

var bool = ( out === view );
// returns true

var v = view.getFloat64( 0, true );
// returns 4.0

v = view.getFloat64( 8, true );
// returns 3.0
```

Note that indexing is relative to the first index. To introduce an offset, use typed array views.

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );
var DataView = require( '@stdlib/array/dataview' );
var Float32Array = require( '@stdlib/array/float32' );

// Initial array:
var x0 = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

// Create an offset view:
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Create an output DataView:
var buf = new ArrayBuffer( 64 );
var view = new DataView( buf );

var out = writeDataView( 4, x1, 1, view, 8, true );
// returns <DataView>

var bool = ( out === view );
// returns true

var v = view.getFloat32( 0, true );
// returns 2.0

v = view.getFloat32( 8, true );
// returns 3.0
```

#### writeDataView.ndarray( N, x, strideX, offsetX, view, strideView, offsetView, littleEndian )

Copies elements from an input strided array to elements in a strided [`DataView`][@stdlib/array/dataview] using alternative indexing semantics.

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );
var DataView = require( '@stdlib/array/dataview' );

var x = [ 1.0, 2.0, 3.0, 4.0 ];

var buf = new ArrayBuffer( 32 );
var view = new DataView( buf );

var out = writeDataView.ndarray( 4, x, 1, 0, view, 8, 0, true );
// returns <DataView>

var bool = ( out === view );
// returns true

var v = view.getFloat64( 0, true );
// returns 1.0
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetView**: starting index (in bytes) for `view`.

While typed array views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `view` in reverse order,

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );
var DataView = require( '@stdlib/array/dataview' );

var x = [ 0.0, 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0 ];

var buf = new ArrayBuffer( 64 );
var view = new DataView( buf );

var out = writeDataView.ndarray( 4, x, 2, 1, view, -8, 56, true );
// returns <DataView>

var bool = ( out === view );
// returns true

var v = view.getFloat64( 32, true );
// returns 4.0

v = view.getFloat64( 40, true );
// returns 3.0
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
var ArrayBuffer = require( '@stdlib/array/buffer' );
var DataView = require( '@stdlib/array/dataview' );
var typedarray = require( '@stdlib/array/typed' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var IS_LITTLE_ENDIAN = require( '@stdlib/assert/is-little-endian' );
var logEach = require( '@stdlib/console/log-each' );
var writeDataView = require( '@stdlib/strided/base/write-dataview' );

// Specify the array data type:
var dtype = 'float64';

// Resolve the number of bytes per element:
var nbytes = bytesPerElement( dtype );

// Generate an array of random numbers:
var x = discreteUniform( 10, 0, 100, {
    'dtype': dtype
});

// Create a DataView:
var buf = new ArrayBuffer( x.length*nbytes );
var view = new DataView( buf );

// Copy the numbers to the DataView:
writeDataView( x.length, x, 1, view, nbytes, IS_LITTLE_ENDIAN );

// Create a view of the DataView:
var y = typedarray( view.buffer, dtype );

// Print the results:
logEach( '%d -> %d', x, y );
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
