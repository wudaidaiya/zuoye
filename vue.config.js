const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,// 关闭eslint检查
  devServer: { // 自定义服务配置
    open: true, // 自动打开浏览器
    host: 'localhost', 
  }
})
