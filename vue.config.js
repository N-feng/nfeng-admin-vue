const path = require('path')

// 转发地址
const targetUrl = process.env.PROXY_URL

function resolve(dir) {
  return path.join(__dirname, dir)
}

console.log(resolve('src'))

// vue.config.js
module.exports = {
  // 选项...
  publicPath: process.env.NODE_ENV === 'production' ? process.env.PUBLIC_PATH : '/',
  indexPath: path.resolve(__dirname, process.env.INDEX_PATH),
  devServer: {
    port: 9099,
    proxy: {
      '/api': {
        target: targetUrl,
        changeOrigin: true,
      },
      '/upload': {
        target: targetUrl,
        changeOrigin: true,
      },
    },
  },
  // configureWebpack: {
  //   entry: {
  //     app: './src/main.js',
  //   },
  //   resolve: {
  //     alias: {
  //       src: resolve('src'),
  //       '@': resolve('src'),
  //     },
  //   },
  // },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('src', resolve('src'))
  },
}
