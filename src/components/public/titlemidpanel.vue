<!-- 标题栏组件 -->
<template>
  <div class="panl">
    <div class="title">
      <van-row>
        <van-col span="24">
          <h2>{{title}}</h2>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'title' ],
  name: 'titlepanl',
  data () {
    return {
    };
  }
}

</script>
<style lang='less' scoped>
.panl{
  padding: .625rem 0;
  height: 1.875rem;
  background-color: #fff;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  .title{
    padding: 0px .9375rem;
    height: 100%;
    .van-row{
      height: 100%;
      h2{
        font-size: 1.25rem;
        line-height: 1.875rem;
        text-align: center;
      }
    }
  }
}
</style>
