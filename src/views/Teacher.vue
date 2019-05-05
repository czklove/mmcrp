<!--  -->
<template>
  <div class="teacher">
    <c-childnav :title="'教师服务中心'" :vclass="'childresetpwd'">
    </c-childnav>
    <c-swpic :imglist="imglist"></c-swpic>
    <div class="tab_nav">
      <ul>
        <li>
          <div class="nav_icon">
            <img src="../assets/img/teacher-icon-1.png" alt="">
          </div>
          <p>网上活动</p>
        </li>
        <li>
          <div class="nav_icon">
            <img src="../assets/img/icon-mybook.png" alt="">
          </div>
          <p>样书申请</p>
        </li>
        <li>
          <div class="nav_icon">
            <img src="../assets/img/icon-book-record.png" alt="">
          </div>
          <p>直播视频</p>
        </li>
        <li>
          <div class="nav_icon">
            <img src="../assets/img/icon-book-record.png" alt="">
          </div>
          <p>样书记录</p>
        </li>
      </ul>
    </div>
    <div class="rec">
      <c-midtilte :title="'精品推荐'"></c-midtilte>
      <div class="reclist">
        <van-row>
          <van-col span="12" class="recitem">
            <div><img src="http://new.crup.cn/ShowPic/Show?vpath=\Active\8a08014e-3f04-451b-82eb-0b8dfeea9ba4\8a08014e-3f04-451b-82eb-0b8dfeea9ba4.jpg&vtag=1&tptype=1" alt=""></div>
            <p>2019春季【财会·审计·税收】类新书推荐</p>
          </van-col>
          <van-col span="12" class="recitem">
            <div><img src="http://new.crup.cn/ShowPic/Show?vpath=\Active\8ac63e0e-61ca-4388-9782-65cdcad2403a\8ac63e0e-61ca-4388-9782-65cdcad2403a.jpg&vtag=1&tptype=1%22" alt=""></div>
            <p>市场营销教材专页推广</p>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import swpic from '@/components/home/swpic.vue'
import titlepanel from '@/components/public/titlepanel.vue'
import bookItem from '@/components/book/sampleItem.vue'
import titlemidpanel from '@/components/public/titlemidpanel.vue'
import childnav from '@/components/public/childnav.vue'
export default {
  data () {
    return {
      imglist: [
        {
          imgurl:'http://new.crup.cn/ShowPic/Show?vpath=/newadimg/a1d706be-a387-4a45-ac21-d17979c8a656.png&vtag=1&ptype=1',
          href: '',
        },
        {
          imgurl:'http://new.crup.cn/ShowPic/Show?vpath=/newadimg/44a7ef91-8e67-485e-b141-867ad29a1e32.jpg&vtag=1&ptype=1',
          href: 'http://m.crup.cn//News/Detail?doi=93bfbaf8-2b1b-448e-b0d2-03f5177a6ddf',
        },
        {
          imgurl:'http://new.crup.cn/ShowPic/Show?vpath=/newadimg/9e6ae198-9801-4b45-872d-e7c430b471c1.jpg&vtag=1&ptype=1',
          href: '#',
        }
      ]
    };
  },
  components: {
    'c-tilte': titlepanel,
    'c-bitem': bookItem,
    'c-swpic': swpic,
    'c-midtilte': titlemidpanel,
    'c-childnav': childnav
  }
}

</script>
<style lang='less' scoped>
.tab_nav {
  background-color: #fff;
  margin-top: .9375rem;
  ul {
    width: 100%;
    overflow: hidden;
    li {
      padding: .625rem;
      box-sizing:border-box;
      -moz-box-sizing:border-box; /* Firefox */
      -webkit-box-sizing:border-box; /* Safari */
      float: left;
      width: 25%;
      height: 6.25rem;
      line-height: 2.375rem;
      text-align: center;
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      border-top: 1px solid #ccc;
      img {
        height: 3.125rem;
        width: 3.125rem;
      }
      p {
        font-size: .875rem;
      }
    }
    li:last-child{
      border-right: none;
    }
  }
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
        font-size: .875rem;
        color: #666666;
        margin-top: .5rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .recitem:last-child{
      border-right:none;
    }
  }
</style>
