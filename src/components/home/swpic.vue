<!--  -->
<template>
  <div class="swpic">
    <swiper :options="swiperOption" class="swiper">
		  <swiper-slide v-for="(slide, index) in imglist"  :key="index"><h1><img :src="slide.imgurl" alt=""></h1></swiper-slide>
		  <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props:['imglist','height'],
  data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
            autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          effect: 'fade',
        }
      }
    },
    mounted() {
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
  .swiper-slide{opacity: 0 !important; transition: opacity 2s !important;}
  .swiper-slide-active{opacity: 1 !important;transition: opacity 2s !important;} 
}
</style>
