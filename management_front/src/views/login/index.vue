<template>
  <div class="login">
    <el-card shadow="always" class="login_card" :body-style="{'height':'100%'}">
      <div class="login_card-title">
        <img src="../../assets/images/title-icon.svg" alt=""/>
        <span>后台管理系统</span>
      </div>
      <el-form :model="formBean" class="login_card-form" ref="form" :rules="rules">
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user" v-model="formBean.username" placeholder="请输入账户名称"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" type="password" v-model="formBean.password" placeholder="请输入账户密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">确定</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { getMenu } from '../../api/data.js'
export default {
  name: 'Login',
  data () {
    return {
      formBean: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入账号!', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码!', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.form.validate(valid => {
        if (!valid) {
          return
        }
        getMenu(this.formBean).then(res => {
          const { code, message, data } = res.data
          if (code === 200000) {
            this.$store.commit('clearMenu')
            this.$store.commit('clearCurrentMenu')
            this.$store.commit('setMenu', data.menu)
            this.$store.commit('setToken', data.token)
            this.$store.commit('setUser', this.formBean)
            this.$router.push('/')
          } else {
            this.formBean = {}
            this.$message.error(message)
          }
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login{
  width: 100%;
  height: 100%;
  background-image: url('../../assets/images/login_background.png');
  background-size: 100% 100%;
  position: absolute;
  left: 0;
  top: 0;
  .login_card{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 20%;
    min-width: 200px;
    height: 50%;
    min-height: 400px;
    .login_card-title{
      margin: 15% 0;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img{
        width: 30%;
        height: 30%;
      }
      span{
        font-size: 30px;
      }
    }
    .login_card-form{
      .el-button{
        width: 100%;
      }
    }
  }
}
</style>
