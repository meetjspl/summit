module.exports = function() {
  var config = {
    // src
    base: './src/',
    html: './src/*.html',
    sass: ['./src/scss/*.scss', './src/scss/**/*.scss'],
    js: ['./src/js/script.js', './src/js/*.js'],
    fonts: './src/fonts/*',
    images: './src/images/**/*.+(png|jpg|gif|svg)',
    // tmp
    tmp: './tmp/',
    tmp_html: './tmp/*.html',
    tmp_css: './tmp/css/',
    tmp_js: './tmp/js/',
    // build
    build: './build/',
    build_html: './build/*.html',
    build_css: './build/css/',
    build_fonts: './build/fonts/',
    build_images: './build/images/'
  };
  return config;
};
