var fs = require('fs'),
    gulp = require('gulp'),
    browserify = require('browserify'),
    less = require('gulp-less'),
    gutil = require('gulp-util'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    babelify = require('babelify'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync');

var path = {
  js: {
    src: './assets/js/src/',
    dest: './assets/js/dist/'
  },
  html: {
    src: 'index.html'
  }
};

gulp.task('js', function () {
  var b = browserify({
    entries: path.js.src + 'main.js',
    debug: true,
    transform: [babelify]
  });

  return b.bundle()
    .pipe(source(path.js.dest + 'main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'));
});

gulp.task('build', ['js']);

gulp.task('watch', function() {
  gulp.watch(path.js.src + '**/*.js', [ 'js' ]);
});

gulp.task('bs', function () {
  browserSync({
    files: [
      path.js.src + 'main.js',
      path.html.src
    ],
    ghostMode: false
  });
});
