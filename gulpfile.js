var gulp = require('gulp'),
  $ = require('gulp-load-plugins')({lazy: true}),
  gulpIf = require('gulp-if'),
  del = require('del'),
  config = require('./gulp.config')(),
  browserSync = require('browser-sync'),
  promise = require('es6-promise').polyfill(),
  source = require('vinyl-source-stream'),
  babelify = require('babelify'),
  reload = browserSync.reload,
  browserify = require('browserify'),
  filter = require('gulp-filter'),
  rev = require('gulp-rev'),
  revReplace = require('gulp-rev-replace');

var ftp = require('vinyl-ftp');
var gutil = require('gulp-util');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));

gulp.task('deploy', function () {
  var remotePath = '/2017/';
  var conn = ftp.create({
    host: 'meetjs.pl',
    user: args.user,
    password: args.password,
    log: gutil.log
  });
  gulp.src(['build/**'])
    .pipe(conn.newer(remotePath))
    .pipe(conn.dest(remotePath));
});

gulp.task('html', function () {
  return gulp.src(config.html)
    .pipe(gulp.dest(config.tmp))
});

gulp.task('sass', function () {
  return gulp
    .src(config.sass)
    .pipe($.plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end')
      }
    }))
    .pipe($.sass({
      includePaths: ['src/scss', 'node_modules']
    }))
    .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
    .pipe(gulp.dest(config.tmp_css));
});

gulp.task('js', function () {
  var bundler = browserify({
    entries: config.js[0],
    extensions: ['.js'],
    debug: false,
    fullPaths: false
  });
  var bundle = bundler.transform(babelify, {
    extensions: ['.js'],
    presets: ["es2015"]
  });
  return bundler.bundle()
    .pipe(source('script.js'))
    .pipe(gulp.dest(config.tmp_js));
});

gulp.task('eslint', function () {
  return gulp.src(config.js)
    .pipe($.eslint({
      envs: ['es6'],
      ecmaFeatures: {modules: true}
    }))
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError())
});

gulp.task('browserSync', function () {
  browserSync({
    open: false,
    server: {
      baseDir: './tmp',
      routes: {
        '/vendors': 'vendors',
        '/images': 'src/images',
        '/fonts': 'src/fonts'
      }
    }
  })
});

gulp.task('default', ['eslint', 'sass', 'html', 'js', 'browserSync'], function () {
  gulp.watch([config.sass[1]], ['sass', reload]);
  gulp.watch([config.html], ['html', reload]);
  gulp.watch([config.js[1]], ['js', reload]);
});

gulp.task('images', function () {
  return gulp.src(config.images)
    .pipe($.imagemin())
    .pipe(gulp.dest(config.build_images))
});

gulp.task('fonts', function () {
  return gulp.src(config.fonts)
    .pipe(gulp.dest(config.build_fonts))
});

gulp.task('build', ['html', 'sass', 'js', 'fonts', 'images'], function () {
  var assets = $.useref.assets(),
      indexHtmlFilter = filter(['**/*', '!**/index.html'], { restore: true });
  return gulp.src(config.tmp_html)
    .pipe(assets)
    .pipe(gulpIf('*.css', $.cssnano()))
    .pipe(gulpIf('*.js', $.uglify()))
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe(indexHtmlFilter)
    .pipe(rev())
    .pipe(indexHtmlFilter.restore)
    .pipe(revReplace())
    .pipe(gulp.dest(config.build))
});
