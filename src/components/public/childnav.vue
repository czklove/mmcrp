<!--  -->
<template>
  <div class="childnav">
    <div class="icon">
      <van-icon name="arrow-left" class="left-icon" @click="goback"/>
    </div>
    <h2 :class="'nav_text '+ vclass"><span>{{title}}</span></h2>
  </div>
</template>

<script>
export default {
  props: ['title', 'vclass'],
  data () {
    return {
    };
  },
  methods: {
    goback() {
      /* 返回上一页，方法已经在main.js 加入 */
      this.$router.back(-1)
    }
  }
}
</script>
<style lang='less' scoped>
.childnav{
  height: 3.125rem;
  background: url(~@/assets/img/rect-grade.png) no-repeat center;
  position: relative;
  text-align: center;
  .icon{
    position: absolute;
    .left-icon{
      color: #fff;
      left: 10px;
      line-height: 3.125rem;
      font-size: 1.25rem;
    }
  }
  .nav_text {
    display: inline-block;
    line-height: 3.125rem;
    color: #fff;
    font-size: 1.25rem;
    span{
      margin-left: 1.875rem;
    }
  }
  .childbook {
    background: url('~@/assets/img/book-icon.png') no-repeat left;
    background-size: auto 40%;
  }
  .childteacher {
    background: url('~@/assets/img/icon-teacher.png') no-repeat left;
    background-size: auto 40%;
  }
  .childaccount {
    background: url('~@/assets/img/login-icon.png') no-repeat left;
    background-size: auto 40%;
  }
  .childregist {
    background: url('~@/assets/img/register-icon.png') no-repeat left;
    background-size: auto 40%;
  }
  .childresetpwd {
    background: url('~@/assets/img/book-icon.png') no-repeat left;
    background-size: auto 40%;
  }
  .childpercent {
    background: url('~@/assets/img/per-icon.png') no-repeat left;
    background-size: auto 40%;
  }
}
</style>
