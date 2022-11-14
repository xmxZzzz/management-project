import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        meta: { title: '首页' },
        component: () => import('../views/home')
      },
      {
        path: 'system/menus',
        name: 'Menus',
        meta: { title: '菜单管理' },
        component: () => import('../views/system/menus')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

// 前置路由守卫
router.beforeEach((to, from, next) => {
  store.commit('getToken')
  const token = store.state.user.token
  if (!token && to.name !== 'Login') {
    next({ name: 'Login' })
  } else if (token && to.name === 'Login') {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
