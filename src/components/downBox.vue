<template>
  <div class="mybody">
    <ul class="menu-ul">
      <router-link  v-for="(item,index) in List" :key="index" :to="item.murl" @click.native="menuClick($event)">
        <li :class=" index==0 ? 'menu-active': ''" >{{item.name}}</li>
      </router-link>
    </ul>
    <div class="right-box">
      <NavTab></NavTab>
    </div>
    <div class="clearfloat"></div>
  </div>
</template>

<script>
import NavTab from "@/components/navTab"
export default {
  name: 'downBox',
  props:["navid"],
  data () {
    return {
      msg: '',
      List:[]
    }
  },
  mounted(){
    this.setList()
  },
  components:{
    NavTab
  },
  watch: {
    navid(newVal, oldVal) {
      this.setList();
    }
  },
  methods:{
    setList(){
      switch (this.navid) {
        case 0:
          this.List=[{"name":"个人门户","murl":"/personal"},{"name":"营销门户","murl":"/"},{"name":"人事门户","murl":"/"},{"name":"财务门户","murl":"/"},{"name":"报表门户","murl":"/"}];
          break;
        case 1:
          this.List=[{"name":"新客户","murl":"/cpool"},{"name":"老客户","murl":"/oldCpool"}];
          break;
      }
      this.setLi()
    },
    setLi(){
      $(".menu-ul").children().children("li").eq(0).addClass("menu-active").parent().siblings().children("li").removeClass("menu-active")
    },
    menuClick(e){
      let index=$(e.currentTarget).index();
      $(".menu-ul").children().children("li").eq(index).addClass("menu-active").parent().siblings().children("li").removeClass("menu-active")
    }
  }
}
</script>

<style scoped lang="less">
  .mybody{
    width: 100%;
    height: 100%;
    min-height: 100%;
  }
  @leftW:2.52rem;
  .menu-ul{
    float: left;
    width: @leftW;
    @liheight:.4rem;
    height: 100%;
    min-height: 100%;
    box-shadow:0px 0px 6px 0px rgba(26, 37, 59, 0.13);
    li{
      height: @liheight;
      line-height: @liheight;
      margin-bottom: .2rem;
    }
    li:nth-of-type(1){
      margin-top: .2rem;
    }
    li:hover{cursor: pointer}
    .menu-active{
      color: #0071FF;
      position: relative;
      box-shadow:0px 0px 6px 0px rgba(113,160,255,0.13);
      &:before{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: .02rem;
        height: 100%;
        background-color: #0071FF;
      }
    }
  }
  .right-box{
    float: left;
    width: calc(100% - @leftW);
  }
</style>
