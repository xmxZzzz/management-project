module.exports = {
  productionSourceMap: true,
  devServer: {
    port: 8082,
    // 配置跨域
    proxy: {
      '/api': {
        target: 'http://localhost:8088/',
        changeOrigin: true,
        // ws: true,//websocket支持
        secure: false,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
