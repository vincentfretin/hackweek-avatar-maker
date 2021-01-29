module.exports = {
  mode: process.env.NODE_ENV || 'development',
  module: {
   rules: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       use: {
         loader: "babel-loader",
         options: {
           presets: ['@babel/preset-react']
         }
       }
     }
   ]
  },
  devServer: {
    contentBase: './',
    host: '0.0.0.0'
  },
  output: {
    path: __dirname
  }
}
