const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
  entry: {
    server: path.resolve(__dirname, 'src/server/index.tsx'),
  },
  mode: 'development',
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'build/server'),
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  externals: [nodeExternals()],
  externalsPresets: { node: true },
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.server.json',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  devtool: "eval-cheap-source-map"
}