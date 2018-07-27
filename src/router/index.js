import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//组件
import Home from "../components/pages/home/Home.vue";
import Film from "../components/pages/films/Films.vue";
import Cinema from "../components/pages/cinema/Cinema.vue";
import Mall from "../components/pages/mall/Mall.vue";
import SellCard from "../components/pages/mine/SellCard.vue";
import Mine from "../components/pages/mine/Mine.vue";
import Address from "../components/pages/address/Address.vue";
import NowPlaying from "../components/pages/films/NowPlaying.vue";
import ComingSoon from "../components/pages/films/ComingSoon.vue";
import MovieDetails from "../components/pages/films/MovieDetails.vue";

const router = new VueRouter ({
    routes:[
        {path:"",redirect: "/home"},
        {path:"/home",component:Home},
        {
            path:"/film",
            component:Film,
            children:[
                {path:"",component:NowPlaying},
                {path:"nowplaying",component:NowPlaying},
                {path:"comingsoon",component:ComingSoon}

            ]
        },
        {path:"/cinema",component:Cinema},
        {path:"/mall",component:Mall},
        {path:"/sellCard",component:SellCard},
        {path:"/mine",component:Mine},
        {path:"/address",component:Address},
        {path:"/moviedetails/:id/:type",component:MovieDetails,props:true}
    ]
});

export default router;