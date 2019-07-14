const path = require('path')

// 转发地址
const targetUrl = process.env.PROXY_URL

function resolve(dir) {
  return path.join(__dirname, dir)
}
// function addStyleResource(rule) {
//   rule.use('style-resource')
//     .loader('style-resources-loader')
//     .options({
//       patterns: [
//         path.resolve(__dirname, './src/assets/sass/index.scss'),
//       ],
//     })
// }
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
  // chainWebpack: (config) => {
  //   const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
  //   types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  // },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [resolve('./src/assets/scss/index.scss')],
    },
  },
  // css: {
  //   loaderOptions: {
  //     // 给 sass-loader 传递选项
  //     sass: {
  //       // @/ 是 src/ 的别名
  //       // 所以这里假设你有 `src/variables.scss` 这个文件
  //       // data: '@import "~@/variables.scss";',
  //       data: '@import "src/assets/sass/index.scss"',
  //     },
  //   },
  // },
}
