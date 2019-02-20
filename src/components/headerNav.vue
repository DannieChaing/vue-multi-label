<template>
  <div class="header-body">
    <div class="img-box">
      <div class="logo-img"><img src="../../static/icon.png" alt=""></div>
      <div class="logo-text">某某系统</div>
    </div>
    <div class="ul-box">
      <ul class="nav-ul">
        <li @click="navClick($event)">
          <div><i class="iconfont">&#xe60d;</i></div>
          <div>门户</div>
        </li>
        <li @click="navClick($event)">
          <div><i class="iconfont">&#xe60d;</i></div>
          <div>客户池</div>
        </li>
        <li @click="navClick($event)">
          <div><i class="iconfont">&#xe60d;</i></div>
          <div>招生</div>
        </li>
        <li @click="navClick($event)">
          <div><i class="iconfont">&#xe60d;</i></div>
          <div>学员</div>
        </li>
      </ul>
    </div>
    <div class="user-box">
      <div class="user-img user-new"><img src="../../static/index/user.png" alt=""></div>
      <div class="user-help"><i class="iconfont">&#xe905;</i></div>
      <div class="user-exit"><i class="iconfont">&#xe645;</i></div>
    </div>
    <div class="clearfloat"></div>
  </div>
</template>

<script>
  export default {
    name: 'headerNav',
    props: ['navid'],
    data() {
      return {
        msg: ''
      }
    },
    mounted() {
      this.setMenu(this.navid);
    },
    methods: {
      setMenu(i) {
        $(".nav-ul").children("li").eq(i).addClass("nav-active").siblings("li").removeClass("nav-active")
      },
      navClick(e) {
        let index = $(e.currentTarget).index();
        this.setMenu(index);
        this.$emit('update:navid', index);
      }
    }
  }
</script>

<style scoped lang="less">
  .header-body {
    height: 100%;
  }
  @imgW: 2.52rem;
  .img-box {
    float: left;
    width: @imgW;
    height: 100%;
    background: url("../../static/index/logo-bg.png") no-repeat;
    color: #ffffff;
    font-size: 0.2rem;
    font-weight: bold;
    @ciclrW: 0.6rem;
    .logo-img {
      width: @ciclrW;
      height: @ciclrW;
      border-radius: 50%;
      background-color: #ffffff;
      overflow: hidden;
      margin-left: 0.95rem;
      margin-top: 0.2rem;
      margin-bottom: 0.15rem;
    }
    .logo-text {
      text-indent: -.1rem;
    }
  }

  .ul-box {
    height: 100%;
    width: calc(100% - @userW - @imgW);
    overflow: hidden;
    float: left;
    overflow-x: auto;
    box-shadow: 0px 0px 6px 0px rgba(84, 86, 168, 0.24);
    .nav-ul {
      height: 100%;
      /*width: 100rem;*/
      color: rgba(139, 148, 165, 1);
      li {
        float: left;
        margin-right: .7rem;
        margin-top: .36rem;
        & > div:nth-of-type(1) {
          width: .38rem;
          height: .38rem;
          margin: auto;
          margin-bottom: .18rem;
          i {
            font-size: .4rem;
          }
        }
        & > div:nth-of-type(2) {
          font-size: .16rem;
          font-weight: bold;
        }
      }
      li:nth-of-type(1) {
        margin-left: .5rem;
      }
      li:hover {
        cursor: pointer
      }
      .nav-active {
        color: #4886FF;
      }
    }
  }

  @userW: 3.5rem;
  .user-box {
    width: @userW;
    float: right;
    height: 100%;
    box-shadow: 0px 0px 6px 0px rgba(84, 86, 168, 0.24);
    & > div {
      float: left;
      margin: auto;
      border-radius: 50%;
      margin-top: .53rem;
      margin-left: .7rem;
      width: @userotherW;
      height: @userotherW;
      line-height: @userotherW;
      color: #ffffff;
    }
    & > div:hover {
      cursor: pointer
    }
    @userimgW: 0.6rem;
    .user-img {
      width: @userimgW;
      height: @userimgW;
      margin-top: .4rem;
      margin-left: .4rem;
    }
    .user-new {
      position: relative;
      &:before {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: .15rem;
        height: .15rem;
        border-radius: 50%;
        background-color: #FFC828;
      }
    }
    @userotherW: 0.34rem;
    .user-help {
      background-color: #F7931E;
    }
    .user-exit {
      background-color: #F87777;
    }
  }
</style>
