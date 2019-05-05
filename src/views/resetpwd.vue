<!--  -->
<template>
  <div class="resetpwd">
    <c-childnav :title="'修改密码'" :vclass="'childresetpwd'">
    </c-childnav>
    <div class="logoform">
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="手机号"
          placeholder="请输入手机号"
          :error-message="usererror"
        />
        <van-field
          v-model="password"
          type="password"
          label="新密码"
          required
          placeholder="新密码"
          :error-message="usererror"
        />
        <van-field
          v-model="code"
          center
          clearable
          required
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
          <van-button slot="button" size="small" type="primary" :disabled="sendstate" @click.native="sendcode" class="btn">{{btntext}}</van-button>
        </van-field>
      </van-cell-group>
      <van-button size="large" class="logobutton">修&nbsp;改</van-button>

    </div>
  </div>
</template>

<script>
import childnav from '@/components/public/childnav.vue'
import { setInterval } from 'timers';
export default {
  data () {
    return {
      username: '',
      password: '',
      code: '',
      usererror: '',
      radio: '1',
      btntext: '发送验证码',
      sendstate: false,
      curCount: 59,
      InterValObj: null
    }
  },
  components: {
    'c-childnav': childnav
  },
  methods: {
    sendcode () {
      this.sendstate = true
      this.curCount = 59
      this.InterValObj = window.setInterval(this.updatedsendcode, 1000);
    },
    updatedsendcode () {
      if (this.curCount <= 0) {
          this.sendstate = false
          this.curCount = 59
          window.clearInterval(this.InterValObj);//停止计时器
          this.btntext ="重新发送";
        }
        else {
          this.curCount--;
          this.btntext =`在${this.curCount}秒点此重发)`;
        }
    }
  }
}

</script>
<style lang='less'>
.resetpwd {
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
      font-size: .75rem;
      color: #666;
      .strtext{
        color: #ccb18e;
      }
    }
    .btn {
      height: 26px;
      line-height: 26px;
      padding: 0 4px;
      font-size: 2px;
      color: #ccb18e;
      border: 1px solid #ccb18e;
      border-radius: 5px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      cursor: pointer;
      background-color: #fff;
    }
  }
}
</style>
