<template>
  <div id="retrieve">
    <Header msg_title="登录密码找回" msg_right="" type="0"></Header>
    <div class="container">
      <input class="phone" placeholder="请输入账户所绑定的手机号码" v-model="one" @keyup="bianse"></input>
      <div class="yzm">
        <input class="shuru_yzm" placeholder="请输入验证码" v-model="two" @keyup="bianse"></input>
        <button v-bind:disabled="dis" :class="{huise:!isshow}" @click="doThis" v-text="yzm_cont" class="huoqu_yzm"></button>
      </div>
      <p>绑定的手机号码已不在使用,请<a>联系客服</a></p>
      <button v-bind:disabled="distwo" v-if="!btnShow" class="heise">下一步</button>
      <button v-if="btnShow" class="lanse" @click="next">下一步</button>
    </div>
  </div>
</template>
<script>
  import Header from '../public/Header'
  export default {
    components: {
      Header,
    },
    data() {
      return {
        yzm_cont: '获取验证码',
        isshow:true,
        dis: false,
        distwo: '',
        time: 3,
        timer: null,
        btnShow: false,
        one: '',
        two: '',
      }
    },
    methods:{
      next(){
        this.distwo='';
        this.$router.push('/amend')
      },
      bianse(){
        if(this.one.length>0&&this.two.length>0){
          this.btnShow=true;
        }
        else{
          this.btnShow=false;
        }
      },
      doThis(){
        this.time=3;
        clearInterval(this.timer);
        this.timer=setInterval(() => {
          // console.log(this.time);
          if(this.time<=0){
            this.yzm_cont="点击重新发送";
            this.dis= false;
            this.isshow=!this.isshow;
            clearInterval(this.timer);
          }else{
            this.isshow=null;
            this.yzm_cont="剩余时间"+(this.time)+"秒";
            this.dis='';
            this.time--;
          }
        },1000);
      }
    }
  };
</script>

<style scoped>
  .huise {
     background: #eee !important;
    color: #a4a4a4 !important;
  }
  #retrieve{
    height: 100vh;
  }
  .container{
    width: 90%;
    margin: 0 auto;
  }
  input{
    width: 100%;
    height: 36px;
    border: none;
    border: 1px solid #ededed;
    outline: none;
    margin: 5px 0;
    text-indent: 10px;
    font-size: 12px;
    border-radius: 2px;
  }
  .yzm{
    display: flex;
    justify-content: space-between;
  }
  .shuru_yzm{
    width: 62%;
  }
  .huoqu_yzm{
    width: 36%;
    height: 36px;
    border: none;
    border: 1px solid #ededed;
    outline: none;
    margin: 5px 0;
    text-align: center;
    font-size: 12px;
    background: #55aced;
    color: #fff;
    border-radius: 4px;
  }
  p{
    font-size:12px;
    color: #bebebe;
  }
  a{
    color: #55aced;
    margin-left: 5px;
  }
  .heise,
  .lanse{
    border: none;
    outline: none;
    background: #dcdcdc;
    width: 100%;
    height: 38px;
    display: block;
    border-radius: 4px;
    border: 1px solid #fdfdfd;
    color: #a4a4a4;
    font-size: 16px;
    margin-top: 6px;
  }
  .lanse{
    background: #55aced;
    color: #fff;
  }
</style>
