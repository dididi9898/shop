<template>
  <div id="safe">
    <Header msg_title="安全中心" msg_right="" type="0"></Header>
    <div @click="gotoamend" class="box">
      <div class="box_min">
        <h2>修改登录密码</h2>
        <p>建议您定期更改密码以保护账户安全</p>
      </div>
      <van-icon style="line-height: 60px" name="arrow" size="16px" />
    </div>
    <div @click="gotopx" class="box">
      <div class="box_min">
        <h2>修改支付密码</h2>
        <p>建议您定期更改支付密码以保护财产安全</p>
      </div>
      <van-icon style="line-height: 60px" name="arrow" size="16px" />
    </div>
    <div @click="gotoretrieve" class="box del">
      <div class="box_min">
        <h2>修改手机号码</h2>
        <p>若手机更换请尽快修改</p>
      </div>
      <span>127682736834</span>
      <van-icon style="line-height: 60px" name="arrow" size="16px" />
    </div>
    <div class="box box_last">
      <div class="box_min">
        <h2>账户申诉</h2>
      </div>
      <span>无法验证身份？试试自主申诉</span>
      <van-icon style="line-height: 60px" name="arrow" size="16px" />
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
      return {}
    },
    methods:{
      gotoamend(){
        this.$router.push('/amend')
      },
      gotoretrieve(){
        this.$router.push('/retrieve')
      },
      gotopx(){
        this.$dialog.confirm({
          // title: '你是否记得原支付密码?',
          message: '你是否记得原支付密码?',
          confirmButtonText :'是',
          cancelButtonText :'否',
        }).then(() => {
          this.$router.push('/remenber');
        }).catch(() => {
          this.$router.push('/noremenber');
        });
      }
    }
  };
</script>
<style scoped>
  h2{
    font-size: 14px;
    margin-top: 10px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  p{
    font-size: 14px;
    color: #c3c1c1;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .box{
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    height: 60px;
    background: #fff;
    border-bottom: 1px solid #d6d6d6;
    display: flex;
    justify-content: space-between;
  }
  .box span{
    text-align: right;
    font-size: 14px;
    line-height: 60px;
    color: #c3c1c1;
    margin-left: 70px;
  }
  .box_last{
    margin-top: 26px;
    border: none;
  }
  .box_last h2{
    margin: 0;
    line-height: 60px;
  }
  .del{
    border: none;
  }
</style>
