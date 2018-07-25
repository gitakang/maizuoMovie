<template>
    <div class="nav-list" @click.stop="$emit('close')">
        <div class="nav-box" @click.stop></div>
        <ul>
            <!-- <li v-for="curr in navs" :key='curr.id'>
                <a href="#">{{curr.title}}</a>
                <i class="fa fa-angle-right fa-lg"></i>
            </li> -->
            <router-link 
            tag="li" 
            v-for="curr in navs" 
            :key="curr.id"
            :to="curr.path"
            @click.stop="$emit('close')"
            >{{curr.title}}
                <i class="fa fa-angle-right fa-lg"></i></router-link>
        </ul>
    </div>
</template>

<script>
import animate from "animate";
export default{
    name:"NavList",
    data(){
        return{
            navs:[
                {id:1,title:"首页",path:"/home"},
                {id:2,title:"影片",path:"/filem"},
                {id:3,title:"影院",path:"/cinema"},
                {id:4,title:"商城",path:"/mall"},
                {id:5,title:"我的",path:"/mine"},
                {id:6,title:"卖座卡",path:"/sellCard"}
            ]
        }
    }

}
</script>


<style scoped lang="scss">
    .nav-list{
        width: 100%;
        height: 11.57rem;
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: .5rem;
        left: 0;
        font-size: .12rem;
        z-index: 101;
        .nav-box{
            width: 70%;
            background: #282828;
            height: 11.57rem;
            z-index: 101;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }
        ul{
            border-top: .01rem solid #333;
            z-index: 102;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 70%;
                li{
                padding: 0 .15rem;
                border-bottom: .01rem solid #333;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #9a9a9a;
                height: .5rem;
                a{
                    color: #9a9a9a;
                    text-decoration: none;
                }
            }
        }
    }
</style>