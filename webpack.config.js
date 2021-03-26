const path = require ('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
      path: path.resolve(__dirname, "dist"),
      filename:'index.js'
  },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename:"index.html",
          chunks: ["index"],
      })
    ],
    module: { 
        rules: [
          {
            test: /\.css$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
            ],
          },
          {
            test: /\.(png|jpe?g|gif|mp3)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                  },
              },
            ],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          {
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /(node_modules)/,
          },
        ],
    },
};