<!--  -->
<template>
  <div class="book">
    <c-childnav :title="'图书中心'" :vclass="'childbook'">
    </c-childnav>
    <div class="classfic">
      <ul>
        <li>一般图书</li>
        <li>教材</li>
        <li>学术专著</li>
        <li>考试</li>
      </ul>
    </div>
    <div class="new-book">
      <c-tilte :title="'新书速递'" :navs="[]"></c-tilte>
      <div class="h-newlist">
          <ul>
            <c-bitem></c-bitem>
          </ul>
      </div>
    </div>
    <div class="ts-book">
      <c-tilte :title="'图书'" :navs="[{ name:'人文', active: 'active'},{ name: '经管' },{ name: '社科' },{ name: '其他' }]"></c-tilte>
      <div class="h-newlist">
          <ul>
            <c-bitem></c-bitem>
          </ul>
      </div>
    </div>
    <div class="jc-book">
      <c-tilte :title="'教材'" :navs="[{ name:'经济', active: 'active'},{ name: '工商' },{ name: '人文社科' },{ name: '职教' }]"></c-tilte>
      <div class="h-newlist">
          <ul>
            <c-bitem></c-bitem>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import childnav from '@/components/public/childnav.vue'
import titlepanel from '@/components/public/titlepanel.vue'
import bookItem from '@/components/book/sampleItem.vue'
export default {
  data () {
    return {
    };
  },
  components: {
    'c-tilte': titlepanel,
    'c-bitem': bookItem,
    'c-childnav': childnav
  }
}

</script>
<style lang='less' scoped>
.classfic {
  margin-bottom: .75rem;
  background-color: #fff;
  ul{
    width: 100%;
    overflow: hidden;
    li{
      box-sizing:border-box;
      -moz-box-sizing:border-box; /* Firefox */
      -webkit-box-sizing:border-box; /* Safari */
      float: left;
      width: 25%;
      height: 2.5rem;
      line-height: 2.375rem;
      text-align: center;
      border-bottom: 2px solid transparent;
      border-right: 1px solid #ccc;
    }
    li:last-child {
      border-right: none;
    }
  }
}
.new-book {
  background-color: #fff;
  .h-newlist{
    border-top: 1px solid #ccc;
  }
}
.ts-book{
  margin-top: .625rem;
  background-color: #fff;
  .h-newlist{
    border-top: 1px solid #ccc;
  }
}
.jc-book{
  margin-top: .625rem;
  background-color: #fff;
  .h-newlist{
    border-top: 1px solid #ccc;
  }
  margin-bottom: 5rem;
}
</style>
