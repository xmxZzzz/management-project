import Mock from 'mockjs'
import permissionApi from './mockServeData.js/permission'
import homeApi from './mockServeData.js/home'

Mock.mock('/permission/getMenu', permissionApi.getMenu)
Mock.mock('/home/getData', homeApi.getStatisticalData)
