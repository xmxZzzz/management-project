import Mock from 'mockjs'

export default {
  getMenu: config => {
    const { username, password } = JSON.parse(config.body)
    if (username === 'admin' && password === 'admin') {
      return {
        code: 200000,
        data: {
          menu: [
            {
              path: '/',
              name: 'Home',
              label: '首页',
              icon: 's-home',
              url: 'home/index'
            },
            {
              name: 'System',
              label: '系统管理',
              icon: 'setting',
              children: [
                {
                  path: '/system/menus',
                  name: 'Menus',
                  label: '菜单管理',
                  icon: 'menu',
                  url: 'system/menus/index'
                }
              ]
            }
          ],
          token: Mock.Random.guid(),
          message: 'ok'
        }
      }
    } else if (username === 'guoyy' && password === 'guoyy') {
      return {
        code: 200000,
        data: {
          menu: [
            {
              path: '/',
              name: 'Home',
              label: '首页',
              icon: 's-home'
            }
          ],
          token: Mock.Random.guid(),
          message: 'ok'
        }
      }
    } else {
      return {
        code: -99999,
        data: {
          message: '密码错误'
        },
        message: '用户名或密码错误，请重新输入！'
      }
    }
  }
}
