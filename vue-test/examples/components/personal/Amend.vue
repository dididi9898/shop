<template>
  <div id="amend">
    <Header msg_title="设置登录密码" msg_right="" type="0"></Header>
    <input class="old" v-model="one" @keyup="bianse" placeholder="请输入当前登录密码"></input>
    <div class="yanjing">
<!--      <img @click="changeType" src="../../../static/images/yanjing.png">-->
      <input class="new" v-model="two" @keyup="bianse" type="text" placeholder="确认新密码" v-if="pwdType">
      <input class="new" v-model="two" @keyup="bianse" type="password" placeholder="确认新密码"  v-else>
    </div>
    <p>必须是6-20个英文字母、数字或符号(除空格)，且字母、数字和标点符号至少包含两种</p>
    <button v-bind:display="dis" v-if="!btnShow" class="huise">保存新密码</button>
    <button v-if="btnShow" class="lanse" @click="next">保存新密码</button>
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
        btnShow: false,
        one: '',
        two: '',
        seen:'',
        unseenImg:"../../assets/images/yanjing.png",//看不见
        seenImg :"../../assets/images/yanjing.png",//看得见密码
        pwdType:false, //此时文本框隐藏，显示密码框
        dis:''
      }
    },
    methods:{
      next(){
        this.$router.push('/safe')
      },
      bianse(){
        if(this.one.length>0&&this.two.length>0){
          this.btnShow=true;
        }
        else{
          this.btnShow=false;
        }
      },
      changeType(){
        this.seen = !this.seen;//小眼睛的变化
        this.pwdType=!this.pwdType;//跟着小眼睛变化，密码框隐藏显示文本框，内容就显示了
      }
    }
  };
</script>

<style scoped>
  #amend{
    height: 100vh;
  }
  input{
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    text-indent: 20px;
    margin: 5px 0;
    font-size: 14px;
  }
  .yanjing{
    position: relative;
  }
  .yanjing img{
    position: absolute;
    top: 20px;
    right: 30px;
  }
  p{
    font-size: 12px;
    color: #666565;
    padding: 0 20px;
  }
  .huise,
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
