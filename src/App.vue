<template>
  <div id="app">
    <c-header></c-header>
    <div class="main">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
    <c-footer></c-footer>
  </div>
</template>
<script>
import Cheader from '@/components/public/header.vue'
import Cfooter from '@/components/public/footer.vue'
export default {
  data () {
    return {
      active: 0
    }
  },
  components: {
    'c-header': Cheader,
    'c-footer': Cfooter,
  }
}
</script>
<style lang="less">
#app {
  .main {
    background-color: #f1f1f1;
    overflow: hidden;
    top: 3.125rem;
    position: relative;
  }
}
.fade-enter{
	opacity: 0;
	transform: translateX(100%);

}
.fade-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.fade-enter-active,
.fade-leave-active{
	transition: all 0.5s ease;
}
</style>
