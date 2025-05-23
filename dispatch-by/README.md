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

# dispatchBy

> Create a strided array function interface which accepts a callback function and performs multiple dispatch.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dispatchBy = require( '@stdlib/strided/dispatch-by' );
```

#### dispatchBy( fcns, types, data, nargs, nin, nout )

Returns a strided array function interface which accepts a callback function and performs multiple dispatch.

<!-- eslint-disable array-element-newline -->

```javascript
var unaryBy = require( '@stdlib/strided/base/unary-by' );
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );

function foo( x ) {
    return x * 10.0;
}

function bar( x ) {
    return x * 5.0;
}

// Define a list of strided array functions for applying a unary callback:
var fcns = [
    unaryBy,
    unaryBy
];

// Define a one-dimensional list of input and output array types:
var types = [
    'float64', 'float64', // input, output
    'float32', 'float32'  // input, output
];

// Define a list of callbacks which should be applied based on the provided array types:
var data = [
    foo,
    bar
];

// Define the total number of input arguments:
var nargs = 8; // N + input_array_dtype + input_array + input_array_stride + output_array_dtype + output_array + output_array_stride + callback

// Define the number of input strided arrays:
var nin = 1;

// Define the number of output strided arrays:
var nout = 1;

// Create a strided array function interface:
var strided = dispatchBy( fcns, types, data, nargs, nin, nout );

// ...

function accessor( v ) {
    return v * 2.0;
}

var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
var y = new Float64Array( x.length );

strided( x.length, 'float64', x, 1, 'float64', y, 1, accessor );
// y => <Float64Array>[ 20.0, 40.0, 60.0 ]

x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
y = new Float32Array( x.length );

strided( x.length, 'float32', x, 1, 'float32', y, 1, accessor );
// y => <Float32Array>[ 10.0, 20.0, 30.0 ]
```

The function accepts the following arguments:

-   **fcns**: list of strided array functions.
-   **types**: one-dimensional list of strided array argument [data types][@stdlib/strided/dtypes]. The length of `types` must be the number of strided array functions multiplied by `nin+nout`. If `fcns` is a function, rather than a list, the number of strided array functions is computed as `types.length / (nin+nout)`.
-   **data**: strided array function data (e.g., callbacks). If a list, the length of `data` must equal the number of strided array functions. If `null`, a returned strided array function interface does **not** provide a `data` argument to an invoked strided array function.
-   **nargs**: total number of strided array function interface arguments (including data types, strides, offsets, and the callback function).
-   **nin**: number of input strided arrays.
-   **nout**: number of output strided arrays.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Without offsets, a returned strided array function interface has the following signature:

    ```text
    f( N, dtypeX, x, strideX, dtypeY, y, strideY, ..., clbk[, thisArg] )
    ```

    where

    -   **N**: number of indexed elements.
    -   **dtypeX**: [data type][@stdlib/strided/dtypes] for `x`.
    -   **x**: strided array.
    -   **strideX**: index increment for `x`.
    -   **dtypeY**: [data type][@stdlib/strided/dtypes] for `y`.
    -   **y**: strided array.
    -   **strideY**: index increment for `y`.
    -   **...**: additional strided arrays and associated [data types][@stdlib/strided/dtypes] and strides.
    -   **clbk**: callback function.
    -   **thisArg**: callback function execution context.

-   The number of strided array function interface parameters is derived from `nargs`, the number of input strided arrays is derived from `nin`, and the number of output strided arrays is derived from `nout`.

-   Without offsets, the number of parameters must obey the following relation:

    ```text
    nargs = 3*(nout+nin) + 2
    ```

-   With offsets, the number of parameters must obey the following relation:

    ```text
    nargs = 4*(nout+nin) + 2
    ```

-   With offsets, a returned strided array function interface has the following signature:

    ```text
    f( N, dtypeX, x, strideX, offsetX, dtypeY, y, strideY, offsetY, ..., clbk[, thisArg] )
    ```

    where

    -   **N**: number of indexed elements.
    -   **dtypeX**: [data type][@stdlib/strided/dtypes] for `x`.
    -   **x**: strided array.
    -   **strideX**: index increment for `x`.
    -   **offsetX**: starting index for `x`.
    -   **dtypeY**: [data type][@stdlib/strided/dtypes] for `y`.
    -   **y**: strided array.
    -   **strideY**: index increment for `y`.
    -   **offsetY**: starting index for `y`.
    -   **...**: additional strided arrays and associated [data types][@stdlib/strided/dtypes], strides, and offsets.
    -   **clbk**: callback function.
    -   **thisArg**: callback function execution context.

    The choice of which strided array function interface to return depends on the use case. The former is suitable for typed array views; while the latter affords alternative indexing semantics more suitable for n-dimensional arrays (ndarrays).

-   Without offsets, a strided array function (i.e., a value provided for the `fcns` argument) should have the following signature:

    ```text
    f( arrays, shape, strides, [data, ]clbk[, thisArg] )
    ```

    where

    -   **arrays**: array containing strided input and output arrays.
    -   **shape**: array containing a single element, the number of indexed elements.
    -   **strides**: array containing the stride lengths for the strided input and output arrays.
    -   **data**: strided array function data (e.g., a callback).
    -   **clbk**: callback function.
    -   **thisArg**: callback function execution context.

-   With offsets, a strided array function should have the following signature:

    ```text
    f( arrays, shape, strides, offsets, [data, ]clbk[, thisArg] )
    ```

    where

    -   **offsets**: array containing the starting indices (i.e., index offsets) for the strided input and output arrays.

-   For convenience, a single strided array function may be provided which will be invoked whenever the strided array argument data types match a sequence of types in `types`. Providing a single strided array function is particularly convenient for the case where, regardless of array data types, traversing arrays remains the same, but the strided array function `data` differs (e.g., callbacks which differ based on the array data types). For example, the following

    <!-- eslint-disable array-element-newline -->

    ```javascript
    var unaryBy = require( '@stdlib/strided/base/unary-by' );

    function foo( x ) {
        return x * 10.0;
    }

    function bar( x ) {
        return x * 5.0;
    }

    function accessor( v ) {
        return v;
    }

    var fcns = [
        unaryBy,
        unaryBy
    ];
    var types = [
        'float64', 'float64',
        'float32', 'float32'
    ];
    var data = [
        foo,
        bar
    ];

    var strided = dispatchBy( fcns, types, data, 8, 1, 1 );
    ```

    is equivalent to

    <!-- eslint-disable array-element-newline -->

    ```javascript
    var unaryBy = require( '@stdlib/strided/base/unary-by' );

    function foo( x ) {
        return x * 10.0;
    }

    function bar( x ) {
        return x * 5.0;
    }

    function accessor( v ) {
        return v;
    }

    var types = [
        'float64', 'float64',
        'float32', 'float32'
    ];
    var data = [
        foo,
        bar
    ];

    var strided = dispatchBy( unaryBy, types, data, 8, 1, 1 );
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var unaryBy = require( '@stdlib/strided/base/unary-by' ).ndarray;
var abs = require( '@stdlib/math/base/special/abs' );
var identity = require( '@stdlib/number/float64/base/identity' );
var Float64Array = require( '@stdlib/array/float64' );
var dispatchBy = require( '@stdlib/strided/dispatch-by' );

var types = [ 'float64', 'float64' ];

var data = [
    abs
];

var strided = dispatchBy( unaryBy, types, data, 10, 1, 1 );

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

strided( 3, 'float64', x, 1, 2, 'float64', y, 1, 2, identity );
console.log( y );
// => <Float64Array>[ 0.0, 0.0, 3.0, 4.0, 5.0 ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/strided/dispatch`][@stdlib/strided/dispatch]</span><span class="delimiter">: </span><span class="description">create a strided array function interface which performs multiple dispatch.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/strided/dtypes]: https://github.com/stdlib-js/strided/tree/main/dtypes

<!-- <related-links> -->

[@stdlib/strided/dispatch]: https://github.com/stdlib-js/strided/tree/main/dispatch

<!-- </related-links> -->

</section>

<!-- /.links -->
