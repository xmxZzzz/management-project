import Mock from 'mockjs'

const List = []

export default {
  getStatisticalData: () => {
    // Mock.Random.float(min?: N, max?: N, dmin?: N, dmax?: N): 产生100-8000之间的随机数，保留小数：最小0位，最大0位
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          苹果: Mock.Random.float(100, 8000, 0, 0),
          华为: Mock.Random.float(100, 8000, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          oppo: Mock.Random.float(100, 8000, 0, 0),
          小米: Mock.Random.float(100, 8000, 0, 0),
          三星: Mock.Random.float(100, 8000, 0, 0)
        })
      )
    }
    return {
      code: 200,
      data: {
        videoData: [
          { name: '小米', value: 2999 },
          { name: '苹果', value: 5999 },
          { name: 'vivo', value: 1500 },
          { name: 'oppo', value: 1999 },
          { name: '魅族', value: 2200 },
          { name: '三星', value: 4500 }
        ],
        orderData: {
          date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
          data: List
        }
      }
    }
  }
}
