module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/build/assets",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader?presets[]=es2015'
      }
    ]
  }
};
