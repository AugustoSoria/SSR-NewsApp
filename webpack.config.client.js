const path = require('path')

module.exports = {
  entry: {
    client: path.resolve(__dirname, "src/client/index.tsx"),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname + '/build/client'),
    filename: 'main.js',
    publicPath: '',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.client.json',
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