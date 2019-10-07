<template>
  <div id="footmark">
    <div class="header">
<!--      <img @click="gotoreturn" src="../../../static/images/back_light.png">-->
      <h1>我的足迹</h1>
<!--      <img src="../../../static/images/more_light.png">-->
    </div>
    <div class="container">
      <div class="box">
        <h2>05月31日</h2>
        <div class="box_min">
          <div class="box_img"></div>
          <div class="box_price">
            <span>￥1.00</span>
            <span>···</span>
          </div>
        </div>
        <div class="box_min">
          <div class="box_img"></div>
          <div class="box_price">
            <span>￥1.00</span>
            <span>···</span>
          </div>
        </div>
        <div class="box_min">
          <div class="box_img"></div>
          <div class="box_price">
            <span>￥1.00</span>
            <span>···</span>
          </div>
        </div>
        <div class="box_min">
          <div class="box_img"></div>
          <div class="box_price">
            <span>￥1.00</span>
            <span>···</span>
          </div>
        </div>
        <div class="box_min">
          <div class="box_img"></div>
          <div class="box_price">
            <span>￥1.00</span>
            <span>···</span>
          </div>
        </div>
        <div class="box_min">
          <div class="box_img"></div>
          <div class="box_price">
            <span>￥1.00</span>
            <span>···</span>
          </div>
        </div>
      </div>
      <div class="box">
        <h2>05月31日</h2>
        <div class="box_min">
          <div class="box_img"></div>
          <div class="box_price">
            <span>￥1.00</span>
            <span>···</span>
          </div>
        </div>
        <div class="box_min">
          <div class="box_img"></div>
          <div class="box_price">
            <span>￥1.00</span>
            <span>···</span>
          </div>
        </div>
        <div class="box_min">
          <div class="box_img"></div>
          <div class="box_price">
            <span>￥1.00</span>
            <span>···</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods:{
      gotoreturn(){
        this.$router.push('/personal')
      }
    }
  };
</script>

<style scoped>
  #footmark{
    width: 100%;
    height: 6.2rem;
    background: #f6f6f6;
    padding-top: 0.6rem;
  }
  .header{
    position: fixed;
    top: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.2rem;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    background: #fff;
  }
  .header img{
    width: 0.22rem;
    height: 0.22rem;
    margin-top: 0.14rem;
  }
  .header h1{
    font-size: 0.18rem;
    line-height: 0.5rem;
  }
  .container{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 0.1rem;
  }
  .box{
    width: 100%;
    height: auto;
  }
  .box h2{
    font-size: 0.14rem;
    color: #888;
    padding: 0.1rem 0;
  }
  .box_min{
    display: inline-block;
    width: 30.5%;
    height: 1.4rem;
    margin: 0.03rem;
    box-shadow: 0.01rem 0.01rem 0.05rem #bbb;
  }
  .box_img{
    width: 100%;
    height: 80%;
    background: skyblue;
  }
  .box_price{
    width: 100%;
    height: 20%;
    box-sizing: border-box;
    padding: 0 0.05rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
  }
  .box_price span{
    color: #ff4d4f;
    font-size: 0.12rem;
    line-height: 0.3rem;
  }
  .box_price span:last-child{
    font-size: 0.2rem;
  }
</style>
