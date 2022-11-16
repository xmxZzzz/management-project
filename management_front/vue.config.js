module.exports = {
  devServer: {
    port: 8082,
    // 配置跨域处理
    proxy: 'http://localhost:8081'
  }
}
