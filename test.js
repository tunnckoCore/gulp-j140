/**
 * gulp-j140 <https://github.com/tunnckoCore/gulp-j140>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var gutil = require('gulp-util');
var gulpJ140 = require('./index');

describe('gulp-j140:', function() {
  it('should compile j140 templates', function(done) {
    var stream = gulpJ140({
      name: 'charlike'
    });
    stream.on('data', function(data) {
      assert.strictEqual(data.contents.toString(), '<p>charlike</p>');
      done();
    });
    stream.write(new gutil.File({
      contents: new Buffer('<p>#{this.name}</p>')
    }));
    stream.end();
  });
});


