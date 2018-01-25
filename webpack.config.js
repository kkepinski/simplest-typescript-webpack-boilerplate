var path = require('path')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    // loaders: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
    loaders: [
      {
        loader:
          'awesome-typescript-loader?configFileName=config/tsconfig.json&declaration=false'
      }
    ]
  }
}
