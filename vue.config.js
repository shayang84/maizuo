module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/ajax': {
        target: 'https://m.maoyan.com',
        changeOrigin: true
      }
    }
  }
}// 配置文件改完，一定要重启服务器
