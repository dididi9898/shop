<template>
  <div id="pxenber">
    <Header msg_title="修改支付密码" msg_right="" type="0"></Header>
    <h2>设置6位数字支付密码</h2>
    <p>为了提供更好的支付体验,xx商城讲全面使用6位数支付密码进行支付验证</p>
    <div style="padding: 10px 0;">
      <!-- 密码输入框 -->
      <van-password-input
              :value="value"
              :focused="showKeyboard"
              @focus="showKeyboard = true"
      />

      <!-- 数字键盘 -->
      <van-number-keyboard
              :show="showKeyboard"
              @input="onInput"
              @delete="onDelete"
              @blur="showKeyboard = false"
      />
    </div>
    <ul>
      <li>避免使用连续或重复的数字，类似“123456”，“112233”</li>
      <li>避免使用手机号、证件号中的连续数字</li>
    </ul>
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
        value: '',
        showKeyboard: true
      }
    },
    methods:{
      onInput(key) {
        this.value = (this.value + key).slice(0, 6);
      },
      onDelete() {
        this.value = this.value.slice(0, this.value.length - 1);
      }
    },
  };
</script>

<style scoped>
  #pxenber{
    height: 100vh;
  }
  h2{
    font-size: 18px;
    line-height: 40px;
    text-align: center;
  }
  p{
    font-size: 14px;
    color: #9b9a9a;
    text-align: center;
    padding: 0 12px;
  }
  ul{
    margin-left: 30px;
    font-size: 12px;
    color: #555555;
  }
  li{
    list-style: disc;
  }
  input{
    display: block;
    width: 320px;
    height: 50px;
    box-sizing: border-box;
    margin: 0 auto;
    border: none;
    outline: none;
    border: 1px solid #4797dd;
    letter-spacing:40px;
    font-size: 30px;
    text-indent: 20px;
    margin-top: 15px;
    margin-bottom: 10px;
  }
  .van-password-input{
    margin: 0;
  }
  .van-password-input ul{
    margin: 0;
  }
  .van-password-input ul li{
    list-style: none;
  }
</style>
