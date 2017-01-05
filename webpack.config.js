var path = require('path');


// Phaser webpack config
var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
var pixi = path.join(phaserModule, 'build/custom/pixi.js');
var p2 = path.join(phaserModule, 'build/custom/p2.js');

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
        test: /\.(jpg|png)$/,
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      },
      {test: /pixi\.js/, loader: 'expose?PIXI'},
      {test: /phaser-split\.js$/, loader: 'expose?Phaser'},
      {test: /p2\.js/, loader: 'expose?p2'},
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
  },
  resolve: {
    alias: {
      'phaser': phaser,
      'pixi': pixi,
      'p2': p2
    }
  }
};
