const path = require('path');

module.exports = {
  entry: {
    app: ['./src/index.js']
  },
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    }],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  }
};
