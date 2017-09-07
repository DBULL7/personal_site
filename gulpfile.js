var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
let babel = require('gulp-babel')
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var htmlmin = require('gulp-htmlmin');
let cleanCSS = require('gulp-clean-css');

let folders = []

const fs = require('fs');

fs.readdirSync('./src').forEach(file => {
  folders.push(file)
})


let compile = () => {
  if (process.env.NODE_ENV === 'production') {
    folders.forEach(folder => {
      browserify({ entries: `./src/${folder}/index.js`, debug: false })
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest(`public/${folder}/`))
    })
  } else {
    folders.forEach(folder => {
      browserify({ entries: `./src/${folder}/index.js`, debug: true })
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest(`public/${folder}/`))
    })
  }
}

// let minifyHtml = () => {
//     gulp.src(`./src/home/index.html`)
//       .pipe(htmlmin({ collapseWhitespace: true }))
//       .pipe(gulp.dest(`public/home/`))
// }

gulp.task('scripts', function () {
  compile()
});

gulp.task('minify-html', () => {
  folders.forEach(folder => {
    gulp.src(`./src/${folder}/index.html`)
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest(`public/${folder}/`))
  })
})

gulp.task('minify-css', () => {
  folders.forEach(folder => {
    gulp.src(`./src/${folder}/main.css`)
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(gulp.dest(`public/${folder}/`));
  })
})

gulp.task('watch', function () {
  folders.forEach(folder => {
    gulp.watch(`./src/${folder}/main.css`, ['minify-css'])
    gulp.watch(`./src/${folder}/index.html`, ['minify-html'])
    gulp.watch(`./src/${folder}/index.js`, ['scripts'])
  })
});


gulp.task('default', ['scripts', 'minify-html', 'minify-css', 'watch'])