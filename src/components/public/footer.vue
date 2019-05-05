<!--  -->
<template>
  <div>
    <footer>
      <ul @click="morehide">
        <router-link class="home" tag="li" :to="{ name: 'home' }">
          <a href="javascript"><span>首页</span></a>
        </router-link>
        <router-link class="book" tag="li" :to="{ name: 'book' }">
          <a href="javascript"><span>图书</span></a>
        </router-link>
        <router-link class="teacher" tag="li" :to="{name: 'Teacher'}">
          <a href="javascript"><span>教师服务</span></a>
        </router-link>
        <li @click.stop="moreshow" class="more">
          <a href="javascript:;"><span>更多</span></a>
          <div class="morespan" v-show="this.$store.state.linkmore">
            <router-link tag="span" :to="{name: 'event'}">
              大事记
            </router-link>
            <router-link tag="span" :to="{name: 'Teacher'}">
              新闻列表
            </router-link>
            <router-link tag="span" :to="{name: 'Teacher'}">
              课程中心
            </router-link>
            <router-link tag="span" :to="{name: 'Teacher'}">
              关于我们
            </router-link>
            <router-link tag="span" :to="{name: 'Teacher'}" class="no-bord-btm">
              天猫购书
            </router-link>
            <i class="ms_icon"></i>
          </div>
        </li>
        <router-link class="per" tag="li" :to="{name: 'account'}">
          <a href="javascript"><span>个人中心</span></a>
        </router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'header',
      value: '',
    };
  },
  methods: {
    moreshow () {
      if(this.$store.state.linkmore) {
        this.$store.commit('updatelinkmore',false)
      } else {
        this.$store.commit('updatelinkmore',true)
      }
    },
    morehide () {
      this.$store.commit('updatelinkmore',false)
    }
  }
}
</script>
<style lang='less' scoped>
  footer {
    height: 3.125rem;
    padding: .625rem 0rem .5rem;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    display: flex;
    background-color: #fff;
    z-index: 9999;
    ul{
      height: 100%;
      width: 100%;
      li{
        float: left;
        height: 100%;
        width:20%;
        text-align: center;
        color: #f1f1f1;
        background: url(~@/assets/img/icon-home.png) no-repeat center top;
        background-size:auto 50%;text-align: center;
        cursor: pointer;
        a{
          display: inline-block;
          height: 3.4375rem;
          color:#333333;
          span{
            display: inline-block;
            margin-top: 2.1875rem;
            font-size: .875rem;
          }
        }
        a:hover{
          color:#333333;
        }
      }
      li.more {
        position: relative;
        .morespan{
          position: absolute;
          top:-13.5rem;
          left: -0.9rem;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          background-color:#f7f7f7;
          span{
            color: #333333;
            font-size: .875rem;
            display: block;
            height: 2.5rem;
            line-height: 2.5rem;
            width: 6.75rem;
            border-bottom: 1px solid #dddddd;
          }
          span:last-child {
            border-bottom: 1px solid red;
          }
          .ms_icon {
            position: absolute;
            margin-top:-1px;
            left: 2.865rem;
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 10px solid #f7f7f7;
          }
        }
      }
      .home{background: url(~@/assets/img/icon-home.png) no-repeat center top;background-size:auto 50%;}
      .book{background: url(~@/assets/img/icon-book.png) no-repeat center top;background-size:auto 50%;}
      .teacher{background: url(~@/assets/img/icon-teacherser.png) no-repeat center top;background-size:auto 50%;}
      .more{background: url(~@/assets/img/icon-more.png) no-repeat center top;background-size:auto 50%;}
      .per{background: url(~@/assets/img/icon-account.png) no-repeat center top;background-size:auto 50%;}
      .home:hover,.home.active{background: url(~@/assets/img/icon-home-h.png) no-repeat center top;background-size:auto 50%;}
      .book:hover,.book.active{background: url(~@/assets/img/icon-book-h.png) no-repeat center top;background-size:auto 50%;}
      .teacher:hover,.teacher.active{background: url(~@/assets/img/icon-teacherser-h.png) no-repeat center top;background-size:auto 50%;}
      .more:hover,.more.active{background: url(~@/assets/img/icon-more-h.png) no-repeat center top;background-size:auto 50%;}
      .per:hover,.per.active{background: url(~@/assets/img/icon-account-h.png) no-repeat center top;background-size:auto 50%;}
    }
  }
</style>
