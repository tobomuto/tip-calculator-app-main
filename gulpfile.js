const { src, dest, watch } = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function generateCSS(cb) {
  src('*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(dest('./dist/stylesheets'));
  cb();
}

exports.css = generateCSS;

function watchFiles(cb) {
  watch('**.sass', generateCSS);
}

exports.watch = watchFiles;