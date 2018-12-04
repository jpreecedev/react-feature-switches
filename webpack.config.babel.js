import { resolve } from 'path'
import CleanWebpackPlugin from 'clean-webpack-plugin'

export default {
  mode: 'production',
  output: {
    path: resolve(__dirname, 'lib'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  plugins: [new CleanWebpackPlugin(['lib'])]
}
