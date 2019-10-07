<template>
  <div id="collect" style="background: #fff">
      <Header msg_title="" msg_right="管理" type="1"></Header>
    <Menu style="position: fixed;top: 0;width: 23.5%;height: 46px;line-height:46px;left: 39%" mode="horizontal" :theme="theme1" active-name="1">
      <MenuItem style="padding: 0 10px" name="1">
        宝贝
      </MenuItem>
      <MenuItem style="padding: 0 10px" name="2">
        店铺
      </MenuItem>
    </Menu>
    <div v-if="">
      <Dropdown style="margin: 10px 10px 0 10px">
        <a href="javascript:void(0)">
          全部类目
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>数码</DropdownItem>
          <DropdownItem>男装</DropdownItem>
          <DropdownItem>女装</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown style="margin: 10px 10px 0 10px">
        <a href="javascript:void(0)">
          全部状态
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>待付款</DropdownItem>
          <DropdownItem>待收货</DropdownItem>
          <DropdownItem>待退货</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <div class="box">
        <div class="box_left"></div>
        <div class="box_right">
          <p>新讯 随身wifi无线路由器全国4G流量上网宝不限速流量 大容量充电宝一体机 白色 LLP501++月享900G流量 1个月</p>
          <span>16654789人收藏</span>
          <i>￥308.00</i>
        </div>
      </div>
      <div class="box">
      <div class="box_left"></div>
      <div class="box_right">
        <p>新讯 随身wifi无线路由器全国4G流量上网宝不限速流量 大容量充电宝一体机 白色 LLP501++月享900G流量 1个月</p>
        <span>16654789人收藏</span>
        <i>￥308.00</i>
      </div>
    </div>
    </div>
<!--      <div class="layui-tab-content">-->
<!--        <div class="layui-tab-item layui-show">-->
<!--          <div class="select">-->
<!--            <select lay-ignore name="city" lay-verify="">-->
<!--              <option value="0" selected>全部类目</option>-->
<!--              <option value="1">数码</option>-->
<!--              <option value="2">男装</option>-->
<!--              <option value="3">女装</option>-->
<!--            </select>-->
<!--            <select lay-ignore name="city" lay-verify="">-->
<!--              <option value="0" selected>全部状态</option>-->
<!--              <option value="1">待付款</option>-->
<!--              <option value="2">待收货</option>-->
<!--              <option value="3">待退货</option>-->
<!--            </select>-->
<!--          </div>-->

<!--        </div>-->
<!--        <div class="layui-tab-item">-->
<!--        <div class="select">-->
<!--          <select lay-ignore name="city" lay-verify="">-->
<!--            <option value="0" selected>全部类目</option>-->
<!--            <option value="1">数码</option>-->
<!--            <option value="2">男装</option>-->
<!--            <option value="3">女装</option>-->
<!--          </select>-->
<!--          <div class="big_hezi">-->
<!--            <div class="hezi">-->
<!--              <div class="touxiang"></div>-->
<!--              <p>xxx店铺</p>-->
<!--            </div>-->
<!--            <div class="hezi">-->
<!--              <div class="touxiang"></div>-->
<!--              <p>xxx店铺</p>-->
<!--            </div>-->
<!--            <div class="hezi">-->
<!--              <div class="touxiang"></div>-->
<!--              <p>xxx店铺</p>-->
<!--            </div>-->
<!--            <div class="hezi">-->
<!--              <div class="touxiang"></div>-->
<!--              <p>xxx店铺</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      </div>-->
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
        theme1: 'light'
      }
    },
    methods:{
      gotoreturn(){
        this.$router.push('/personal')
      }
    }
  };
</script>

<style scoped>
  .box{
    width: 100%;
    height: 120px;
    background: #fff;
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
  }
  .box_left{
    width: 100px;
    height: 100px;
    border-radius: 6px;
    background: skyblue;
    margin: 10px;
  }
  .box_right{
    width: 66%;
  }
  .box_right p{
    margin-top: 12px;
    font-size: 12px;
    color: #555;
  }
  .box_right span{
    display: block;
    margin-top: 2px;
    font-size: 12px;
    color: #bbb;
  }
  .box_right i{
    display: block;
    font-style:normal;
    font-size: 13px;
    color: #ff4d4f;
    margin-top: 8px;
  }
  .big_hezi{
    width: 100%;
    height: auto;
    background: #fff;
    margin-top: 10px;
    padding: 0 10px;
  }
  .hezi{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #f8f8f8;
  }
  .hezi .touxiang{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: skyblue;
    margin-top: 5px;
  }
  .hezi p{
    font-size: 15px;
    margin-left: 10px;
    line-height: 60px;
  }
</style>
