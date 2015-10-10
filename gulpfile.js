var gulp = require('gulp')
var sketch = require('gulp-sketch')

gulp.task('svg', function() {
  return gulp.src('src/sketch/*.sketch')
    .pipe(sketch({
      export: 'slices',
      formats: 'svg',
      verbose: true
    }))
    .pipe(gulp.dest('build/svg'))
})