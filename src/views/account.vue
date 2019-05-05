<!--  -->
<template>
  <div class="account">
    <c-childnav :title="'登录'" :vclass="'childaccount'">
    </c-childnav>
    <div class="logobanner">
      <img src="../assets/img/login-banner.jpg" alt="">
    </div>
    <div class="logoform">
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          placeholder="请输入用户名"
          :error-message="usererror"
        />
        <van-field
          v-model="password"
          type="password"
          label="密码"
          required
          placeholder="请输入密码"
          :error-message="usererror"
        />
        <van-field
          v-model="code"
          center
          clearable
          label="验证码"
          required
          right-icon="http://m.crup.cn/ValidateCode?time=0.8646668976227538"
          placeholder="请输入验证码"
          class="vcode"
        >
        </van-field>
      </van-cell-group>
      <van-button size="large" class="logobutton">登&nbsp;录</van-button>
      <p class="acagup"><router-link tag="span" class="fl regist" :to="{name: 'regist'}">立即注册</router-link><router-link tag="span" class="fr" :to="{name: 'resetpwd'}">忘记密码?</router-link></p>
    </div>
  </div>
</template>

<script>
import childnav from '@/components/public/childnav.vue'
export default {
  data () {
    return {
      username: '',
      password: '',
      code: '',
      usererror: '',
    }
  },
  components: {
    'c-childnav': childnav
  }
}

</script>
<style lang='less'>
.account {
  .logobanner {
    width: 100%;
  }
  .logoform {
    padding: .9375rem;
    .vcode {
      .van-field__right-icon {
        i {
          width: 5.125rem;
          height: 1.625rem;
          img {
            position: absolute;
            width: 5.125rem;
            height: 1.625rem;
          }
        }
      }
    }
    .logobutton {
      margin-top: .9375rem;
      border-radius: .3125rem;
      background-color: #ae0e16;
      color: #fff;
      font-size: 1.125rem;
      height: 2.875rem;
      line-height: 2.875rem;
      margin-bottom: .625rem
    }
    .acagup {
      padding: 0 5px;
      font-size: .875rem;
      color: #666;
      .regist{
        color: #ae0e16;
      }
    }
  }
}
</style>
