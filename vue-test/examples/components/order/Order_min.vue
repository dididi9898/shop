<template>
    <div>
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
        <div v-for="(item,index) in order_list" :key=index>
            <template v-if="type==0 || item.type==type">
                <div class="box" >
                    <div class="box_head">
                        <p class="box_title">名樱数码旗舰店</p>
                        <p class="box_type">卖家已发货</p>
                    </div>
                    <div style="clear: both"></div>
                    <van-card style="background: #fff"
                              num="2"
                              price="2.00"
                              desc="描述信息"
                              :title= item.title
                              thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                    >
                        <div slot="tags">
                            <van-tag plain type="danger">标签</van-tag>
                            <van-tag plain type="danger">标签</van-tag>
                        </div>
                        <div v-if="item.type==1" slot="footer">
                            <van-button @click="edit('address',5)" size="mini">修改地址</van-button>
                            <van-button @click="edit('delOrder',5)" size="mini">取消订单</van-button>
                            <van-button @click="edit('pay',5)" size="mini">付款</van-button>
                        </div>
                        <div v-if="item.type==2" slot="footer">
                            <van-button @click="edit('address',5)" size="mini">提醒发货</van-button>
                        </div>
                        <div v-if="item.type==3" slot="footer">
                            <van-button @click="edit('address',5)" size="mini">查看物流</van-button>
                            <van-button @click="edit('address',5)" style="border-color: #FF5000;color: #FF5000" size="mini">确认收货</van-button>
                        </div>
                        <div v-if="item.type==4" slot="footer">
                            <van-button @click="edit('address',5)" size="mini">查看物流</van-button>
                            <van-button @click="edit('address',5)" size="mini">评价</van-button>
                        </div>
                    </van-card>
                </div>
            </template>
        </div>
        </van-list>
    </div>
</template>

<script>
    export default {
        props: ["type"],
        data() {
            return {
                list:[
                    {type:1,title:"待付款标题1"},
                    {type:2,title:"待发货标题1"},
                    {type:3,title:"待收货标题1"},
                    {type:4,title:"待评价标题1"},
                    {type:1,title:"待付款标题2"},
                    {type:2,title:"待发货标题2"},
                    {type:3,title:"待收货标题2"},
                    {type:4,title:"待评价标题2"},
                ],
                order_list:[],
                loading: false,
                finished: false
            };
        },
        methods:{
            edit(str,id){
                this.$emit(str,id);
            },
            onLoad() {
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 4; i++) {
                        this.order_list.push(this.list[i]);
                    }
                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.order_list.length >= this.list.length) {
                        this.finished = true;
                    }
                }, 500);
            }
        }
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