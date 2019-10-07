<template>
    <div>
        <Header msg_title="订单中心" msg_right="" type="1" @func="getMsgFormSon"></Header>
        <van-tabs v-model="active" animated swipeable>
            <van-tab title="全部">
                <Order_min @emit_address="handleGetTotal" type="0"></Order_min>
            </van-tab>
            <van-tab title="待付款">
                <Order_min @address="handleGetTotal" @delOrder="handleGetTotal" @pay="handleGetTotal"  type="1"></Order_min>
            </van-tab>
            <van-tab title="待发货">
                <Order_min @emit_address="handleGetTotal" type="2"></Order_min>
            </van-tab>
            <van-tab title="待收货">
                <Order_min @emit_address="handleGetTotal" type="3"></Order_min>
            </van-tab>
            <van-tab title="待评价">
                <Order_min @emit_address="handleGetTotal" type="4"></Order_min>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import Header from '../public/Header'
    import Order_min from './Order_min'
    export default {
        components: {
            Header,
            Order_min,
        },
        data() {
            return {
                msgFormSon:'',
                active: 0,
            };
        },
        methods: {
            getMsgFormSon(data){//获取子组件搜索框输入的值
                this.msgFormSon = data;
                console.log(this.msgFormSon)
            },
            handleGetTotal(value){
                console.log(value);
                this.$router.push('/address_list')
            },
        },
    };
</script>

<style lang="less" scoped>
.van-tabs--line .van-tabs__wrap{
    width: 100%;
    position: fixed;
    top: 46px;
    z-index: 999;
}
.van-button--mini {
    padding: 0 5px;
    border-radius: 11px;
}
/*.van-tabs__track{*/
/*    height: calc(100vh - 10px);*/
/*}*/
    .box{
        width: 95%;
        height: auto;
        border-radius: 5px;
        background: #fff;
        border: 1px solid #eee;
        box-sizing: border-box;
        padding: 5px 0;
        margin: 10px;
    }
.box_title{
    float: left;
    font-size: 14px;
}
.box_type{
    float: right;
    font-size: 12px;
    color: #FF5000;
}
    .box_head{
        width: 92%;
        margin: 0 auto;
    }
</style>