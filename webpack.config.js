const path = require('path');

module.exports = {
  entry: './index.js',


  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },


  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: [
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        loader: [
          'style-loader',
          'css-loader',
          "postcss-loader",
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader',
          "postcss-loader",
          'sass-loader'
        ]
      },

      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
            loader: 'url-loader',
            options: {
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[hash]-[name].[ext]'
            }
        }]
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      },
    ]
  }
}
