<template>
    <div>
        <div class="titles">
            <div v-for="list in navs" :key='list.id' :to="list.path">{{list.title}}</div>
        </div>
    </div>
</template>
<script>
     export default{
        name:"Filems",
        data(){
            return{
                navs:[
                {id:21,title:"正在热映",path:"/hotfilem"},
                {id:22,title:"即将上映",path:"/whilefilem"},
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
            div{
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