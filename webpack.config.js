var path = require('path');
var SRC_DIR = path.join(__dirname, './src');
var DIST_DIR = path.join(__dirname, './dist');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: `${SRC_DIR}/App.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
  },
  {
    test : /\.css?/,
    use : [
      "style-loader",
      "css-loader"
    ]
  }
]
},
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css.bundle.css',
    })
  ]
  
};
