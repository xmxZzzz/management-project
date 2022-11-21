// import axios from './axios_old'
import axiosIns from './axios'

/*
 axios_old
export const getMenu = (param) => {
  return axios.request({
    url: '/permission/getMenu',
    method: 'post',
    data: param
  })
}

export const getData = () => {
  return axios.request({
    url: '/home/getData'
    // method: 'get'
  })
}
*/

export const getMenu = (param) => {
  // return axiosIns({
  //   url: '/permission/getMenu',
  //   method: 'post',
  //   data: param
  // })
  return axiosIns.post('/permission/getMenu', param)
}

export const getData = () => {
  return axiosIns({
    url: '/home/getData'
    // method: 'get'
  })
}
