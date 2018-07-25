import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//组件
import Home from "../components/pages/home/Home.vue";
import Filem from "../components/pages/films/Filems.vue";
import Cinema from "../components/pages/cinema/Cinema.vue";
import Mall from "../components/pages/mall/Mall.vue";
import SellCard from "../components/pages/mine/SellCard.vue";
import Mine from "../components/pages/mine/Mine.vue";
import Address from "../components/pages/address/Address.vue"

const router = new VueRouter ({
    routes:[
        {path:"",redirect: "/home"},
        {path:"/home",component:Home},
        {path:"/filem",component:Filem},
        {path:"/cinema",component:Cinema},
        {path:"/mall",component:Mall},
        {path:"/sellCard",component:SellCard},
        {path:"/mine",component:Mine},
        {path:"/address",component:Address}
    ]
});

export default router;