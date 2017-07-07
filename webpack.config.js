const path = require('path');

var config = {
   entry: path.resolve(__dirname, './main'),
   output: {
      path:path.resolve(__dirname, './dist/assets'),
      filename: 'index.js',
   },
   
   devServer: {
      inline: true,
      port: 8080
   },
   
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;