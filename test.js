/**
 * gulp-j140 - test.js
 * Copyright (c) 2014
 * MIT Licensed
 *
 * @author  Charlike Mike Reagent (@tunnckoCore)
 * @api private
 */
'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var gulpJed = require('./index');

it('should compile j140 templates', function (cb) {
  var stream = gulpJed({name: 'charlike'});

  stream.on('data', function (data) {
    assert.equal(data.contents.toString(), '<p>charlike</p>');
    cb();
  });

  stream.write(new gutil.File({
    contents: new Buffer('<p>#{this.name}</p>')
  }));

  stream.end();
});
