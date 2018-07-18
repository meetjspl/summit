const path = require('path');

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const YEAR = '2018';

const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'production',
  entry: './src/js/script.js',
  output: {
    filename: '[name].[hash:20].js',
    path: path.join(buildPath, YEAR),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(scss|css|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
              sourceMapContents: true,
            },
          },
        ],
      },
      {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[hash:20].[ext]',
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // Inject the js bundle at the end of the body of the given template
      inject: 'body',
    }),
    new CleanWebpackPlugin(buildPath),
    new FaviconsWebpackPlugin({
      // Your source logo
      logo: './src/images/favicon.png',
      // The prefix for all image files (might be a folder or a name)
      prefix: 'icons-[hash]/',
      // Generate a cache file with control hashes and
      // don't rebuild the favicons until those hashes change
      persistentCache: true,
      // Inject the html into the html-webpack-plugin
      inject: true,
      // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
      background: '#fff',
      // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
      title: 'meet.js Summit',

      // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false,
      },
    }),
    // new ExtractTextPlugin("styles.[md5:contenthash:hex:20].css", {
    //   allChunks: true
    // }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        map: {
          inline: false,
        },
        discardComments: {
          removeAll: true,
        },
      },
      canPrint: true,
    }),
    new ImageminPlugin({
      pngquant: {
        quality: '95-100',
      },
    }),
    new CopyWebpackPlugin([
      { from: 'redirect.html', to: '../index.html' },
      { from: 'src/robots.txt', to: '..' },
      { from: 'src/images/facebook', to: 'images/facebook/' },
      { from: 'legacy-pages/', to: '..' },
    ]),
  ],
};
