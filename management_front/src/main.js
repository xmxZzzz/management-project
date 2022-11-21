import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from './plugins'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from './plugins/echarts.js'
// import http from 'axios'
import './api/mock.js'
import axiosIns from './api/axios'

Vue.use(element)

// Vue.prototype.$http = http
Vue.prototype.$http = axiosIns
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  // 保证刷新页面之后保留store中相关数据
  created () {
    store.commit('addMenu', router)
  }
}).$mount('#app')
