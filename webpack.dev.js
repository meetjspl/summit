const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');

const gitRevisionPlugin = new GitRevisionPlugin();

const version = {
  VERSION: gitRevisionPlugin.version(),
  COMMITHASH: gitRevisionPlugin.commithash(),
  BRANCH: gitRevisionPlugin.branch(),
};

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  entry: './src/js/script.js',
  devServer: {
    port: 8085,
    contentBase: path.join(__dirname, 'dist'),
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
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
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
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]?hash=[hash:20]',
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
    }),

    new HtmlWebpackPlugin({
      filename: 'regulamin.html',
      template: './src/regulamin.html',
    }),

    new webpack.DefinePlugin({
      VERSION: JSON.stringify(version),
    }),
  ],
};
