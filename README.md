# gulp-j140 [![Build Status](https://travis-ci.org/tunnckoCore/gulp-j140.png)](https://travis-ci.org/tunnckoCore/gulp-j140) [![Dependencies Status](https://david-dm.org/tunnckoCore/koa-better-body/status.svg)](https://david-dm.org/dlau/gulp-j140)
================

> Compile [j140 templates](https://github.com/tunnckoCore/j140). Gulp plugin for j140 - Javascript template engine in 140 bytes, by Jed Schmidt.


## Install
> Install with [npm](https://github.com/npm/npm)

```
$ npm install gulp-j140
```


## Usage

#### `src/greeting.html`
```html
<h1>Hello #{this.name}</h1>
#### `gulpfile.js`
```js
var gulp = require('gulp');
var template = require('gulp-template');

gulp.task('default', function () {
  return gulp.src('src/greeting.html')
    .pipe(template({name: 'Charlike'}))
    .pipe(gulp.dest('dist'));
});
```
#### `dist/greeting.html`
```html
<h1>Hello Charlike</h1>
```

## Test, Bench, Example
> First run `npm install` before run anything.

```
$ npm test
```


## License
The MIT License, 2014 [Charlike Mike Reagent](https://github.com/tunnckoCore) ([@tunnckoCore)](https://twitter.com/tunnckoCore))

~~~~~~~~~~~~~~~~~~~~~
This file is generated by [`Ock`](https://github.com/tosckjs/ock) on June 19, 2014