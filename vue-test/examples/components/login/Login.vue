<template>
    <div style="background: #fff">
        <div class="header">
            <img src="../personal/images/touxiang.png" />
        </div>
        <ul v-if="change==true" style="width: 75%;margin: 0 auto">
            <div style="height: 100px;"></div>
            <li class="form_li">
                <input type="number" placeholder="请输入您的手机号" />
            </li>
            <li v-if="input_type==false" class="form_li">
                <input type="password" placeholder="请输入密码" /><span @click="eye_closed"><van-icon size="16px" style="float: right" name="closed-eye" /></span>
            </li>
            <li v-if="input_type==true" class="form_li">
                <input type="text" placeholder="请输入密码" /><span @click="eye_closed"><van-icon size="16px" style="float: right" name="eye-o" /></span>
            </li>
            <li style="height: 50px;"></li>
            <van-button class="res_btn" size="large" round type="info">登录</van-button>
            <li class="pass_text">忘记密码?</li>
            <li class="pass_text"><span style="color: #666">没有账号? </span><span @click="change_html">立即注册</span></li>
        </ul>
        <ul v-if="change==false" style="width: 75%;margin: 0 auto">
            <div style="height: 15px;"></div>
            <li class="form_li">
                <input type="email" placeholder="请输入您的邮箱" />
            </li>
            <li class="form_li">
                <input type="text" placeholder="请输入用户昵称" />
            </li>
            <li class="form_li">
                <input type="number" placeholder="请输入您的手机号" />
            </li>
            <li class="form_li">
                <input type="number" placeholder="请输入验证码" />
                <button v-bind:disabled="dis" :class="{huise:!isshow}" @click="doThis" v-text="yzm_cont" class="huoqu_yzm"></button>
            </li>
            <li v-if="input_type==false" class="form_li">
                <input type="password" placeholder="请设置密码" />
            </li>
            <li v-if="input_type==false" class="form_li">
                <input type="password" placeholder="再次输入密码" />
            </li>
            <div class="xieyi">
                <input id="check" type="checkbox" name="check" value="#f0544d" />
                <label  for="check"></label >
                <span>我已阅读并同意<a @click="gotoxieyi">《腾远商城协议》</a></span>
            </div>
            <li style="height: 15px;"></li>
            <van-button class="res_btn" size="large" round type="info">注册</van-button>
            <li class="pass_text"><span style="color: #666">已有账号 </span><span @click="change_html">立即登录</span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                input_type:false,
                change:true,
                isshow:true,
                dis: false,
                yzm_cont: '获取短信校验码',
            }
        },
        methods:{
            gotoxieyi(){
                this.$router.push('/xieyi')
            },
            eye_closed(){
                console.log(123)
                this.input_type=!this.input_type;
            },
            change_html(){
                this.change=!this.change;
            },
            doThis(){
                this.time=30;
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
    }
</script>

<style scoped>
    .header{
        width: 100%;
    }
    .header img{
        width: 130px;
        height: 130px;
        display: block;
        margin: 100px auto 0;
        border-radius: 50%;
    }
    .form_li{
        width: 100%;
        padding: 15px;
        border-bottom: 1px solid #ebebeb;
    }
    .form_li input{
        border: none;
    }
    .res_btn{
        background: #10a78e;
        border-color: #10a78e;
        font-size: 22px;
        letter-spacing:18px;
        padding-left: 18px;
    }
    .pass_text{
        text-align: center;
        color: #10a78e;
        margin-top: 30px;
    }
    .huoqu_yzm{
        border: none;
        outline: none;
        text-indent: 0.05px;
        background: #10a78e;
        padding: 3px 5px;
        color: #fff;
        float: right;
        margin-top: -2px;
    }
    .huise{
        opacity: 0.6;
    }
    .xieyi{
        display: flex;
        justify-content: flex-start;
        position: relative;
        padding: 5px;
    }
    .xieyi span{
        font-size: 12px;
        color: #bebebe;
    }
    .xieyi a{
        color: #10a78e;
    }
    #check +label{
        display: block;
        width: 13px;
        height: 13px;
        position: absolute;
        top: 7px;
        left: 0;
        border: 1px solid #bebebe;
    }
    #check:checked +label{
        background: #10a78e;
        border: 1px solid #10a78e;
    }
    #check:checked +label::before{
        display: block;
        content: "\2714";
        text-align: center;
        font-size: 12px;
        color: #fff;
        margin-top: -3px;
    }
    input[type=checkbox]{
        width: 13px;
        height: 13px;
        visibility: hidden;
    }
</style>
