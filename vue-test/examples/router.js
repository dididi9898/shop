
import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import HelloWorld from './components/HelloWorld'
import Cart from './components/Cart'
import Person from './components/Person'

//会员模块
import Login from './components/login/Login'
import Personal from './components/personal/Personal'
import Personaldata from './components/personal/Personaldata'

//订单模块
import Order from './components/order/Order'
import Address_list from './components/order/Address_list'
import Address_edit from './components/order/Address_edit'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'helloworld', component: HelloWorld },
        { path: '/cart', name: 'cart', component: Cart },
        { path: '/person', name: 'person', component: Person },
        //订单模块
        { path: '/order', name: 'order', component: Order },
        { path: '/address_list', name: 'address_list', component: Address_list },
        { path: '/address_edit', name: 'address_edit', component: Address_edit },
        //会员模块
        { path: '/login', name: 'login', component:  Login},
        { path: '/personal', name: 'personal', component:  Personal},
        { path: '/personaldata', name: 'personaldata', component:  Personaldata},
    ]
})
