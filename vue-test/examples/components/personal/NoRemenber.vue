<template>
  <div id="nopxenber">
    <Header msg_title="登录密码找回" msg_right="" type="0"></Header>
    <div class="cont">
      <p>我们已经发送了校验码到你的手机:</p>
      <span>145******34</span>
    </div>
    <div class="wenben">
<!--      <img src="../../../static/images/quan.png">-->
      <span>为确保是你本人操作，请完成以下验证</span>
    </div>
    <div class="message">
      <span>校验码:</span>
      <input class="shuru_yzm" placeholder="短信校验码" v-model="one" @keyup="bianse"></input>
      <button v-bind:disabled="dis" :class="{huise:!isshow}" @click="doThis" v-text="yzm_cont" class="huoqu_yzm"></button>
    </div>
    <button v-bind:disabled="distwo" v-if="!btnShow" class="heise">下一步</button>
    <button v-if="btnShow" class="lanse" @click="next">下一步</button>
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
        yzm_cont: '获取短信校验码',
        isshow:true,
        dis: false,
        distwo: '',
        time: 3,
        timer: null,
        btnShow: false,
        one: '',
      }
    },
    methods:{
      next(){
        this.$router.replace('/amend')
      },
      bianse(){
        if(this.one.length>0){
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
          console.log(this.time);
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
    color: #a4a4a4 !important;
  }
  #nopxenber{
    height: 100vh;
  }
  .cont{
    width: 100%;
    height: 85px;
    background: #fff;
  }
  .cont p{
    text-align: center;
    font-size: 15px;
    line-height: 50px;
  }
  .cont span{
    display: block;
    text-align: center;
    font-size: 18px;
  }
  .wenben,
  .message{
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding: 10px 20px;
  }
  .message{
    display: flex;
    justify-content: flex-start;
  }
  .wenben span{
    font-size: 12px;
  }
  .message{
    background: #fff;
  }
  .message input{
    font-size: 14px;
    border: none;
    outline: none;
    text-indent:10px;
    width: 220px;
  }
  .message button{
    font-size: 14px;
    border: none;
    outline: none;
    border-left: 2px solid #6c6a6a;
    text-indent: 5px;
    background: #fff;
  }
  .heise,
  .lanse{
    border: none;
    outline: none;
    background: #dcdcdc;
    width: 340px;
    height: 38px;
    display: block;
    margin: 15px auto;
    border-radius: 8px;
    border: 1px solid #fdfdfd;
    color: #a4a4a4;
    font-size: 16px;
  }
  .lanse{
    background: #55aced;
    color: #fff;
  }
</style>
