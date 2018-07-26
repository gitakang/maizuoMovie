<template>
    <div>
        <div class="titles">
            <router-link class="movie-head" v-for="list in navs" :key='list.id' :to="list.path">{{list.title}}</router-link class="movie-head">
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
     export default{
        name:"Films",
        data(){
            return{
                navs:[
                {id:21,title:"正在热映",path:"nowplaying",type:"/film/nowplaying"},
                {id:22,title:"即将上映",path:"comingsoon",type:"/film/coming-soon"}
            ]
            }
        },
    }
</script>

<style scoped lang="scss">
    div{
        .titles{
            width: 90%;
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            border-bottom: 1px solid red;
            height: .45rem;
           .movie-head{
                text-decoration: none;
                color:red;
                width: 50%;
                text-align: center;
                line-height: .45rem;
            }
            .router-link-active{
                border-bottom: .03rem solid red;
            }
        }
    }
</style>