## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Compile j140 templates. Gulp plugin for j140 - Javascript template engine in 140 bytes, by Jed Schmidt.

## Install
```bash
npm install gulp-j140
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var j140 = require('gulp-j140');
var gulp = require('gulp');

gulp.task('default', function () {
  return gulp.src('src/greeting.html')
    .pipe(j140({name: 'Charlike'}))
    .pipe(gulp.dest('dist'));
});
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/gulp-j140
[npmjs-img]: https://img.shields.io/npm/v/gulp-j140.svg?style=flat&label=gulp-j140

[coveralls-url]: https://coveralls.io/r/tunnckoCore/gulp-j140?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/gulp-j140.svg?style=flat

[license-url]: https://github.com/tunnckoCore/gulp-j140/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/gulp-j140
[travis-img]: https://img.shields.io/travis/tunnckoCore/gulp-j140.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/gulp-j140
[daviddm-img]: https://img.shields.io/david/tunnckoCore/gulp-j140.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/gulp-j140/graphs/contributors

***

_Powered and automated by [readdirp + hogan.js](https://github.com/tunnckoCore), December 30, 2014_
