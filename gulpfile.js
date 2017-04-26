var gulp = require('gulp'),
  $ = require('gulp-load-plugins')({lazy: true}),
  gulpIf = require('gulp-if'),
  del = require('del'),
  runSequence = require('run-sequence'),
  config = require('./gulp.config')(),
  browserSync = require('browser-sync'),
  promise = require('es6-promise').polyfill(),
  source = require('vinyl-source-stream'),
  babelify = require('babelify'),
  reload = browserSync.reload,
  browserify = require('browserify');

gulp.task('html', function() {
  return gulp.src(config.html)
  .pipe(gulp.dest(config.tmp))
});

gulp.task('sass', function() {
  return gulp
  .src(config.sass)
  .pipe($.plumber({errorHandler: function(err) {console.log(err); this.emit('end')}}))
  .pipe($.sass())
  .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
  .pipe(gulp.dest(config.tmp_css));
});

gulp.task('js', function() {
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

gulp.task('eslint', function() {
  return gulp.src(config.js)
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError())
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './tmp',
      routes: {
        '/vendors': 'vendors',
        '/images': 'src/images',
        '/fonts' : 'src/fonts'
      }
    }
  })
});

gulp.task('default', ['sass', 'html', 'js', 'browserSync'], function() {
  gulp.watch([config.sass[1]], ['sass', reload]);
  gulp.watch([config.html], ['html', reload]);
  gulp.watch([config.js[1]], ['js', reload]);
});

gulp.task('images', function(){
  return gulp.src(config.images)
  .pipe($.imagemin())
  .pipe(gulp.dest(config.build_images))
});

gulp.task('fonts', function() {
  return gulp.src(config.fonts)
  .pipe(gulp.dest(config.build_fonts))
});

gulp.task('build', ['html', 'sass', 'js', 'fonts', 'images'], function() {
  var assets = $.useref.assets();
  return gulp.src(config.tmp_html)
  .pipe(assets)
  .pipe(gulpIf('*.css', $.cssnano()))
  .pipe(gulpIf('*.js', $.uglify()))
  .pipe(assets.restore())
  .pipe($.useref())
  .pipe(gulp.dest(config.build))
});
