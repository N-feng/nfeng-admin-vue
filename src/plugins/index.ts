// 加载插件
const requirePlugin = require.context('./', true, /\.ts$/)
requirePlugin.keys().forEach((fileName) => {
  requirePlugin(fileName)
})
