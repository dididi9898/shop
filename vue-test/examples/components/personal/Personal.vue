<template>
    <div style="height: 100vh;" id="personal">
        <div class="bg_top">
            <div class="container">
                <div class="message">
                    <i @click="gotoziliao"><van-icon size="22px" name="setting-o" /></i>
                </div>
                <ul class="touxiang">
                    <li><img src="./images/touxiang.png"></li>
                    <li>
                        <h3>测试员007</h3><span>购物卡</span>
                        <p>用户积分5866</p>
                    </li>
                    <li><img src="./images/sale.png"></li>
                </ul>
                <div class="shoucang">
                    <ul>
                        <li>0</li>
                        <li>商品收藏</li>
                    </ul>
                    <ul @click="gotocollect">
                        <li>0</li>
                        <li>店铺收藏</li>
                    </ul>
                    <ul @click="gotofootmark">
                        <li>0</li>
                        <li>浏览足迹</li>
                    </ul>
                    <ul>
                        <li>0</li>
                        <li>商品收藏</li>
                    </ul>
                </div>
                <button class="shenqing">立即申请</button>
                <div class="dingdan">
                    <ul @click="goaftersalesrecord">
                        <li><img src="./images/refresh.png"></li>
                        <li>退换/售后</li>
                    </ul>
                    <ul @click="goforthepayment">
                        <li><img src="./images/goods_light.png"></li>
                        <li>我的订单</li>
                    </ul>
                    <ul>
                        <li><img src="./images/form_favor_light1.png"></li>
                        <li>促销订单</li>
                    </ul>
                    <ul>
                        <li><img src="./images/friend_light.png"></li>
                        <li>团购订单</li>
                    </ul>
                    <ul>
                        <li><img src="./images/form_light.png"></li>
                        <li>积分订单</li>
                    </ul>
                </div>
                <div class="gongju">
                    <h2>我的工具</h2>
                    <div class="box">
                        <ul @click="gomyaddress">
                            <li><img src="./images/address.png"></li>
                            <li>收货地址</li>
                        </ul>
                        <ul>
                            <li><img src="./images/shareapp.png"></li>
                            <li>分享APP</li>
                        </ul>
                        <ul>
                            <li><img src="./images/merchantssettled.png"></li>
                            <li>商家入驻</li>
                        </ul>
                        <ul @click="gostopxanagement">
                            <li><img src="./images/sellercenter.png"></li>
                            <li>卖家中心</li>
                        </ul>
                    </div>
                    <div class="box">
                        <ul>
                            <li><img src="./images/feedback.png"></li>
                            <li>意见反馈</li>
                        </ul>
                        <ul>
                            <li><img src="./images/helpcenter.png"></li>
                            <li>帮助中心</li>
                        </ul>
                    </div>
                </div>
            </div>
<!--            <Footer></Footer>-->
        </div>
    </div>
</template>

<script>
    // import Footer from '../components/Footer'
    export default {
        data() {
            return {}
        },
        methods:{
            gotoziliao(){
                this.$router.push('/personaldata')
            },
            gomyaddress(){
                this.$router.push('/myaddress')
            },
            goaftersalesrecord(){
                this.$router.push('/underreview')
            },
            gostopxanagement(){
                this.$router.push('/stopxanagement')
            },
            gotocollect(){
                this.$router.push('/collect')
            },
            gotofootmark(){
                this.$router.push('/footmark')
            },
            goforthepayment(){
                this.$router.push('/forthepayment')
            },
        },
        // components:{
        //     Footer
        // }
    };
</script>

<style scoped>
    .bg_top{
        width: 100%;
        height: 100%;
        background: url("./images/personal.jpg") #f6f6f6 no-repeat;
        background-size: 100% 230px;
    }
    .container{
        width: 92%;
        height: 100%;
        margin: 0 auto;
    }
    .message{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-end;
        padding-top: 20px;
    }
    .message img{
        width: 24px;
        height: 24px;
    }
    .touxiang{
        display: flex;
        justify-content: flex-start;
    }
    .touxiang li:nth-child(1) img,
    .touxiang li:nth-child(3) img{
        width: 65px;
        height: 65px;
    }
    .touxiang li:nth-child(3) img{
        margin-left: 25px;
    }
    h3{
        display: inline-block;
        font-size: 18px;
        color: #fff;
        margin: 3px 0 0 10px;
    }
    span{
        font-size: 13px;
        background: #edd272;
        border-radius: 5px;
        padding: 1px 5px;
        margin-left: 10px;
        color: #fff;
    }
    .touxiang p{
        width: 100px;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        text-align: center;
        border: 1px solid #fff;
        color: #fff;
        border-radius: 10px;
        margin: 8px;
    }
    .shoucang{
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        padding: 0 5px;
    }
    .shoucang ul{
        width: 20%;
        color: #fff;
    }
    .shoucang li,
    .dingdan li,
    .box li{
        text-align: center;
    }
    .shoucang li:first-child{
        font-size: 20px;
    }
    .shenqing{
        font-size: 12px;
        width: 80px;
        height: 24px;
        color: #fff;
        border: 1.5px solid #fff;
        background: none;
        border-radius: 5px;
        margin: 20px 0 0 200px;
    }
    .dingdan{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 90px;
        background: #fff;
        border-radius: 18px;
        margin-top: 30px;
    }
    .dingdan ul{
        width: 25%;
        color: #474a54;
        margin-top: 15px;
    }
    .dingdan img{
        width: 35px;
    }
    .gongju{
        width: 100%;
        height: 260px;
        background: #fff;
        border-radius: 18px;
        margin-top: 20px;
        margin-bottom: 60px;
    }
    h2{
        font-size: 16px;
        font-weight: bold;
        width: 100%;
        border-bottom: 1px solid #f8f8f8;
        box-sizing: border-box;
        padding: 8px;
    }
    .box{
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: flex-start;
    }
    .box ul{
        width: 25%;
        height: 50px;
        margin-top: 10px;
    }
    .box img{
        width: 40px;
    }
</style>
