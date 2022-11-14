<template>
  <el-container style="height: 100%;">
    <el-aside width="auto">
      <common-aside />
    </el-aside>
    <el-container>
      <el-header :height="headerHeight+'px'">
        <common-header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '@/components/CommonAside'
import CommonHeader from '@/components/CommonHeader'
import {
  defaultHeaderHeight
} from '../common/settings'
export default {
  name: 'Main',
  components: {
    CommonAside,
    CommonHeader
  },
  computed: {
    headerHeight () {
      return defaultHeaderHeight
    }
  }
}
</script>
<style lang="less" scoped>
.el-main{
  background-color: #ececec;
}
.el-aside{
  overflow: hidden;
}
</style>
