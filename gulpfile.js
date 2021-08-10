var gulp = require('gulp');
var rename = require('gulp-rename')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps  = require('gulp-sourcemaps')
function css(done){

  gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errorLogToConsole: true
    }))
    .on('error', console.error.bind(console))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./css/'));

  done();
}
function print(done){
  console.log('hi')
  done()
}

function watchSass(){
  gulp.watch("./scss/**/*",css );
}
//exports.css = css
//exports.print = print


gulp.task('default', gulp.series(print,watchSass));