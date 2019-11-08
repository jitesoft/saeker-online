const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');
const FavIconsPlugin = require('favicons-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const Path = require('path');

const src = Path.resolve(__dirname, 'src');
const dist = Path.resolve(__dirname, 'dist');
const meta = require('./package').meta;

let conf = {
  mode: env,
  target: 'web',
  entry: {
    'index': `${src}/js/index.js`
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  output: {
    globalObject: 'this',
    filename: '[name].js',
    chunkFilename: 'js/[chunkhash:16].js',
    path: Path.resolve(__dirname, 'dist')
  },
  resolve: {
    aliasFields: ['browser'],
    extensions: ['.js', '.vue', '.json', '.css', '.scss'],
    alias: {
      '@': `${src}/Components`,
      'src': `${src}`,
      'vue$': 'vue/dist/vue.runtime.esm.js',
      'img': `${src}/img`,
      'styles': `${src}/styles`
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new FavIconsPlugin({
      logo: 'src/img/fav.svg',
      prefix: 'img'
    }),
    new HtmlWebpackPlugin(meta),
    new CssExtractPlugin({
      filename: 'style.css'
    }),
    // To move src stuff to root!
    new CopyPlugin([
      'src/img/og-image.png',
      'src/CNAME'
    ]),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts'
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // For some reason, this must be set here, else it will blow up later...
        options: {
          'presets': [
            ['@jitesoft/main',
              {
                mode: 'web'
              }
            ]
          ]
        }
      },
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== 'production' ?'vue-style-loader' : CssExtractPlugin.loader,
          'css-loader', {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production' ?'vue-style-loader' : CssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(jpe?g|gif|svg|png|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              outputPath: 'img'
            }
          },
          'image-webpack-loader'
        ]
      }
    ]
  }
};

if (env === 'development') {
  conf.devServer = {
    contentBase: dist,
    compress: true,
    port: 9000,
    hot: true,
    open: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: 'index.html' }
      ]
    },
    overlay: {
      warnings: true,
      errors: true
    }
  };
}

module.exports = conf;
