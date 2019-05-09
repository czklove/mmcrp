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
            <van-col span="17">
              <div class="lefttext">
                <span></span>
                <h2>中国人民大学出版社与意大利路易斯大学签署“一带一路”学术出版联盟合作协议</h2>
                <p>2019-04-08</p>
              </div>
            </van-col>
            <van-col span="7" class="fr-right">
              <img src="../../src/assets/img/event1.gif" alt="">
            </van-col>
          </van-row>
        </li>
        <li>
          <van-row>
            <van-col span="17">
              <div class="lefttext">
                <span></span>
                <h2>中国人民大学出版社与意大利路易斯大学签署“一带一路”学术出版联盟合作协议</h2>
                <p>2019-04-08</p>
              </div>
            </van-col>
            <van-col span="7" class="fr-right">
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
      padding:0 .875rem 0 1rem;
      .fr-right {
        text-align: right;
        padding: .9375rem 0;
        img {
          width: 5.9375rem;
          height: 4rem;
          border-radius: .25rem;
        }
      }
      .lefttext{
        margin-left: .75rem;
        border-left: .1875rem solid #ccc;
        padding: .9375rem 0;
        padding-left: 1.1rem;
        position: relative;
        h2{
          font-size: .9375rem;
          line-height: 1.6rem;
          height: 3.2rem;
          overflow: hidden;
        }
        p {
          font-size: .875rem;
          color: #ccb18e;
        }
        span {
          position: absolute;
          width: 3rem;
          height: 3rem;
          left: -1.125rem;
          margin-top:.875rem;
          background: url(~@/assets/img/dot-yellow.png) no-repeat;
          background-size: 70% auto;
          z-index: 99;
        }
      }
    }
    li:nth-child(odd) {background: #f1f1f1;}
  }
}
</style>
