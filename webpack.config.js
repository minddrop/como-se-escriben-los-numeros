const TerserPlugin = require('terser-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlPlugin = require('html-webpack-plugin')
const MODE = 'development'

module.exports = {
  mode: MODE,
  entry: {
    main: `${__dirname}/src/main.ts`,
    404: `${__dirname}/src/pages/404.ts`,
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { url: false },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new HtmlPlugin({
      filename: '404.html',
      template: 'public/404.html',
      inject: 'head',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      chunks: ['404'],
    }),
  ],
  optimization: {
    minimizer:
      MODE === 'production'
        ? []
        : [
            new TerserPlugin({
              extractComments: 'all',
              terserOptions: {
                compress: { drop_console: true },
              },
            }),
          ],
  },
  devServer: {
    contentBase: `${__dirname}/dist`,
  },
}
