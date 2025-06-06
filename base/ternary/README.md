<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# Ternary

> Apply a ternary callback to strided input array elements and assign results to elements in a strided output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ternary = require( '@stdlib/strided/base/ternary' );
```

#### ternary( arrays, shape, strides, fcn )

Applies a ternary callback to strided input array elements and assigns results to elements in a strided output array.

```javascript
var add = require( '@stdlib/number/float64/base/add3' );
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

ternary( [ x, y, z, w ], [ x.length ], [ 1, 1, 1, 1 ], add );
// w => <Float64Array>[ 3.0, 6.0, 9.0, 12.0, 15.0 ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing three strided input arrays and one strided output array.
-   **shape**: array-like object containing a single element, the number of indexed elements.
-   **strides**: array-like object containing the stride lengths for the strided input and output arrays.
-   **fcn**: ternary function to apply.

The `shape` and `strides` parameters determine which elements in the strided input and output arrays are accessed at runtime. For example, to index every other value in the strided input arrays and to index the first `N` elements of the strided output array in reverse order,

```javascript
var add = require( '@stdlib/number/float64/base/add3' );
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

ternary( [ x, y, z, w ], [ 3 ], [ 2, 2, 2, -1 ], add );
// w => <Float64Array>[ 15.0, 9.0, 3.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var add = require( '@stdlib/number/float64/base/add3' );
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var z0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var w0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var z1 = new Float64Array( z0.buffer, z0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var w1 = new Float64Array( w0.buffer, w0.BYTES_PER_ELEMENT*3 ); // start at 4th element

ternary( [ x1, y1, z1, w1 ], [ 3 ], [ -2, -2, -2, 1 ], add );
// w0 => <Float64Array>[ 0.0, 0.0, 0.0, 18.0, 12.0, 6.0 ]
```

#### ternary.ndarray( arrays, shape, strides, offsets, fcn )

Applies a ternary callback to strided input array elements and assigns results to elements in a strided output array using alternative indexing semantics.

<!-- eslint-disable max-len -->

```javascript
var add = require( '@stdlib/number/float64/base/add3' );
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

ternary.ndarray( [ x, y, z, w ], [ x.length ], [ 1, 1, 1, 1 ], [ 0, 0, 0, 0 ], add );
// w => <Float64Array>[ 3.0, 6.0, 9.0, 12.0, 15.0 ]
```

The function accepts the following additional arguments:

-   **offsets**: array-like object containing the starting indices (i.e., index offsets) for the strided input and output arrays.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsets` parameter supports indexing semantics based on starting indices. For example, to index every other value in the strided input arrays starting from the second value and to index the last `N` elements in the strided output array,

<!-- eslint-disable max-len -->

```javascript
var add = require( '@stdlib/number/float64/base/add3' );
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

ternary.ndarray( [ x, y, z, w ], [ 3 ], [ 2, 2, 2, -1 ], [ 1, 1, 1, w.length-1 ], add );
// w => <Float64Array>[ 0.0, 0.0, 0.0, 18.0, 12.0, 6.0 ]
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
var filledarray = require( '@stdlib/array/filled' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var add = require( '@stdlib/number/float64/base/add3' );
var ternary = require( '@stdlib/strided/base/ternary' );

var N = 10;

var x = filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) );
console.log( x );

var y = filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) );
console.log( y );

var z = filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) );
console.log( z );

var w = filledarray( 0.0, N, 'generic' );
console.log( w );

var shape = [ N ];
var strides = [ 1, 1, 1, -1 ];
var offsets = [ 0, 0, 0, N-1 ];

ternary.ndarray( [ x, y, z, w ], shape, strides, offsets, add );
console.log( w );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/strided/base/binary`][@stdlib/strided/base/binary]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in strided input arrays and assign results to elements in a strided output array.</span>
-   <span class="package-name">[`@stdlib/strided/base/nullary`][@stdlib/strided/base/nullary]</span><span class="delimiter">: </span><span class="description">apply a nullary callback and assign results to elements in a strided output array.</span>
-   <span class="package-name">[`@stdlib/strided/base/quaternary`][@stdlib/strided/base/quaternary]</span><span class="delimiter">: </span><span class="description">apply a quaternary callback to strided input array elements and assign results to elements in a strided output array.</span>
-   <span class="package-name">[`@stdlib/strided/base/quinary`][@stdlib/strided/base/quinary]</span><span class="delimiter">: </span><span class="description">apply a quinary callback to strided input array elements and assign results to elements in a strided output array.</span>
-   <span class="package-name">[`@stdlib/strided/base/unary`][@stdlib/strided/base/unary]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a strided input array and assign results to elements in a strided output array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/strided/base/binary]: https://github.com/stdlib-js/strided/tree/main/base/binary

[@stdlib/strided/base/nullary]: https://github.com/stdlib-js/strided/tree/main/base/nullary

[@stdlib/strided/base/quaternary]: https://github.com/stdlib-js/strided/tree/main/base/quaternary

[@stdlib/strided/base/quinary]: https://github.com/stdlib-js/strided/tree/main/base/quinary

[@stdlib/strided/base/unary]: https://github.com/stdlib-js/strided/tree/main/base/unary

<!-- </related-links> -->

</section>

<!-- /.links -->
