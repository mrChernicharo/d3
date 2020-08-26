const path = require('path');

module.exports = {
  mode: 'development',
  // entry: "./src/main.js",
  // entry: './src/my-slider.js',
  entry: './src/slider.js',
  devServer: {
    contentBase: './dist',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
