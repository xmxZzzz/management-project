<template>
  <el-menu
    :default-active="currentActive"
    :collapse="isCollapse"
    :collapse-transition="false"
    unique-opened
    class="el-menu-container"
    background-color="#666699"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <div @click="goHome" class="title" :style="{'height':titleHeight+'px','line-height':titleHeight+'px'}">
        <span v-if="!isCollapse" style="font-size: 22px;">后台管理系统</span>
        <img style="height: 70%; width: 70%;vertical-align: middle;" v-else src="../assets/images/title-icon.svg" alt="后台管理系统"/>
    </div>
    <template v-for="menu in menuList">
      <el-submenu v-if="menu.children&&menu.children.length>0" :index="menu.label" :key="menu.label">
       <template slot="title">
        <em :class="'el-icon-'+menu.icon" />
        <span slot="title">{{menu.label}}</span>
       </template>
       <el-menu-item-group>
         <el-menu-item v-for="item in menu.children" :index="item.path" :key="item.path" @click="selectMenu(item)">
            <em :class="'el-icon-'+item.icon" />
            <span slot="title">{{item.label}}</span>
        </el-menu-item>
       </el-menu-item-group>
      </el-submenu>
      <el-menu-item v-else :index="menu.path" :key="menu.path" @click="selectMenu(menu)">
          <em :class="'el-icon-'+menu.icon" />
          <span slot="title">{{menu.label}}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import {
  defaultHeaderHeight
} from '../common/settings'
export default {
  name: 'CommonAside',

  computed: {
    isCollapse () {
      return this.$store.state.main.isCollapse
    },
    titleHeight () {
      return defaultHeaderHeight
    },
    currentActive () {
      return this.$store.state.main.currentMenu?.path || '/'
    },
    menuList () {
      return this.$store.state.main.menu
    }
  },

  data () {
    return {
      // menuList: [
      //   {
      //     path: '/',
      //     name: 'Home',
      //     label: '首页',
      //     icon: 's-home'
      //   },
      //   {
      //     name: 'System',
      //     label: '系统管理',
      //     icon: 'setting',
      //     children: [
      //       {
      //         path: '/system/menus',
      //         name: 'Menus',
      //         label: '菜单管理',
      //         icon: 'menu'
      //       }
      //     ]
      //   }
      // ]
    }
  },

  methods: {
    selectMenu (menu) {
      this.$router.push({ name: menu.name })
      this.$store.commit('selectMenu', menu)
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu-container{
  height: 100%;
  border: none;
  &:not(.el-menu--collapse){
    width: 200px;
    min-height: 400px;
  }
  .title{
    text-align: center;
    color: #fff;
  }
}
</style>>
