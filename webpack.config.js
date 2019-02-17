const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'spiff.js',
    libraryTarget: 'umd',
  },
};
