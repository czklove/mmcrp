<!-- PerCenter 个人中心 -->
<template>
  <div class="percenter">
    <c-childnav :title="'个人中心'" :vclass="'childpercent'">
    </c-childnav>
    <div class="perbanner">
      <div>
        <div class="tximg"></div>
        <p class="text">118611337031,您好！<span>签到领积分</span></p>
      </div>
    </div>
    <div class="pertitle">
      <c-tilte :title="'教师服务'" :navs="[]" class="perctitle">
        <span>共有积分：<font class="red">6524</font></span>
      </c-tilte>
      <van-cell-group class="perlist">
        <van-cell title="我的教师认证" class="perbtn" is-link>
          <van-icon slot="icon" name="btn" class="perjs"/>
        </van-cell>
        <van-cell title="我的电子样书" class="perbtn" icon="location-o" is-link>
          <van-icon slot="icon" name="btn" class="perdz"/>
        </van-cell>
        <van-cell title="我的数字教材" class="perbtn" icon="location-o" is-link>
          <van-icon slot="icon" name="btn" class="persz"/>
        </van-cell>
        <van-cell title="我的收藏" class="perbtn" icon="location-o" is-link>
          <van-icon slot="icon" name="btn" class="persc"/>
        </van-cell>
        <van-cell title="样书申请记录" class="perbtn" icon="location-o" is-link>
          <van-icon slot="icon" name="btn" class="perys"/>
        </van-cell>
        <van-cell title="参加活动记录" class="perbtn" icon="location-o" is-link>
          <van-icon slot="icon" name="btn" class="perhd"/>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="pertitle">
      <c-tilte :title="'基本信息'" :navs="[]" class="perctitle">
      </c-tilte>
      <van-cell-group class="perlist">
        <van-cell title="信息修改" class="perbtn" icon="location-o" is-link>
          <van-icon slot="icon" name="btn" class="perxxxg"/>
        </van-cell>
        <van-cell title="密码修改" class="perbtn" icon="location-o" is-link>
          <van-icon slot="icon" name="btn" class="permmxg"/>
        </van-cell>
        <van-cell title="新消息" class="perbtn" icon="location-o" is-link>
          <van-icon slot="icon" name="btn" class="perxxx"/>
        </van-cell>
        <van-cell title="我的积分" class="perbtn" icon="location-o" is-link>
          <van-icon slot="icon" name="btn" class="perwdjf"/>
        </van-cell>
        <van-cell title="我的地址" class="perbtn" icon="location-o" is-link>
          <van-icon slot="icon" name="btn" class="perwddz"/>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="layout">
      <van-button size="large" class="logobutton">退出登录</van-button>
    </div>
  </div>
</template>

<script>
import childnav from '@/components/public/childnav.vue'
import titlepanel from '@/components/public/titlepanel.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    'c-childnav': childnav,
    'c-tilte': titlepanel
  }
}
</script>
<style lang='less'>
.percenter {
  margin-bottom: 5rem;
  .perbanner {
    background: url('~@/assets/img/per-banner.jpg') no-repeat left;
    padding: 1rem 0;
    background-size:100% auto;
    .tximg {
      width: 4.625rem;
      height: 4.625rem;
      background: url('~@/assets/img/user-photo.png') no-repeat left;
      margin:0 auto;
      background-size: auto 90%;
    }
    .text{
      margin-top: .625rem;
      text-align: center;
      color: #fff;
      font-size: 1rem;
      span{
        font-size:.875rem;
        padding:0 5px;
        line-height: 1.5625rem;
        height: 1.5625rem;
        border-radius: .625rem;
        background-color: #c4444f;
      }
    }
  }
  .pertitle {
    margin-top: .9375rem;
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    background-color: #fff;
    .perctitle {
      font-size: 1.125rem;
      border: none;
    }
    .perlist {
      padding-right: .9375rem;
      .perbtn {
        color: #999999;
        .van-cell__right-icon {
          margin-right: -1rem;
        }
      }
      .perjs{
        background:url('~@/assets/img/per-icon-1.png') no-repeat left;
      }
      .perdz{
        background:url('~@/assets/img/per-icon-2.png') no-repeat left;
      }
      .persz{
        background:url('~@/assets/img/per-icon-3.png') no-repeat left;
      }
      .persc{
        background:url('~@/assets/img/per-icon-5.png') no-repeat left;
      }
      .perys{
        background:url('~@/assets/img/per-icon-6.png') no-repeat left;
      }
      .perhd{
        background:url('~@/assets/img/per-icon-7.png') no-repeat left;
      }
      .perxxxg{
        background:url('~@/assets/img/per-info-1.png') no-repeat left;
      }
      .permmxg{
        background:url('~@/assets/img/per-info-2.png') no-repeat left;
      }
      .perxxx{
        background:url('~@/assets/img/per-info-3.png') no-repeat left;
      }
      .perwdjf{
        background:url('~@/assets/img/per-info-4.png') no-repeat left;
      }
      .perwddz{
        background:url('~@/assets/img/per-info-5.png') no-repeat left;
      }
      .van-icon-btn{
        margin-top: .25rem;
        margin-right: .5rem;
        width: 1.125rem;
        height: 1.125rem;
        background-size: 1.125rem 1.125rem;
      }
    }
  }
  .layout {
    margin-top: .625rem;
    padding:0 .9375rem;
    .logobutton{
      border-radius: .3125rem;
      color: #ae0e16;
    }
  }
}
</style>
