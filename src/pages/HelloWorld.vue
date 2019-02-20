<template>
  <div class="hello">
    <div class="top-box"><headerNav :navid.sync="navId"></headerNav></div>
    <div class="down-box"><downBox :navid.sync="navId"></downBox></div>
  </div>
</template>

<script>
import headerNav from "@/components/headerNav"
import downBox from "@/components/downBox"
export default {
  name: 'HelloWorld',
  data () {
    return {
      navId: 0
    }
  },
  components:{ headerNav, downBox }
}
</script>

<style scoped>
  .hello{
    height: 100%;
  }
  .top-box{
    height: 1.45rem;
  }
  .down-box{
    height: calc(100% - 1.45rem - 0.02rem);
    margin-top: 0.02rem;
  }
</style>
