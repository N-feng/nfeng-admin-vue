const path = require("path");
// const defaultSettings = require('./src/config');
// const { devPort } = defaultSettings
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const packageName = require("./package.json").name;

function resolve(dir) {
  return path.join(__dirname, dir);
}

const mockServer = () => {
  if (process.env.NODE_ENV === 'development') {
    return require('./mock/mockServer.js')
  } else {
    return ''
  }
}

// 基础路径 注意发布之前要先修改这里
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/nfeng-admin-vue/'
  : '/', // 根据你的实际情况更改这里
  // 默认在生成的静态资源文件名中包含hash以控制缓存
  filenameHashing: true,
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: false,
  devServer: {
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    port: 7099,
    hot: true,
    // 注释掉的地方是前端配置代理访问后端的示例
    // proxy: {
    //   [baseURL]: {
    //     target: `http://你的后端接口地址`,
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       ["^/" + baseURL]: "",
    //     },
    //   },
    // },
    after: mockServer(),
  },
  // 自定义webpack配置
  configureWebpack: {
    plugins: [new CleanWebpackPlugin()],
    resolve: {
      alias: {
        src: resolve("src"),
        vue$: "vue/dist/vue.common.js",
        components: resolve("src/components"),
        pageComponent: resolve("src/pageComponent"),
        store: resolve("src/store")
      }
    }
  },
  // chainWebpack: config => {
  //   config.extensions = ['.js', '.vue', '.json', '.ts'];
  // },
  // css: {
  //   requireModuleExtension: true,
  //   sourceMap: true,
  //   loaderOptions: {
  //     less: {
  //       lessOptions: {
  //         javascriptEnabled: true,
  //         modifyVars: {
  //           'nf-color-blue': '#1890ff',
  //           'nf-margin': '20px',
  //           'nf-padding': '20px',
  //           'nf-header-height': '65px',
  //         }
  //       }
  //     }
  //   }
  // }
};
