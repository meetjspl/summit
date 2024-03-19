const path = require('path');
const prod = require('./webpack.prod');

module.exports = {
  ...prod,
  mode: 'development',
  devServer: {
    port: 8085,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: {
      rewrites: [{ from: /^\/workshop$/, to: '/workshop.html' }],
    },
  },
};
