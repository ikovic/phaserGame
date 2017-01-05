var path = require('path');

module.exports = {
  entry: [
    "babel-polyfill",
    "./src/index.js"
  ],
  output: {
    path: __dirname + "/build/assets",
    publicPath: "assets/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",

        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, "src")
        ],

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015']
        }
      }
    ]
  }
};
