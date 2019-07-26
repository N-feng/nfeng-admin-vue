const path = require('path')

// 转发地址
const targetUrl = process.env.PROXY_URL

function resolve(dir) {
  return path.join(__dirname, dir)
}
// vue.config.js
module.exports = {
  // 选项...
  publicPath: process.env.NODE_ENV === 'production' ? process.env.PUBLIC_PATH : '/',
  indexPath: path.resolve(__dirname, process.env.INDEX_PATH),
  devServer: {
    proxy: targetUrl,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [resolve('./src/assets/scss/index.scss')],
    },
  },
}
