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

# Base

> Base strided.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/strided/base' );
```

#### ns

Base strided.

```javascript
var o = ns;
// returns {...}
```

The following functions are currently exported:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`binaryAddonDispatch( addon, fallback )`][@stdlib/strided/base/binary-addon-dispatch]</span><span class="delimiter">: </span><span class="description">dispatch to a native add-on applying a binary function to two input strided arrays.</span>
-   <span class="signature">[`binaryDtypeSignatures( dtypes1, dtypes2, dtypes3[, options] )`][@stdlib/strided/base/binary-dtype-signatures]</span><span class="delimiter">: </span><span class="description">generate a list of binary interface signatures from strided array data types.</span>
-   <span class="signature">[`binarySignatureCallbacks( table, signatures )`][@stdlib/strided/base/binary-signature-callbacks]</span><span class="delimiter">: </span><span class="description">assign callbacks to binary interfaces according to type promotion rules.</span>
-   <span class="signature">[`binary( arrays, shape, strides, fcn )`][@stdlib/strided/base/binary]</span><span class="delimiter">: </span><span class="description">apply a binary callback to strided input array elements and assign results to elements in a strided output array.</span>
-   <span class="signature">[`cmap( N, x, strideX, y, strideY, fcn )`][@stdlib/strided/base/cmap]</span><span class="delimiter">: </span><span class="description">apply a unary function to a single-precision floating-point strided input array and assign results to a single-precision floating-point strided output array.</span>
-   <span class="signature">[`dmap( N, x, strideX, y, strideY, fcn )`][@stdlib/strided/base/dmap]</span><span class="delimiter">: </span><span class="description">apply a unary function to a double-precision floating-point strided input array and assign results to a double-precision floating-point strided output array.</span>
-   <span class="signature">[`dmap2( N, x, strideX, y, strideY, z, strideZ, fcn )`][@stdlib/strided/base/dmap2]</span><span class="delimiter">: </span><span class="description">apply a binary function to double-precision floating-point strided input arrays and assign results to a double-precision floating-point strided output array.</span>
-   <span class="signature">[`dmskmap( N, x, strideX, mask, strideMask, y, strideY, fcn )`][@stdlib/strided/base/dmskmap]</span><span class="delimiter">: </span><span class="description">apply a unary function to a double-precision floating-point strided input array according to a strided mask array and assign results to a double-precision floating-point strided output array.</span>
-   <span class="signature">[`dmskmap2( N, x, strideX, y, strideY, mask, strideMask, z, strideZ, fcn )`][@stdlib/strided/base/dmskmap2]</span><span class="delimiter">: </span><span class="description">apply a binary function to double-precision floating-point strided input arrays according to a strided mask array and assign results to a double-precision floating-point strided output array.</span>
-   <span class="signature">[`dtypeEnum2Str( dtype )`][@stdlib/strided/base/dtype-enum2str]</span><span class="delimiter">: </span><span class="description">return the data type string associated with a strided array data type enumeration constant.</span>
-   <span class="signature">[`dtypeResolveEnum( dtype )`][@stdlib/strided/base/dtype-resolve-enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with a supported strided array data type value.</span>
-   <span class="signature">[`dtypeResolveStr( dtype )`][@stdlib/strided/base/dtype-resolve-str]</span><span class="delimiter">: </span><span class="description">return the data type string associated with a supported strided array data type value.</span>
-   <span class="signature">[`dtypeStr2Enum( dtype )`][@stdlib/strided/base/dtype-str2enum]</span><span class="delimiter">: </span><span class="description">return the enumeration constant associated with a strided array data type string.</span>
-   <span class="signature">[`mapBy( N, x, strideX, y, strideY, fcn, clbk[, thisArg] )`][@stdlib/strided/base/map-by]</span><span class="delimiter">: </span><span class="description">apply a unary function to each element retrieved from a strided input array according to a callback function and assign results to a strided output array.</span>
-   <span class="signature">[`mapBy2( N, x, strideX, y, strideY, z, strideZ, fcn, clbk[, thisArg] )`][@stdlib/strided/base/map-by2]</span><span class="delimiter">: </span><span class="description">apply a binary function to each pair of elements retrieved from strided input arrays according to a callback function and assign results to a strided output array.</span>
-   <span class="signature">[`maxViewBufferIndex( N, stride, offset )`][@stdlib/strided/base/max-view-buffer-index]</span><span class="delimiter">: </span><span class="description">return the maximum accessible index based on a set of provided strided array parameters.</span>
-   <span class="signature">[`metaDataProps( meta, dtypes, obj, bool )`][@stdlib/strided/base/meta-data-props]</span><span class="delimiter">: </span><span class="description">define non-enumerable read-only properties which expose strided array function meta data.</span>
-   <span class="signature">[`minViewBufferIndex( N, stride, offset )`][@stdlib/strided/base/min-view-buffer-index]</span><span class="delimiter">: </span><span class="description">return the minimum accessible index based on a set of provided strided array parameters.</span>
-   <span class="signature">[`mskunaryAddonDispatch( addon, fallback )`][@stdlib/strided/base/mskunary-addon-dispatch]</span><span class="delimiter">: </span><span class="description">dispatch to a native add-on applying a unary function to an input strided array according to a mask strided array.</span>
-   <span class="signature">[`mskunaryDtypeSignatures( dtypes1, dtypes2[, options] )`][@stdlib/strided/base/mskunary-dtype-signatures]</span><span class="delimiter">: </span><span class="description">generate a list of masked unary interface signatures from strided array data types.</span>
-   <span class="signature">[`mskunarySignatureCallbacks( table, signatures )`][@stdlib/strided/base/mskunary-signature-callbacks]</span><span class="delimiter">: </span><span class="description">assign callbacks to masked unary interfaces according to type promotion rules.</span>
-   <span class="signature">[`mskunary( arrays, shape, strides, fcn )`][@stdlib/strided/base/mskunary]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a strided input array according to elements in a strided mask array and assign results to elements in a strided output array.</span>
-   <span class="signature">[`nullaryAddonDispatch( addon, fallback )`][@stdlib/strided/base/nullary-addon-dispatch]</span><span class="delimiter">: </span><span class="description">dispatch to a native add-on applying a nullary function.</span>
-   <span class="signature">[`nullary( arrays, shape, strides, fcn )`][@stdlib/strided/base/nullary]</span><span class="delimiter">: </span><span class="description">apply a nullary callback and assign results to elements in a strided output array.</span>
-   <span class="signature">[`offsetView( x, offset )`][@stdlib/strided/base/offset-view]</span><span class="delimiter">: </span><span class="description">return a typed array view having the same data type as a provided input typed array and starting at a specified index offset.</span>
-   <span class="signature">[`quaternary( arrays, shape, strides, fcn )`][@stdlib/strided/base/quaternary]</span><span class="delimiter">: </span><span class="description">apply a quaternary callback to strided input array elements and assign results to elements in a strided output array.</span>
-   <span class="signature">[`quinary( arrays, shape, strides, fcn )`][@stdlib/strided/base/quinary]</span><span class="delimiter">: </span><span class="description">apply a quinary callback to strided input array elements and assign results to elements in a strided output array.</span>
-   <span class="signature">[`readDataView( N, view, strideView, out, strideOut, littleEndian )`][@stdlib/strided/base/read-dataview]</span><span class="delimiter">: </span><span class="description">copy elements from an input strided `DataView` to elements in an output strided array.</span>
-   <span class="signature">[`reinterpretBoolean( x, offset )`][@stdlib/strided/base/reinterpret-boolean]</span><span class="delimiter">: </span><span class="description">reinterpret a `BooleanArray` as a `Uint8Array`.</span>
-   <span class="signature">[`reinterpretComplex( x, offset )`][@stdlib/strided/base/reinterpret-complex]</span><span class="delimiter">: </span><span class="description">reinterpret a complex-valued floating-point array as a real-valued floating-point array having the same precision.</span>
-   <span class="signature">[`reinterpretComplex128( x, offset )`][@stdlib/strided/base/reinterpret-complex128]</span><span class="delimiter">: </span><span class="description">reinterpret a `Complex128Array` as a `Float64Array`.</span>
-   <span class="signature">[`reinterpretComplex64( x, offset )`][@stdlib/strided/base/reinterpret-complex64]</span><span class="delimiter">: </span><span class="description">reinterpret a `Complex64Array` as a `Float32Array`.</span>
-   <span class="signature">[`smap( N, x, strideX, y, strideY, fcn )`][@stdlib/strided/base/smap]</span><span class="delimiter">: </span><span class="description">apply a unary function to a single-precision floating-point strided input array and assign results to a single-precision floating-point strided output array.</span>
-   <span class="signature">[`smap2( N, x, strideX, y, strideY, z, strideZ, fcn )`][@stdlib/strided/base/smap2]</span><span class="delimiter">: </span><span class="description">apply a binary function to single-precision floating-point strided input arrays and assign results to a single-precision floating-point strided output array.</span>
-   <span class="signature">[`smskmap( N, x, strideX, mask, strideMask, y, strideY, fcn )`][@stdlib/strided/base/smskmap]</span><span class="delimiter">: </span><span class="description">apply a unary function to a single-precision floating-point strided input array according to a strided mask array and assign results to a single-precision floating-point strided output array.</span>
-   <span class="signature">[`smskmap2( N, x, strideX, y, strideY, mask, strideMask, z, strideZ, fcn )`][@stdlib/strided/base/smskmap2]</span><span class="delimiter">: </span><span class="description">apply a binary function to single-precision floating-point strided input arrays according to a strided mask array and assign results to a single-precision floating-point strided output array.</span>
-   <span class="signature">[`stride2offset( N, stride )`][@stdlib/strided/base/stride2offset]</span><span class="delimiter">: </span><span class="description">determine the index offset which specifies the location of the first indexed value in a strided array.</span>
-   <span class="signature">[`strided2object( N, x, stride, offset )`][@stdlib/strided/base/strided2object]</span><span class="delimiter">: </span><span class="description">convert a strided array and associated metadata to an object likely to have the same "shape".</span>
-   <span class="signature">[`ternary( arrays, shape, strides, fcn )`][@stdlib/strided/base/ternary]</span><span class="delimiter">: </span><span class="description">apply a ternary callback to strided input array elements and assign results to elements in a strided output array.</span>
-   <span class="signature">[`unaryAddonDispatch( addon, fallback )`][@stdlib/strided/base/unary-addon-dispatch]</span><span class="delimiter">: </span><span class="description">dispatch to a native add-on applying a unary function to an input strided array.</span>
-   <span class="signature">[`unaryBy( arrays, shape, strides, fcn, clbk[, thisArg] )`][@stdlib/strided/base/unary-by]</span><span class="delimiter">: </span><span class="description">apply a unary function to each element retrieved from a strided input array according to a callback function and assign results to a strided output array.</span>
-   <span class="signature">[`unaryDtypeSignatures( dtypes1, dtypes2[, options] )`][@stdlib/strided/base/unary-dtype-signatures]</span><span class="delimiter">: </span><span class="description">generate a list of unary interface signatures from strided array data types.</span>
-   <span class="signature">[`unarySignatureCallbacks( table, signatures )`][@stdlib/strided/base/unary-signature-callbacks]</span><span class="delimiter">: </span><span class="description">assign callbacks to unary interfaces according to type promotion rules.</span>
-   <span class="signature">[`unary( arrays, shape, strides, fcn )`][@stdlib/strided/base/unary]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a strided input array and assign results to elements in a strided output array.</span>
-   <span class="signature">[`writeDataView( N, x, strideX, view, strideView, littleEndian )`][@stdlib/strided/base/write-dataview]</span><span class="delimiter">: </span><span class="description">copy elements from an input strided array to elements in a strided `DataView`.</span>
-   <span class="signature">[`zmap( N, x, strideX, y, strideY, fcn )`][@stdlib/strided/base/zmap]</span><span class="delimiter">: </span><span class="description">apply a unary function to a double-precision floating-point strided input array and assign results to a double-precision floating-point strided output array.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/strided/base' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/strided/base/binary-addon-dispatch]: https://github.com/stdlib-js/strided/tree/main/base/binary-addon-dispatch

[@stdlib/strided/base/binary-dtype-signatures]: https://github.com/stdlib-js/strided/tree/main/base/binary-dtype-signatures

[@stdlib/strided/base/binary-signature-callbacks]: https://github.com/stdlib-js/strided/tree/main/base/binary-signature-callbacks

[@stdlib/strided/base/binary]: https://github.com/stdlib-js/strided/tree/main/base/binary

[@stdlib/strided/base/cmap]: https://github.com/stdlib-js/strided/tree/main/base/cmap

[@stdlib/strided/base/dmap]: https://github.com/stdlib-js/strided/tree/main/base/dmap

[@stdlib/strided/base/dmap2]: https://github.com/stdlib-js/strided/tree/main/base/dmap2

[@stdlib/strided/base/dmskmap]: https://github.com/stdlib-js/strided/tree/main/base/dmskmap

[@stdlib/strided/base/dmskmap2]: https://github.com/stdlib-js/strided/tree/main/base/dmskmap2

[@stdlib/strided/base/dtype-enum2str]: https://github.com/stdlib-js/strided/tree/main/base/dtype-enum2str

[@stdlib/strided/base/dtype-resolve-enum]: https://github.com/stdlib-js/strided/tree/main/base/dtype-resolve-enum

[@stdlib/strided/base/dtype-resolve-str]: https://github.com/stdlib-js/strided/tree/main/base/dtype-resolve-str

[@stdlib/strided/base/dtype-str2enum]: https://github.com/stdlib-js/strided/tree/main/base/dtype-str2enum

[@stdlib/strided/base/map-by]: https://github.com/stdlib-js/strided/tree/main/base/map-by

[@stdlib/strided/base/map-by2]: https://github.com/stdlib-js/strided/tree/main/base/map-by2

[@stdlib/strided/base/max-view-buffer-index]: https://github.com/stdlib-js/strided/tree/main/base/max-view-buffer-index

[@stdlib/strided/base/meta-data-props]: https://github.com/stdlib-js/strided/tree/main/base/meta-data-props

[@stdlib/strided/base/min-view-buffer-index]: https://github.com/stdlib-js/strided/tree/main/base/min-view-buffer-index

[@stdlib/strided/base/mskunary-addon-dispatch]: https://github.com/stdlib-js/strided/tree/main/base/mskunary-addon-dispatch

[@stdlib/strided/base/mskunary-dtype-signatures]: https://github.com/stdlib-js/strided/tree/main/base/mskunary-dtype-signatures

[@stdlib/strided/base/mskunary-signature-callbacks]: https://github.com/stdlib-js/strided/tree/main/base/mskunary-signature-callbacks

[@stdlib/strided/base/mskunary]: https://github.com/stdlib-js/strided/tree/main/base/mskunary

[@stdlib/strided/base/nullary-addon-dispatch]: https://github.com/stdlib-js/strided/tree/main/base/nullary-addon-dispatch

[@stdlib/strided/base/nullary]: https://github.com/stdlib-js/strided/tree/main/base/nullary

[@stdlib/strided/base/offset-view]: https://github.com/stdlib-js/strided/tree/main/base/offset-view

[@stdlib/strided/base/quaternary]: https://github.com/stdlib-js/strided/tree/main/base/quaternary

[@stdlib/strided/base/quinary]: https://github.com/stdlib-js/strided/tree/main/base/quinary

[@stdlib/strided/base/read-dataview]: https://github.com/stdlib-js/strided/tree/main/base/read-dataview

[@stdlib/strided/base/reinterpret-boolean]: https://github.com/stdlib-js/strided/tree/main/base/reinterpret-boolean

[@stdlib/strided/base/reinterpret-complex]: https://github.com/stdlib-js/strided/tree/main/base/reinterpret-complex

[@stdlib/strided/base/reinterpret-complex128]: https://github.com/stdlib-js/strided/tree/main/base/reinterpret-complex128

[@stdlib/strided/base/reinterpret-complex64]: https://github.com/stdlib-js/strided/tree/main/base/reinterpret-complex64

[@stdlib/strided/base/smap]: https://github.com/stdlib-js/strided/tree/main/base/smap

[@stdlib/strided/base/smap2]: https://github.com/stdlib-js/strided/tree/main/base/smap2

[@stdlib/strided/base/smskmap]: https://github.com/stdlib-js/strided/tree/main/base/smskmap

[@stdlib/strided/base/smskmap2]: https://github.com/stdlib-js/strided/tree/main/base/smskmap2

[@stdlib/strided/base/stride2offset]: https://github.com/stdlib-js/strided/tree/main/base/stride2offset

[@stdlib/strided/base/strided2object]: https://github.com/stdlib-js/strided/tree/main/base/strided2object

[@stdlib/strided/base/ternary]: https://github.com/stdlib-js/strided/tree/main/base/ternary

[@stdlib/strided/base/unary-addon-dispatch]: https://github.com/stdlib-js/strided/tree/main/base/unary-addon-dispatch

[@stdlib/strided/base/unary-by]: https://github.com/stdlib-js/strided/tree/main/base/unary-by

[@stdlib/strided/base/unary-dtype-signatures]: https://github.com/stdlib-js/strided/tree/main/base/unary-dtype-signatures

[@stdlib/strided/base/unary-signature-callbacks]: https://github.com/stdlib-js/strided/tree/main/base/unary-signature-callbacks

[@stdlib/strided/base/unary]: https://github.com/stdlib-js/strided/tree/main/base/unary

[@stdlib/strided/base/write-dataview]: https://github.com/stdlib-js/strided/tree/main/base/write-dataview

[@stdlib/strided/base/zmap]: https://github.com/stdlib-js/strided/tree/main/base/zmap

<!-- </toc-links> -->

</section>

<!-- /.links -->
