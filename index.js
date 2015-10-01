/*!
 * gulp-j140 <https://github.com/tunnckoCore/gulp-j140>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var gutil = require('gulp-util')
var through2 = require('through2')
var isObject = require('is-real-object')
var template = require('j140')

module.exports = function gulpj140 (locals) {
  if (!isObject(locals)) {
    throw new TypeError('gulp-j140: expect `locals` to be object')
  }

  return through2.obj(function (file, enc, cb) {
    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-j140', 'Streaming not supported'))
      return
    }

    var contents = template.render(file.contents.toString(), locals)
    file.contents = new Buffer(contents)
    cb(null, file)
  })
}
