<template>
    <header>
       <div class="header" @click="isShow=false">
        <ul @click.stop="isShow = !isShow">
            <li>
                <i class="fa fa-bars fa-lg"></i>  
            </li>
            <li class="header-nav">卖座电影</li>
        </ul>
        <ul @click="isShow=false">
            <!-- <li class="header-address" >成都
                <i class="fa fa-angle-down fa-la"></i>
            </li> -->
            <router-link tag="li" class="header-address" to="/address">成都
                <i class="fa fa-angle-down fa-la"></i></router-link>
            <!-- <li>
                <i class="fa fa-user-o fa-la"></i>
            </li> -->
            <router-link tag="li" to="/mine"> <i class="fa fa-user-o fa-la"></i></router-link>
        </ul>
       </div>
        <nav-list v-show="isShow" @close="isShow=false"></nav-list>
    </header>
    
</template>

<script>
import NavList from "./NavList.vue";

export default{
    name:"Header",
    data(){
        return{
            isShow:false
        }
    },
    components:{
        NavList
    }
}
</script>

<style scoped lang="scss">
    header{
        padding-bottom: .5rem;
        .header{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        justify-content: space-between;
        align-items: center;
        font-size: 0.12rem;
        background: #282828;
        color:#9a9a9a;
        height: .5rem;
        overflow: hidden;
        z-index: 1000;
        display: flex;
        ul{
            display: flex;
            justify-content: flex-start;
            li{
                padding:.15rem;
            }
            .header-nav{
                color: #efefef;
                border-left: 1px solid #313030;
                padding-left: .15rem;
            }
            .header-address{
                padding-right: .03rem;
            }
        }
        }
    }
    
</style>