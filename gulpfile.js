const { src, dest, watch, series, parallel } = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-dart-sass");
const minifyCSS = require("gulp-csso");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const webserver = require("gulp-webserver");
const clean = require("gulp-clean");

function cleanTask() {
  return src("./dist", { allowEmpty: true }).pipe(clean());
}

function htmlTask() {
  return src("src/templates/*.pug").pipe(pug()).pipe(dest("dist"));
}

function cssTask() {
  return src("src/sass/*.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(dest("dist/css"));
}

function jsTask() {
  return src("src/js/*.js", { sourcemaps: true })
    .pipe(concat("app.min.js"))
    .pipe(dest("dist/js", { sourcemaps: true }));
}

function watchTask() {
  watch("src/templates/**", htmlTask);
  watch("src/sass/**", cssTask);
}

function serverTask() {
  return src("./dist").pipe(
    webserver({
      livereload: true,
    })
  );
}

exports.cssTask = cssTask;

exports.default = series(
  cleanTask,
  parallel(htmlTask, cssTask, jsTask),
  parallel(watchTask, serverTask)
);
