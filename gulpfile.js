var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var reactify = require('reactify');
var rename = require("gulp-rename");
var babelify = require("babelify");
var watchify = require('watchify');
var notify = require("gulp-notify");
var mocha = require('gulp-spawn-mocha');
require('babel-core/register');
var babel = require("gulp-babel");

var scriptsDir = './js';
var buildDir = './dist';


function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: "Compile Error",
    message: "<%= error.message %>"
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}


// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file) {
  var props = {
    entries: [scriptsDir + '/' + file],
    debug: true,
    cache: {},
    packageCache: {}
  };
  var bundler = browserify(props);
  bundler.transform(reactify).transform(babelify);
  function rebundle() {
    var stream = bundler.bundle();
    return stream.on('error', handleErrors)
    .pipe(source(file))
    .pipe(rename('bundle.min.js'))
    .pipe(gulp.dest(buildDir + '/'));
  }
  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });
  return rebundle();
}


gulp.task('build', function() {
  return buildScript('app.js', false);
});


gulp.task('watch', function() {
  gulp.watch(scriptsDir + '/**/*.js', ['build']);
});

gulp.task('test', function() {
  var props = {
    entries: ['./tests/main.js'],
    debug: true,
    cache: {},
    packageCache: {}
  };
  var bundler = browserify(props);
  return gulp
  //return browserify(props).transform(reactify).transform(babelify).bundle()
  .src('./tests/main.js')
  .pipe(babel())
  .pipe(mocha({
      env: {'NODE_ENV': 'test'}
    }));
});