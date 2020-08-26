const path = require('path');

module.exports = {
  mode: 'development',
  // entry: "./src/main.js",
  // entry: "./src/01basics.js",
  // entry: './src/03.scales.js',
  // entry: './src/04.axis.js',
  // entry: './src/05.animation.js',
  // entry: './src/06.forces.js',
  // entry: './src/proj03.force.js',
  // entry: './src/my-slider.js',
  entry: './src/my-force.js',
  // entry: './src/proj01.slider.js',
  // entry: './src/my-bubble.js',
  // entry: './src/proj02.bubble.js',

  devServer: {
    contentBase: './dist',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
