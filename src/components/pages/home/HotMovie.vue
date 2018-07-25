<template>
    <div>
        <div class="coming-soon" v-if="type.id === 2">
            <div>即将上映</div>
        </div>
        <div class="movie-box" v-for="curr in list" :key="curr.id">
            <img :src="curr.cover.origin">
            <div>
                <div class="info">
                    <h5>{{curr.name}}</h5>
                    <p v-if="curr.isNowPlaying">{{curr.cinemaCount}}家影院上映{{curr.watchCount}}人购票</p>
                </div>
                <div class="points" v-if="curr.isNowPlaying">{{curr.grade}}</div>
                <div class="points" v-else>{{curr.premiereAt | time}}</div>
            </div>
        </div>
        <div class="more-movie" @click="updataCount">更多{{type.title}}电影</div>
    </div>
</template>

<script>
import axios from "axios";
    export default{
        name:"HotMovie",
        props:["type"],
        data(){
            return{
                list:[]
            }
        },
        filters:{
            time(value){
                let dates = new Date(value);
                return dates.getMonth() + 1 + "月" + dates.getDate() + "日";
            }
        },
        methods: {
            loadImgs(){
                axios.get("http://localhost:8080/mz/v4/api/film/"+this.type.urlType,{
                    params:{
                        __t:Date.now(),
                        page:1,
                        count:this.type.count
                    }
                }).then(res=>{
                    this.list = res.data.data.films;
                })
            },
            updataCount(){
                        let num = (this.type.id == 1) ? 5 : 3;
                     this.type.count += num;
                    this.loadImgs();
            }
        },
        created () {
            this.loadImgs();
        }
    }
</script>

<style scoped lang="scss">
    div{
        .movie-box{
            width: 2.86rem;
            margin: 0 auto;
            margin-top: 0.2rem;
            background: white;
            img{
                width: 2.86rem;
            }
            div{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 0.1rem;
                div{
                    color: #f78360;
                    font-size: 0.18rem;
                    
                }
                .info{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    color:#333;
                    font-size: 0.12rem;
                    line-height: 0.15rem;
                    h5{
                        font-weight: 100;
                        margin-top: 0.1rem;
                        margin-bottom: 0.06rem;
                    }
                    p{
                        color:#9a9a9a;
                        margin-bottom: 0.1rem;
                    }
                }
                .points{
                    height: 0.3rem;
                }
            }
        }
        .more-movie{
            width: 1.6rem;
            height: 0.3rem;
            border:0.01rem solid #9a9a9a;
            border-radius: 0.2rem;
            text-align: center;
            line-height: 0.3rem;
            color: #616161;
            font-size: .12rem;
            margin: 0.2rem auto;
        }
        .coming-soon{
            border-top: 1px solid #616161;
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            position: relative;
            div{
                width: 0.65rem;
                height: 0.2rem;
                background: #a7a7a7;
                text-align: center;
                line-height: 0.2rem;
                color: #eee;
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                top: -0.1rem;
                border-radius: 0.05rem;
                font-size: 0.12rem;
            }
        }
    }
</style>
