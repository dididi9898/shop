<template>
    <div>
        <Header msg_title="编辑个人资料" msg_right="" type="0"></Header>
        <h6>基本信息</h6>
        <div class="box">
            <van-uploader style="width: 100%">
            <ul style="height: 75px;line-height: 75px">
                <li>头像</li>
                <li><img class="touxing" src="./images/touxiang.png" /></li>
                <li><van-icon style="line-height: 75px" name="arrow" size="16px" /></li>
            </ul>
            </van-uploader>
            <ul @click="gotoedit('昵称')">
                <li>昵称</li>
                <li>扯文艺的猿</li>
                <li><van-icon style="line-height: 50px" name="arrow" size="16px" /></li>
            </ul>
            <ul @click="showPopup">
                <li>性别</li>
                <li>男</li>
                <li><van-icon style="line-height: 50px" name="arrow" size="16px" /></li>
            </ul>
            <van-popup v-model="show" position="bottom" :style="{width:'92%'}">
                <van-button type="primary" size="large">男</van-button>
                <div style="height: 1px;background: rgba(0,0,0,0.4)"></div>
                <van-button type="primary" size="large">女</van-button>
                <div style="height: 10px;background: rgba(0,0,0,0.4)"></div>
                <van-button @click="show=false" type="primary" size="large">取消</van-button>
            </van-popup>
            <ul @click="gotosafe">
                <li>密码</li>
                <li></li>
                <li><van-icon style="line-height: 50px" name="arrow" size="16px" /></li>
            </ul>
            <ul>
                <li>个人主页</li>
                <li></li>
                <li><van-icon style="line-height: 50px" name="arrow" size="16px" /></li>
            </ul>
            <ul @click="gotoedit('个性签名')">
                <li>个性签名</li>
                <li></li>
                <li><van-icon style="line-height: 50px" name="arrow" size="16px" /></li>
            </ul>
        </div>
        <h6>账号绑定与关联</h6>
        <div class="box">
            <ul>
                <li><img class="icon" width="16px" src="./images/shouji.png" />手机号</li>
                <li>150****4058</li>
                <li><van-icon style="line-height: 50px" name="arrow" size="16px" /></li>
            </ul>
            <ul>
                <li><img class="icon" src="./images/qq.png" />QQ</li>
                <li>未绑定</li>
                <li><van-icon style="line-height: 50px" name="arrow" size="16px" /></li>
            </ul>
            <ul>
                <li><img class="icon" src="./images/weixin.png" />微信</li>
                <li>未绑定</li>
                <li><van-icon style="line-height: 50px" name="arrow" size="16px" /></li>
            </ul>
            <ul>
                <li><img class="icon" src="./images/weibo.png" />微博</li>
                <li>未绑定</li>
                <li><van-icon style="line-height: 50px" name="arrow" size="16px" /></li>
            </ul>
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
                show: false
            };
        },
        methods: {
            showPopup() {
                this.show = true;
            },
            gotoedit(title){
                this.$router.push({
                    path: '/edit',
                    query:{
                        title: title,
                    }
                });
            },
            gotosafe(){
                this.$router.push('/safe')
            }
        },
    };
</script>

<style lang="less" scoped>
    h6{
        width: 100%;
        height: 45px;
        line-height: 52px;
        font-weight: normal;
        font-size: 12px;
        color: #999;
        padding-left: 18px;
    }
    .box{
        width: 100%;
        height: auto;
        background: #fff;
        padding: 0 18px;
    }
    .box ul{
        width: 100%;
        height: 50px;
        line-height: 50px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f8f8f8;
        color: #999;
    }
    .box ul:last-child{
        border: none;
    }
    .box ul li:first-child{
        width: 30%;
        font-size: 14px;
        color: #515a6e;
    }
    .box ul li:nth-child(2){
        width: 60%;
        text-align: right;
    }
    .touxing{
        float: right;
        margin-top: 10px;
        width: 58px;
        height: 58px;
        border-radius: 50%;
        /*border: 1px solid #bbb;*/
    }
    .icon{
        width: 26px;
        height: 26px;
        padding: 3px;
        border: 1px solid #bbb;
        border-radius: 50%;
        float: left;
        margin-top: 12px;
        margin-right: 10px;
    }
    .van-popup--bottom{
        border-radius: 5px;
    }
    .van-button--primary {
        color: #515a6e;
        background-color: #fff;
        border: unset;
    }
</style>