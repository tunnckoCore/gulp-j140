/**
 * gulp-j140 <https://github.com/tunnckoCore/gulp-j140>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var gutil = require('gulp-util');
var through = require('through2');
var j140 = require('j140');

module.exports = function gulpJ140(data) {
  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      this.push(file);
      return cb();
    }
    if (file.isStream()) {
      this.emit('error', new gutil.PluginError('gulp-j140', 'Streaming not supported'));
      return cb();
    }
    try {
      file.contents = new Buffer(j140(file.contents.toString(), data));
    } catch (err) {
      this.emit('error', new gutil.PluginError('gulp-j140', err));
    }
    this.push(file);
    cb();
  });
};
