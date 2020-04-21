//Hello! I'm a file that's required for SASS, plese do not remove :)
// -Kathleen

var gulp = require('gulp');

const autoprefixer = require('gulp-autoprefixer');

gulp.task('taskname', function(){
    console.log('\nHello world!\n');
});



  gulp.task('prefix', () =>
    gulp.src('/public/style/css/app.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie >= 9', 'android >= 4.4', 'ios >= 7']
          }))
    .pipe(gulp.dest('style'))
);