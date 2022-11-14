<template>
  <div class="header">
    <div class="header_left">
      <el-button plain icon="el-icon-menu" @click="collapseMenu"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="tag in tagList" :key="tag.path" :to="{ path: tag.path }" @click.native="clickBreadcrumb(tag)">{{tag.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header_right">
      <img :src="userIcon" class="user-icon" alt=""/>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          admin<em class="el-icon-arrow-down el-icon--right" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="handleUserInfo">个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="exit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CommonHeader',
  computed: {
    ...mapState({
      tagList: (state) => state.main.tagList
    })
  },
  data () {
    return {
      userIcon: require('../assets/images/user-default.png')
    }
  },
  methods: {
    clickBreadcrumb (item) {
      this.$store.commit('setCurrentMenu', item)
    },
    collapseMenu () {
      this.$store.commit('setIsCollapse')
    },
    handleUserInfo () {
      alert('handleUserInfo')
    },
    exit () {
      this.$store.commit('clearToken')
      this.$store.commit('clearMenu')
      this.$store.commit('clearTagList')
      this.$store.commit('clearUser')
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="less" scoped>
.header{
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .header_left{
    display: flex;
    flex-direction: row;
    align-items: center;
    .el-button{
      margin-right: 20px;
    }
  }
  .header_right{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    .user-icon{
      width: 30%;
      height: 30%;
      vertical-align: middle;
    }
    .el-dropdown-link{
      cursor: pointer;
      align-self: center;
      .el-icon-arrow-down{
        font-size: 12px;
      }
    }
  }
}
</style>
