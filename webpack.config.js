const path = require('path');
const fs = require('fs');

const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: slsw.lib.entries,
  resolve: {
    symlinks: true,
  },
  target: 'node',
  externals: [nodeExternals({
    whitelist: [
      /^lib/,
    ],
  })],
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: [
        fs.realpathSync(__dirname),
        fs.realpathSync(`${__dirname}/node_modules/lib`),
      ],
    }],
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
};
