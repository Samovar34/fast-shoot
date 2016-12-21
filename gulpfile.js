const gulp = require("gulp"),
      sass = require("gulp-sass"),
      autoprefixer = require("gulp-autoprefixer");

var paths = {
    build: {
        public: "build/public/",
        style: "build/public/style",
        js: "build/public/js",
        img: "build/public/img",
        node: "build/"
    },
    src: {
        server: {
            json: "src/server/**/*.json",
            js: "src/server/**/*.js"
        },
        client: {
            html: "src/client/*.html",
            style: "src/client/style/main.scss",
            js: "src/client/js/**/*.js",
            img: "src/client/img/*.*",
            lib: "bower_components/phaser/build/phaser.min.js"
        }
    },
    watch: {
        server: {
            json: "src/server/**/*.json",
            js: "src/server/**/*.js"
        },
        client: {
            html: "src/client/*.html",
            style: "src/client/style/**/*.scss",
            js: "src/client/js/**/*.js",
            img: "src/client/img/*.*"
        }
    }
}

// CLIENT BUILD TASKS

// Собрать все HTML файлы в ./build/public/
gulp.task("html", () => {
    gulp.src(paths.src.client.html)
        .pipe(gulp.dest(paths.build.public));
});

// Скомпелировать SCSS 
// поставить все префиксы
// переместить в ./build/public/style
gulp.task("style", () => {
    // TODO: добавить минификацию
    gulp.src(paths.src.client.style)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(paths.build.style));
});

// Собрать все JS файлы в ./build/public/js
gulp.task("js", () => {
    // TODO: добавить минификацию
    gulp.src(paths.src.client.js)
        .pipe(gulp.dest(paths.build.js));
});

// Собрать все img файлы в ./build/public/img
gulp.task("img", () => {
    gulp.src(paths.src.client.img)
        .pipe(gulp.dest(paths.build.img));
});

// Собрать файлы JS библиотек в  ./build/public/js
gulp.task("lib", () => {
    gulp.src(paths.src.client.lib)
        .pipe(gulp.dest(paths.build.js));
});

// Общий скрипт для сборки клиента
gulp.task("build:client", ()=> {
    gulp.start("html");
    gulp.start("style");
    gulp.start("js");
    gulp.start("img");
    gulp.start("lib");
});

// SERVER BUILD TASKS

gulp.task("server:js", () => {
    gulp.src(paths.src.server.js)
        .pipe(gulp.dest(paths.build.node));
});

gulp.task("server:json", () => {
    gulp.src(paths.src.server.json)
        .pipe(gulp.dest(paths.build.node));
});

gulp.task("build:server", () => {
    gulp.start("server:js");
    gulp.start("server:json");
});


// WATCH TASKS

//слежка за html
gulp.task('html:watch', () => {
  gulp.watch(paths.watch.client.html, ['html']);
});

// слежка за файлами SCSS
gulp.task('style:watch', () => {
  gulp.watch(paths.watch.client.style, ['style']);
});

// слежка за файлами JS
gulp.task('js:watch', () => {
  gulp.watch(paths.watch.client.js, ['js']);
});

// слежка за файлами JS
gulp.task('node:watch', () => {
  gulp.watch(paths.watch.server.js, ['server:js']);
});

// инкрементальная сборка клиента
gulp.task('watch', () => {
  gulp.start("html:watch");
  gulp.start("style:watch");
  gulp.start("js:watch");
  gulp.start("node:watch");
});

gulp.task("default", () => {
    gulp.start("build:client");
    gulp.start("build:server");
    gulp.start("watch");
});