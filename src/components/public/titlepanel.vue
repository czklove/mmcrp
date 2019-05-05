<!-- 标题栏组件 -->
<template>
  <div class="panl">
    <div class="title">
      <van-row>
        <van-col span="10">
          <h2>{{title}}</h2>
        </van-col>
        <van-col span="14">
          <slot></slot>
          <ul>
            <van-tag v-for="(item,index) in navs" :key="`${index}nav`" :class="item.active">{{item.name}}</van-tag>
          </ul>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'title', 'navs' ],
  name: 'titlepanl',
  data () {
    return {
    };
  }
}

</script>
<style lang='less' scope>
.panl{
  padding: .625rem 0;
  height: 1.375rem;
  background-color: #fff;
  overflow: hidden;
  .title{
    padding: 0px .9375rem;
    height: 100%;
    .van-row{
      height: 100%;
      h2{
        font-size: 1.25rem;
        line-height: 1.25rem;
        padding-left: .625rem;
        border-left: .3125rem solid #ae0e16
      }
      span{
        float: right;
        font-size: 12px;
        line-height: 1.8rem;
      }
      font.red {
        color: red;
        font-weight: bold;
      }
      ul {
        font-size: .75rem;
        text-align: right;
        span {
          margin-left:.1875rem;
          color: #fff;
        }
        .active{
          background-color: #ae0e16 !important;
        }
      }
    }
  }
}
</style>
