export default {
  state: {
    menu: [],
    isCollapse: false,
    tagList: [{
      path: '/',
      name: 'Home',
      label: '首页',
      icon: 'home'
    }],
    currentMenu: null
  },
  getters: {
    currentMenu: (state) => state.currentMenu,
    isCollapse: (state) => state.isCollapse,
    menu: (state) => state.menu,
    tagList: (state) => state.tagList
  },
  mutations: {
    setIsCollapse (state) {
      state.isCollapse = !state.isCollapse
    },
    setMenu (state, menu) {
      state.menu = menu
      sessionStorage.setItem('menu', JSON.stringify(menu))
    },
    // 登录页面和main.js中的created()方法中调用
    addMenu (state, router) {
      if (!sessionStorage.getItem('menu')) {
        return
      }
      const menu = JSON.parse(sessionStorage.getItem('menu'))
      state.menu = menu
      const menuArr = []
      menu.forEach(element => {
        if (element.children) {
          element.children = element.children.map(item => {
            item.component = () => import('@/views/' + item.url + '.vue')
            // item.component = () => import(`@/views/${item.url}`) // 报错
            return item
          })
          menuArr.push(...element.children)
        } else {
          element.component = () => import('@/views/' + element.url)
          menuArr.push(element)
        }
      })
      // 路由的动态添加
      menuArr.forEach(item => {
        router.addRoute('Main', item)
      })
    },
    clearMenu (state) {
      state.menu = []
      sessionStorage.removeItem('menu')
    },
    setCurrentMenu (state, menu) {
      state.currentMenu = menu
    },
    clearCurrentMenu (state) {
      state.currentMenu = null
    },
    selectMenu (state, menu) {
      if (menu.name !== 'Home') {
        state.currentMenu = menu
        const result = state.tagList.findIndex(item => item.name === menu.name)
        if (result === -1) {
          state.tagList.push(menu)
        }
      } else {
        state.currentMenu = null
      }
    },
    clearTagList (state) {
      state.tagList = state.tagList.splice(0, 1)
    }
  }
}
