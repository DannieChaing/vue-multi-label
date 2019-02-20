<template>
  <div>
    <tagsView></tagsView>
    <div class="main-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import tagsView from '@/components/tagsView'
export default {
  name: 'navTab',
  data () {
    return {
      msg: ''
    }
  },
  components:{
    tagsView
  }
}
</script>

<style scoped lang="less">
  .main-box{
    border: 1px black solid;
    height: 2rem;
    margin-top: .18rem;
    margin-left: .11rem;
  }
</style>
