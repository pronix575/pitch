const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const webpack = require('webpack')
const common = require('./webpack.common.js')

if (process.env.NODE_ENV === 'production') {
  
  module.exports = merge(common, {
    entry: [path.join(__dirname, 'src/index.ts')],
    externals: [nodeExternals({})],
    mode: 'production',
    plugins: [new CleanWebpackPlugin()]
  });
  
} else if (process.env.NODE_ENV === "development") {

  module.exports = merge.smart(common, {
    entry: [path.join(__dirname, 'src/index.ts')],
    externals: [nodeExternals()],
    mode: 'development',
    plugins: [new CleanWebpackPlugin(), new webpack.HotModuleReplacementPlugin()],
    watch: true
  });

}