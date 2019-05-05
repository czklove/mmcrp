<!--  -->
<template>
  <div class="swpic">
    <van-swipe :autoplay="3000" indicator-color="white">
      <!-- <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item> -->
      <van-swipe-item v-for="(image, index) in imglist" :key="index" class="vswipe">
        <img :src="image.imgurl" alt="" :height="height">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props:['imglist','height'],
  data () {
    return {
    };
  }
}

</script>
<style lang='less' scoped>
.swpic {
  width: 100%;
  margin-bottom: .75rem;
  .van-swipe{
    height: 100%;
    img{
      width: 100%;
    }
  }
}
</style>
