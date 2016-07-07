var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var nodemon = require('gulp-nodemon');
var del = require('del');
var tsOptions= {
    target:'ES5',
    declaration:false,
    module: "commonjs",
    inlineSources: true,
    moduleResolution: "node",
    noEmitOnError: false,
    noEmit:false,
    noImplicitAny: false,
    emitDecoratorMetadata:true,
    experimentalDecorators:true
};

gulp.task('clean',function(done){
    return del('./dist',done);
});

gulp.task('compile:src',['assets'],function(){
//['src/**/*.ts','backend/**/*.ts']

    return gulp.src(['./src/**/*.ts','./typings/browser.ts'], {base: '.'})
        .pipe(sourcemaps.init())
        .pipe(ts(tsOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('compile:backend',['compile:src'],function(){
//['src/**/*.ts','backend/**/*.ts']

    return gulp.src(['./backend/**/*.ts'], {base: '.'})
        .pipe(sourcemaps.init())
        .pipe(ts(tsOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('assets',['clean'],function(){
    return gulp.src(['./src/**/*','!src/**/*.ts'])
        .pipe(gulp.dest('./dist/src'));
});

gulp.task('start',['compile:backend'],function(){
    nodemon({
        script:"./dist/backend/server.js"
    }).on('restart', function () {
        console.log('restarted!')
    });

    return true;
});

gulp.task('default',['start']);