/*

Mega Compiler
-----by-----
 sambennett

edit index.html with pug via './pre/index.pug'
edit js with coffeescript via './pre/script.coffee'
edit css with postcss via './pre/style.css'

*/

const gulp =            require('gulp');
const postcss =         require('gulp-postcss');
const autoprefixer =    require('gulp-autoprefixer'); //add vendor prefixes
const browserSync  =    require('browser-sync').create();
const coffee =          require('gulp-coffee');
const pug =             require('gulp-pug');
const beautify =        require('gulp-beautify'); //beautify pug output

//create postcss task
gulp.task('postcss', function () {
    return gulp.src(['src/pre/*.css'])
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
  }))
    .pipe(gulp.dest('src/post'))
    .pipe(browserSync.stream());
  });

  //create coffee task
  gulp.task('coffee', function() {
    gulp.src('src/pre/*.coffee')
      .pipe(coffee({bare: true}))
      .pipe(gulp.dest('src/post'))
      .pipe(browserSync.stream());
  });

  //create pug task
  gulp.task('pug', function buildHTML(){
    gulp.src('src/pre/*.pug')
      .pipe(pug())
      .pipe(gulp.dest('src/post'))
      .pipe(browserSync.stream());
  });

//beautify pug output
gulp.task('beautify', function() {
  return gulp.src('src/post/*.html')
    .pipe(beautify.html({ indent_size: 2 }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

//watch and serve all tasks
  gulp.task('serve', ['postcss', 'coffee', 'pug', 'beautify'], function() {
    browserSync.init({
        server: "./"  
    });

    gulp.watch(['src/pre/*.css'], ['postcss']);
    gulp.watch(['src/pre/*.coffee'], ['coffee']);
    gulp.watch(['src/pre/*.pug'], ['pug']);
    gulp.watch(['src/post/*.pug'], ['beautify']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// default task runs all tasks
gulp.task('default', ['serve']);
//
