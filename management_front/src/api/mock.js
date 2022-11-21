import Mock from 'mockjs'
import permissionApi from './mockServeData.js/permission'
import homeApi from './mockServeData.js/home'

Mock.mock('/api/permission/getMenu', 'post', permissionApi.getMenu)
Mock.mock(/api\/home\/getData/, homeApi.getStatisticalData)
