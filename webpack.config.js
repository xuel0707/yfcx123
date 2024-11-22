module.exports = {
  // ...other configuration
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    // ...other configuration
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/css',
    },
  },
};
