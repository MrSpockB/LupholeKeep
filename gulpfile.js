var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');


gulp.task('connect', function () {
    connect.server({
        root: 'src/',
        port: 8888
    });
});