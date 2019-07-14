const gulp = require('gulp');
const ts = require('gulp-typescript');
const del = require('del');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('src:clean', async () => {
  return await del('dist/');
});

gulp.task('src:compile', async () => {
  return tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(gulp.dest('dist/'));
});

exports.build = gulp.series('src:clean', 'src:compile');
exports.clean = gulp.series('src:clean');
