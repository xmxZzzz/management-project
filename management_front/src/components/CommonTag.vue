<template>
  <div class="tags">
    <el-tag v-for="(tag,index) in tagLists"
            :key="tag.name"
            :closable="tag.name === 'Home'?false:true"
            :effect="(tag.name === $route.name || $route.name == 'Main')?'dark':'plain'"
            size="medium"
            @click="changeMenu(tag)"
            @close="closeTag(tag,index)"
    >{{tag.label}}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CommonTag',
  computed: {
    ...mapState({
      tagLists: state => state.main.tagList
    })
  },
  methods: {
    ...mapMutations({
      close: 'closeTag'
    }),
    changeMenu (tag) {
      this.$router.push({
        name: tag.name
      })
    },
    closeTag (tag, index) {
      const length = this.tagLists.length - 1
      this.close(tag)
      if (tag.name !== this.$route.name) {
        return
      }
      // 关闭最后一个Tag
      if (index === length) {
        this.$router.push({
          name: this.tagLists[index - 1].name
        })
      } else {
        this.$router.push({
          name: this.tagLists[index].name
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .tags {
    padding: 15px;
    background-color: #ececec;

    .el-tag {
      margin-right: 15px;
      cursor: pointer;
    }
  }
</style>
