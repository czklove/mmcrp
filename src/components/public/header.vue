<!--  -->
<template>
  <div>
    <header>
      <div class="inner">
        <van-row>
          <van-col span="10"><a href="javascript:;" class="logo">
            <img src="../../assets/img/logo.png" alt="">
          </a>
          </van-col>
          <van-col span="14">
            <div class="search">
              <input type="text" placeholder="">
              <span><i class="van-icon van-icon-search"><!----></i></span>
            </div>
          </van-col>
        </van-row>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'header',
      value: ''
    };
  }
}
</script>
<style lang='less' scoped>
  header {
    position: fixed;
    z-index: 9999;
    overflow: hidden;
    width: 100%;
    .inner {
      background-color: #ae0e16;
      height: 1.875rem;
      padding: .625rem .9375rem;
      overflow: hidden;
      .logo{
        display: inline-block;
        margin-top: .375rem;
        width: 7.875rem;
        height: 1.125rem;
        text-align: left;
        img{
          width: 100%;
        }
      }
      .search{
        padding: 0px;
        height: 1.75rem;
        border-radius: .9375rem;
        padding-left: .9375rem;
        padding-right: 1.875rem;
        background-color: #fff;
        overflow: hidden;
        margin-left: .9375rem;
        position: relative;
        span{
          display: inline-block;
          width: 1rem;
          height: 1rem;
          position: absolute;
          right: .5rem;
          top:.375rem;
        }
        input{
          width: 100%;
          line-height: 1.625rem;
          border: none;
          outline: none;
        }
      }
    }
  }
</style>
