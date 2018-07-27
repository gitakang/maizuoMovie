<template>
    <div>
        <div class="detail">
            <img :src="list.cover.origin">
            <div class="item">
                <div class="colorblock"></div>
                <p>影片简介</p>
                <div class="lists"><span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span><span>{{list.director}}</span></div>
                <div class="lists">
                    <span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
                    <span 
                    class="actor" 
                    v-for="(actor,index) in list.actors" 
                    :key="index">{{actor.name}}&nbsp;|&nbsp;</span>
                </div>
                <div class="lists"><span>地区语言：</span><span>{{list.language}}</span></div>
                <div class="lists"><span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span><span>{{list.category}}</span></div>
                <div class="lists"><span>上映时间：</span><span>{{list.premiereAt|date}}上映</span></div>
                <div class="content">
                    {{list.synopsis}}
                </div>
            </div>
        </div>
        <div v-if="type === 'isNowPlaying'" class="buy">立即购票</div>
    </div>
</template>

<script>
import axios from "axios";
export default{
    name:"MovieDetails",
    props :["id","type"],
    data(){
        return{
            list:[],
            ids:13164
        }
    },
    methods:{
        loadMovie(){
            axios.get("http://localhost:8080/mz/v4/api/film/" + this.id,{
                params:{
                    __t:Date.now()
                }
            }).then(res=>{
                this.list = res.data.data.film;
                console.log(this.list)
            })
        }
    },
    filters: {
      date(value){
          let dates = new Date(value);
           return dates.getMonth() + 1 + "月" + dates.getDate() + "日";
      }  
    },
    created() {
        this.$bus.on("nowMovie",this.test);
        this.loadMovie();
    }
}
</script>

<style scoped lang="scss">
    div{
        .detail{
            img{
                width: 3.2rem;
                height: 1.8rem;
            }
            .item{
                position: relative;
                padding: 0 0.2rem;
                font-size: 0.12rem;
                color: #333;
                margin-top: 0.2rem;
                margin-bottom: 1rem;
                .colorblock{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0.15rem;
                    height: 0.24rem;
                    background: #f3c2a4;
                }
                p{
                    font-size: 0.16rem;
                    line-height: 0.22rem;
                    margin-bottom: 0.2rem;
                }
                .lists{
                    margin-bottom: 0.1rem;
                    span{
                        line-height: 0.22rem;
                    }
                }
                .content{
                    text-indent: 0.25rem;
                    line-height: 0.18rem;
                }
            }
        }
        .buy{
            width: 1.56rem;
            height: 0.36rem;
            border-radius: 0.2rem;
            background: #fe8233;
            position: fixed;
            right: 0;
            left: 0;
            margin: auto;
            bottom: 0.2rem;
            text-align: center;
            line-height: 0.36rem;
            color: white;
        }
    }
</style>