<!--  -->
<template>
  <div class="event">
    <div class="eventtitle">
      <div class="title">
        <van-row>
          <van-col span="10">
            <h2>大事记</h2>
          </van-col>
          <van-col span="14">
            <ul class="yearlist">
              <li v-for="(item,index) in years" :key="`${index}nav`" :class="item.active">{{item.name}}</li>
            </ul>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="eventnewlist">
      <ul>
        <li>
          <van-row>
            <van-col span="16">
              <h2>a</h2>
            </van-col>
            <van-col span="8" class="fr-right">
              <img src="../../src/assets/img/event1.gif" alt="">
            </van-col>
          </van-row>
        </li>
        <li>
          <van-row>
            <van-col span="16">
              <h2>b</h2>
            </van-col>
            <van-col span="8" class="fr-right">
              <img src="../../src/assets/img/event2.gif" alt="">
            </van-col>
          </van-row>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      years: [
        {
          name: '2019',
          active: 'active'
        },
        {
          name: '2018',
          active: ''
        },
        {
          name: '2017',
          active: ''
        }
      ]
    };
  }
}
</script>
<style lang='less'>
.eventtitle{
  height: 3.125rem;
  background: url(~@/assets/img/rect-grade.png) no-repeat center;
  position: relative;
  .title{
    padding: 0px .9375rem;
    height: 100%;
    .van-row{
      height: 100%;
      h2{
        font-size: 1.25rem;
        height: 3.125rem;
        line-height: 3.125rem;
        padding-left: 1.5rem;
        color: #fff;
        background: url('~@/assets/img/big-eve-icon.png') no-repeat left;
        background-size: auto 40%;
      }
      ul.yearlist {
        height: 3.125rem;
        font-size: .875rem;
        text-align: right;
        li {
          height: 3.125rem;
          line-height: 3.125rem;
          display: inline-block;
          margin-left: .5rem;
          color: #fff;
        }
        .active{
          font-weight: bold;
        }
      }
    }
  }
}
.eventnewlist {
  ul {
    overflow: hidden;
    background-color: #fff;
    li {
      padding:.9375rem .875rem .9375rem 1rem;
      .fr-right {
        text-align: right;
        img {
          width: 5.9375rem;
          height: 4rem;
          border-radius: .25rem;
        }
      }
    }
    li:nth-child(odd) {background: #f1f1f1;}
  }
}
</style>
