var gulp = require('gulp'),
    connect = require('gulp-connect'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    port = process.env.port || 5000

gulp.task('browserify', function(){
    console.log('connect-browserify 加载')
    gulp.src('./app/js/main.js')
    .pipe(browserify({
        transform: 'reactify'
    }))
    .pipe(gulp.dest('./dist/js'))
})

// live reload
gulp.task('connect', function(){
    console.log('connect-server加载')
    connect.server({
        // root: './',
        port: port,
        livereload: true,
    })
})

gulp.task('js', function () {
    console.log('js 加载')
    gulp.src('./dist/**/*.js')
    .pipe( connect.reload() )
})

gulp.task('html', function(){
    console.log('html 加载')
    gulp.src('./app/**/*.html')
    .pipe( connect.reload() )
});

gulp.task('watch', function(){
    gulp.watch('./dist/**/*.js', ['js']);
    gulp.watch('./app/**/*.js', ['html']);
    gulp.watch('./app/**/*.html', ['browserify']);
})

gulp.task('default', ['browserify'])
gulp.task('serve', ['browserify', 'connect', 'watch'])