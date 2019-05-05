<template>
  <div class="home">
    <c-swpic :height="'13.125rem'" :imglist="imglist"></c-swpic>
    <c-tilte :title="'新闻'" :navs="[{ name:'新闻动态', active: 'active'},{ name: '媒体聚焦' },{ name: '海外合作' }]"></c-tilte>
    <div class="h-newlist">
        <ul>
          <c-nitem v-for="(item,index) in newlist" :key="`${index}nitem`"></c-nitem>
        </ul>
        <c-more></c-more>
    </div>
    <div class="new_nav">
      <c-swpic :height="'13.125rem'" :imglist="imglist"></c-swpic>
    </div>
    <c-tilte :title="'新书速递'" :navs="[]"></c-tilte>
    <div class="h-newlist">
        <ul>
          <c-bitem v-for="(item,index) in booklist" :key="`${index}bitem`"></c-bitem>
        </ul>
        <c-more></c-more>
    </div>
    <div class="rec">
      <c-midtilte :title="'专题推荐'"></c-midtilte>
      <div class="reclist">
        <van-row>
          <van-col span="12" class="recitem">
            <div><img src="http://new.crup.cn/ShowPic/Show?vpath=/Logical/79ae8a3f-c915-44bd-b69c-738616b88c1e/79ae8a3f-c915-44bd-b69c-738616b88c1e.gif&vtag=1&ptype=1%22" alt=""></div>
            <p>当月书单</p>
          </van-col>
          <van-col span="12" class="recitem">
            <div><img src="http://new.crup.cn/ShowPic/Show?vtag=1&ptype=1&vpath=/News/0ef64146-2cd9-4724-b2b0-ba7258b2c686/0ef64146-2cd9-4724-b2b0-ba7258b2c686.jpg" alt=""></div>
            <p>2018人大社好书精选</p>
          </van-col>
        </van-row>
        <c-more></c-more>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import swpic from '@/components/home/swpic.vue'
import titlepanel from '@/components/public/titlepanel.vue'
import titlemidpanel from '@/components/public/titlemidpanel.vue'
import newItem from '@/components/news/newItem.vue'
import bookItem from '@/components/book/bookItem.vue'
import lookmore from '@/components/public/lookmore.vue'
const name = 'chenzhen'

export default {
  name: 'home',
  data () {
    return {
      newlist: ['','','','','',''],
      booklist: ['','',''],
      imglist: [
        {
          imgurl:'http://new.crup.cn/ShowPic/Show?vpath=/newadimg/21a20c29-3a1f-4573-af6d-3c6f909c809a.jpg&vtag=1&ptype=1',
          href: '#',
        },
        {
          imgurl:'http://new.crup.cn/ShowPic/Show?vpath=/newadimg/06293041-121e-4a37-85ed-1f4d09617d82.jpg&vtag=1&ptype=1',
          href: '#',
        }
      ]
    }
  },
  components: {
    'c-swpic': swpic,
    'c-tilte': titlepanel,
    'c-nitem': newItem,
    'c-bitem': bookItem,
    'c-midtilte': titlemidpanel,
    'c-more': lookmore
  },
  methods: {
  }
}
</script>
<style lang="less">
.home{
  margin-bottom: 68px;
  .h-newlist{
    border-top: 1px solid #ccc;
    background-color: #fff;
    min-height: 30px;
    ul{
      overflow: hidden;
    }
  }
  .new_nav{
    margin: .625rem;
  }
  .rec {
    margin-top: .625rem;
    background-color: #fff;
    .recitem {
      padding: .625rem;
      border-right:1px solid #ccc;
      border-bottom:1px solid #ccc;
      text-align: center;
      img{
        width: 9.875rem;
        height: 5.5rem;
      }
      p{
        font-size: .75rem;
        color: #666666;
        margin-top: .5rem;
      }
    }
    .recitem:last-child{
      border-right:none;
    }
  }
}
</style>

