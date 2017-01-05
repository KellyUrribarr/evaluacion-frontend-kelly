var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');


gulp.task('script', function(){
    gulp.src('src/js/*.js')
        // verificar errores de JS
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        // unir todos los archivos
        .pipe(concat('script.min.js'))
        // enfearlo (minimizarlo)
        .pipe(uglify())
        // dejarlo en carpeta dist/js
        .pipe(gulp.dest('dist/js'));
    });

gulp.task('style', function(){
    // aca va la tarea
    
    gulp.src('src/sass/main.scss')
        // transformar los sass
        .pipe(sass().on('error', sass.logError))
        // minimizarlo
        .pipe(minifyCSS())
        // dejarlo en archivo de destino
        .pipe(concat('estilos.min.css'))
        // dejarlo en carpeta dist/css
        .pipe(gulp.dest('dist/css'));
    });
    
    //sass
gulp.task('sass', function () {
        return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

    // rename via string 
gulp.src("./src/main/text/hello.txt")
    .pipe(rename("main/text/ciao/goodbye.md"))
        .pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/goodbye.md 

    //notify
gulp.src("./src/test.ext")
    .pipe(notify("Hello Gulp!"));

    //images
gulp.task('imagenes', function () {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
}
);

    //fonts
gulp.task('fonts', function(){
        gulp.src('src/fonts/*')
        .pipe(gulp.dest('dist/fonts'));
    });


gulp.task('default', ['script', 'style', 'imagenes', 'fonts']);
