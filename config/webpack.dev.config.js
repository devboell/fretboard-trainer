const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    main: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './main.js',
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'eval-source-map',
}
