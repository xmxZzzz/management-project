<template>
  <div class="content">
    <div class="content-left">
      <div class="content-left__top">
        <el-card style="height:80%" shadow="always">
          <div slot="header" class="userInfo">
            <img src="../../assets/images/user-default.png" height="96" width="96"/>
            <span>管理员</span>
          </div>
          <div>上次登录时间</div>
          <div>上次登录地点</div>
        </el-card>
      </div>
      <div class="content-left__bottom">
      </div>
    </div>
    <div class="content-right">
    </div>
  </div>
</template>

<script>
import { getData } from '@/api/data.js'

export default {
  name: 'Home',
  data () {
    return {
      tableData: [],
      tableLabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      }
    }
  },
  created () {
    getData().then(res => {
      const { code, data } = res.data
      if (code === 200) {
        this.tableData = data.tableData
      }
    })
  }
}
</script>

<style lang="less" scoped>
  .content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .content-left {
      width: 35%;
      height: 100%;

      .content-left__bottom {
        margin-top: 20px;
      }
    }

    .content-right {
      width: 64%;
      height: 100%;
    }
  }
</style>
