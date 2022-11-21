module.exports = {
  productionSourceMap: true,
  devServer: {
    port: 8082
    // 配置多个跨域
    // proxy: {
    //   '/api': {
    //     target: 'http://172.16.11.213:8081',
    //     changeOrigin: true,
    //     // ws: true,//websocket支持
    //     secure: false,
    //     pathRewrite: {
    //       '^/api': '/'
    //     }
    //   }
    // }
  }
}
