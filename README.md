<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# LOWESS

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Locally-weighted polynomial regression via the LOWESS algorithm.



<section class="usage">

## Usage

To use in Observable,

```javascript
lowess = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-lowess@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var lowess = require( 'path/to/vendor/umd/stats-lowess/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-lowess@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.lowess;
})();
</script>
```

#### lowess( x, y\[, opts] )

For [input arrays][mdn-array] and/or [typed arrays][mdn-typed-array] `x` and `y`, the function returns an object holding the ordered input values `x` and smoothed values for `y`.

<!-- eslint-disable array-element-newline -->

```javascript
var x = [
    4, 4, 7, 7, 8, 9, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14,
    14, 14, 14, 15, 15, 15, 16, 16, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 20,
    20, 20, 20, 20, 22, 23, 24, 24, 24, 24, 25
];
var y = [
    2, 10, 4, 22, 16, 10, 18, 26, 34, 17, 28, 14, 20, 24, 28, 26, 34, 34, 46,
    26, 36, 60, 80, 20, 26, 54, 32, 40, 32, 40, 50, 42, 56, 76, 84, 36, 46, 68,
    32, 48, 52, 56, 64, 66, 54, 70, 92, 93, 120, 85
];

var out = lowess( x, y );
/* returns
    {
        'x': [
            4,
            4,
            7,
            7,
            ...,
            24,
            24,
            24,
            25
        ],
        'y': [
            ~4.857,
            ~4.857,
            ~13.1037,
            ~13.1037,
            ...,
            ~79.102,
            ~79.102,
            ~79.102,
            ~84.825
        ]
    }
*/
```

The function accepts the following `options`:

-   **f**: positive `number` specifying the smoothing span, i.e., the proportion of points which influence smoothing at each value. Larger values correspond to more smoothing. Default: `2/3`.
-   **nsteps**: `number` of iterations in the robust fit (fewer iterations translates to faster function execution). If set to zero, the nonrobust fit is returned. Default: `3`.
-   **delta**: nonnegative `number` which may be used to reduce the number of computations. Default: 1/100th of the range of `x`.
-   **sorted**: `boolean` indicating if the input array `x` is sorted. Default: `false`.

By default, smoothing at each value is determined by `2/3` of all other points. To choose a different smoothing span, set the `f` option.

<!-- eslint-disable array-element-newline -->

```javascript
var x = [
    4, 4, 7, 7, 8, 9, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14,
    14, 14, 14, 15, 15, 15, 16, 16, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 20,
    20, 20, 20, 20, 22, 23, 24, 24, 24, 24, 25
];
var y = [
    2, 10, 4, 22, 16, 10, 18, 26, 34, 17, 28, 14, 20, 24, 28, 26, 34, 34, 46,
    26, 36, 60, 80, 20, 26, 54, 32, 40, 32, 40, 50, 42, 56, 76, 84, 36, 46, 68,
    32, 48, 52, 56, 64, 66, 54, 70, 92, 93, 120, 85
];

var out = lowess( x, y, {
    'f': 0.2
});
/* returns
    {
        'x': [
            4,
            4,
            7,
            ...,
            24,
            24,
            25
        ],
        'y': [
            ~6.03,
            ~6.03,
            ~12.68,
            ...,
            ~82.575,
            ~82.575,
            ~93.028
        ]
    }
*/
```

By default, three iterations of locally weighted regression fits are calculated after the initial fit. To set a different number of iterations for the robust fit, set the `nsteps` option.

<!-- eslint-disable array-element-newline -->

```javascript
var x = [
    4, 4, 7, 7, 8, 9, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14,
    14, 14, 14, 15, 15, 15, 16, 16, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 20,
    20, 20, 20, 20, 22, 23, 24, 24, 24, 24, 25
];
var y = [
    2, 10, 4, 22, 16, 10, 18, 26, 34, 17, 28, 14, 20, 24, 28, 26, 34, 34, 46,
    26, 36, 60, 80, 20, 26, 54, 32, 40, 32, 40, 50, 42, 56, 76, 84, 36, 46, 68,
    32, 48, 52, 56, 64, 66, 54, 70, 92, 93, 120, 85
];

var out = lowess( x, y, {
    'nsteps': 20
});
/* returns
    {
        'x': [
            4,
            ...,
            25
        ],
        'y': [
            ~4.857,
            ...,
            ~84.825
        ]
    }
*/
```

To save computations, set the `delta` option. For cases where one has a large number of (x,y)-pairs, carrying out regression calculations for all points is not likely to be necessary. By default, `delta` is set to 1/100th of the range of the values in `x`. In this case, if the values in `x` were uniformly scattered over the entire range, the locally weighted regression would be calculated at approximately 100 points. On the other hand, for small data sets with less than 100 observations, one can safely set the option to zero so calculations are made for each data point.

<!-- eslint-disable array-element-newline -->

```javascript
var x = [
    4, 4, 7, 7, 8, 9, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14,
    14, 14, 14, 15, 15, 15, 16, 16, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 20,
    20, 20, 20, 20, 22, 23, 24, 24, 24, 24, 25
];
var y = [
    2, 10, 4, 22, 16, 10, 18, 26, 34, 17, 28, 14, 20, 24, 28, 26, 34, 34, 46,
    26, 36, 60, 80, 20, 26, 54, 32, 40, 32, 40, 50, 42, 56, 76, 84, 36, 46, 68,
    32, 48, 52, 56, 64, 66, 54, 70, 92, 93, 120, 85
];

var out = lowess( x, y, {
    'delta': 0.0
});
/* returns
    {
        'x': [
            4,
            ...,
            25
        ],
        'y': [
            ~4.857,
            ...,
            ~84.825
        ]
    }
*/
```

If the elements of `x` are sorted in ascending order, set the `sorted` option to `true`.

<!-- eslint-disable array-element-newline -->

```javascript
var x = [
    4, 4, 7, 7, 8, 9, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14,
    14, 14, 14, 15, 15, 15, 16, 16, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 20,
    20, 20, 20, 20, 22, 23, 24, 24, 24, 24, 25
];
var y = [
    2, 10, 4, 22, 16, 10, 18, 26, 34, 17, 28, 14, 20, 24, 28, 26, 34, 34, 46,
    26, 36, 60, 80, 20, 26, 54, 32, 40, 32, 40, 50, 42, 56, 76, 84, 36, 46, 68,
    32, 48, 52, 56, 64, 66, 54, 70, 92, 93, 120, 85
];

var out = lowess( x, y, {
    'sorted': true
});
/* returns
    {
        'x': [
            4,
            ...,
            25
        ],
        'y': [
            ~4.857,
            ...,
            ~84.825
        ]
    }
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randn@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/plot-ctor@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-lowess@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x;
var y;
var i;

// Create some data...
x = new Float64Array( 100 );
y = new Float64Array( x.length );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = i;
    y[ i ] = ( 0.5*i ) + ( 10.0*randn() );
}

var opts = {
    'delta': 0
};

var out = lowess( x, y, opts );
var h = plot( [ x, out.x ], [ y, out.y ] );

h.lineStyle = [ 'none', '-' ];
h.symbols = [ 'closed-circle', 'none' ];

h.view( 'stdout' );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<section class="references">

## References

-   Cleveland, William S. 1979. "Robust Locally and Smoothing Weighted Regression Scatterplots." _Journal of the American Statistical Association_ 74 (368): 829–36. doi:[10.1080/01621459.1979.10481038][@cleveland:1979].
-   Cleveland, William S. 1981. "Lowess: A program for smoothing scatterplots by robust locally weighted regression." _American Statistician_ 35 (1): 54–55. doi:[10.2307/2683591][@cleveland:1981].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-lowess.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-lowess

[test-image]: https://github.com/stdlib-js/stats-lowess/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-lowess/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-lowess/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-lowess?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-lowess.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-lowess/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-lowess/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-lowess/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-lowess/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-lowess/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-lowess/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-lowess/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-lowess/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-lowess/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

[@cleveland:1979]: https://doi.org/10.1080/01621459.1979.10481038

[@cleveland:1981]: https://doi.org/10.2307/2683591

</section>

<!-- /.links -->
