var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var nodemon = require('gulp-nodemon');
var runSequence = require('run-sequence');
var del = require('del');
var merge = require('merge-stream');

var tsOptions = {
    target: 'ES5',
    declaration: false,
    module: "commonjs",
    inlineSources: true,
    moduleResolution: "node",
    noEmitOnError: false,
    noEmit: false,
    noImplicitAny: false,
    emitDecoratorMetadata: true,
    experimentalDecorators: true
};

var vendorNpmFiles = [
    'systemjs/dist/system-polyfills.js',
    'systemjs/dist/system.src.js',
    'zone.js/dist/**/*.+(js|js.map)',
    'es6-shim/es6-shim.js',
    'reflect-metadata/**/*.+(ts|js|js.map)',
    'rxjs/**/*.+(js|js.map)',
    '@angular/**/*.+(js|js.map)'
];

gulp.task('clean', function (done) {
    return del('./dist', done);
});

gulp.task('vendor', function () {
    return gulp.src(vendorNpmFiles, {cwd: './node_modules/', base: './node_modules/'})
        .pipe(gulp.dest('public/vendor'))
});

gulp.task('assets', function () {
    gulp.src(['./config/**/*.ts'], {base: '.'})
        .pipe(sourcemaps.init())
        .pipe(ts(tsOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));

    var paths = [
        {src: ['./backend/**/*', '!./backend/**/*.ts'], dest: './dist/backend'},
        {src: ['./config/**/*', '!./config/**/*.ts'], dest: './dist/config'},
        //{src: './public/**/*', dest: './dist/src'},
        {src: ['./src/**/*', '!src/**/*.ts'], dest: './dist/src'}
    ];

    // gulp.src(['./backend/**/*', '!./backend/**/*.ts']).pipe(gulp.dest('./dist/backend'));
    // gulp.src(['./config/**/*', '!./config/**/*.ts']).pipe(gulp.dest('./dist/config'));
    //
    // gulp.src('./public/**/*')
    //     .pipe(gulp.dest('./dist/src'));
    // gulp.src(['./src/**/*', '!src/**/*.ts'])
    //     .pipe(gulp.dest('./dist/src'));

    var tasks = paths.map(function (path) {
        return gulp.src(path.src).pipe(gulp.dest(path.dest));
    });

    return merge(tasks);
});

gulp.task('compile:src', function () {
//['src/**/*.ts','backend/**/*.ts']
    return gulp.src(['./src/**/*.ts', './typings/browser.ts'], {base: '.'})
        .pipe(sourcemaps.init())
        .pipe(ts(tsOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('compile:backend', function () {
//['src/**/*.ts','backend/**/*.ts']

    return gulp.src(['./backend/**/*.ts'], {base: '.'})
        .pipe(sourcemaps.init())
        .pipe(ts(tsOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    // watch backend
    gulp.watch('./backend/**/*.ts', ['compile:backend']);
    // watch src
    gulp.watch('./src/**/*.ts', ['compile:src']);
    // watch files
    gulp.watch(['./src/**/*','!./src/**/*.ts'], ['assets']);
});

gulp.task('start', function () {
    nodemon({
        script: "./dist/backend/server.js",
        watch:["./backend/**/*","./config/**/*"]
    }).on('restart', function () {
        console.log('restarted!')
    })
});

gulp.task('server', function () {
    runSequence('clean','vendor', 'assets', 'compile:backend', 'compile:src', function(){
        nodemon({
            script: "./dist/backend/server.js"
        });
    });
});

gulp.task('default', function () {
    runSequence('clean', 'assets', 'compile:backend', 'compile:src', 'watch', 'start');
});
