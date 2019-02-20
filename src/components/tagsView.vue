<template>
  <div>
    <scroll-pane class="tab-box"  ref="scrollPane">
      <router-link ref="tag" :class="isActive(tag)?'li-active':''"  :to="tag"  @contextmenu.prevent.native="openMenu(tag,$event)" v-for="tag in Array.from(visitedViews)" :key="tag.path" >
        <span class="tag-title">{{tag.title}}</span>
        <span class="iconfont" @click.prevent.stop='closeSelectedTag(tag)'>&#xe62b;</span>
      </router-link>
    </scroll-pane>
    <ul class='contextmenu' v-show="visible" :style="{left:left+'px',top:top+'px'}">
      <li @click="closeSelectedTag(selectedTag)">关闭</li>
      <li @click="closeOthersTags">关闭其他</li>
      <li @click="closeAllTags">关闭所有</li>
    </ul>
  </div>
</template>

<script>
  import ScrollPane from '@/components/ScrollPane'
  export default {
    name: "tagsView",
    components: { ScrollPane },
    data(){
      return{
        visible: false,
        top: 0,
        left: 0,
        selectedTag: {}
      }
    },
    computed:{
      visitedViews(){
        // console.log('tabView')
        // console.log(this.$store.state.visitedViews)
        return this.$store.state.visitedViews
      }
    },
    watch:{
      $route(){
        this.addViewTags()
        this.moveToCurrentTag()
      },
      visible(value) {
        if (value) {
          document.body.addEventListener('click', this.closeMenu)
        } else {
          document.body.removeEventListener('click', this.closeMenu)
        }
      }
    },
    mounted() {
      this.addViewTags()
    },
    methods:{
      generateRoute(){
        if (this.$route.name) {
          return this.$route
        }
        return false
      },
      isActive(route) {
        return route.path === this.$route.path
      },
      addViewTags() {
        const route = this.generateRoute()
        if (!route) {
          return false
        }
        this.$store.dispatch('addVisitedViews', route)
      },
      moveToCurrentTag() {
        const tags = this.$refs.tag
        this.$nextTick(() => {
          for (const tag of tags) {
            if (tag.to.path === this.$route.path) {
              this.$refs.scrollPane.moveToTarget(tag.$el)
              break
            }
          }
        })
      },
      closeSelectedTag(view) {
        this.$store.dispatch('delVisitedViews', view).then((views) => {
          if (this.isActive(view)) {
            const latestView = views.slice(-1)[0]
            if (latestView) {
              this.$router.push(latestView)
            } else {
              this.$router.push('/')
            }
          }
        })
      },
      closeOthersTags() {
        this.$router.push(this.selectedTag)
        this.$store.dispatch('delOthersViews', this.selectedTag).then(() => {
          this.moveToCurrentTag()
        })
      },
      closeAllTags() {
        this.$store.dispatch('delAllViews')
        this.$router.push('/')
      },
      openMenu(tag, e) {
        this.visible = true
        this.selectedTag = tag
        const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
        this.left = e.clientX - offsetLeft + 15 // 15: margin right
        this.top = e.clientY
      },
      closeMenu() {
        this.visible = false
      }
    }
  }
</script>

<style scoped lang="less">
  .tab-box{
    @tabheight:.56rem;
    height: @tabheight;
    width: 100%;
    background-color: #FAFBFF;
    box-shadow:0px 0px 6px 0px rgba(113,160,255,0.13);
    a{
      line-height: @tabheight;
      width: 1.42rem;
      text-align: left;
      float: left;
      font-size: .12rem;
      margin-right: .03rem;
      background-color: #F6F7FB;
      .tag-title{
        margin-left: .24rem;
      }
      .iconfont{
        float: right;
        font-size: .16rem;
        margin-right: .24rem;
      }
    }
    .li-active{
      background-color: #E6F3FC;
    }
  }
</style>
