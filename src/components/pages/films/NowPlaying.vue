<template>
    <div
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
    infinite-scroll-immediate-check="false"
    >
        <router-link 
        tag="div" 
        class="filem-name" 
        v-for="curr in films" 
        :key="curr.id"
        :to="url + '/' + curr.id + '/' + type"
        >
            <div class="imgs"><img :src="curr.poster.origin"></div>
            <div class="right">
                <div class="movie-name">
                    <h4>{{curr.name}}</h4>
                    <div>{{curr.grade}}<i class="fa fa-angle-right fa-la"></i></div>
                </div>
                <div class="movie-title">{{curr.intro}}</div>
                <div class="movie-num">
                    <span>{{curr.scheduleCount}}家影院上映</span><span class="">{{curr.watchCount}}人购票</span>
                </div>
            </div>
    </router-link>
    </div>
</template>

<script>
    import axios from 'axios';
    import {Toast} from "mint-ui";
    export default{
        name:"NowPlaying",
        // props:["type"],
        data(){
            return{
                films:[],
                count:7,
                loading:false,
                url:"/moviedetails",
                type:"isNowPlaying"
            }
        },
        methods: {
            loadMovie(){
                axios.get("http://localhost:8080/mz/v4/api/film/now-playing",{
                    params:{
                        __t:Date.now(),
                        page:1,
                        count:this.count
                    }
                }).then(res=>{
                    this.films = res.data.data.films;
                })
            },
            loadMore() {
            this.loading = true;
            setTimeout(() => {
                let last = this.films[this.films.length - 1];
                this.count += 7;
                this.loadMovie();
                this.loading = false;
            }, 2500);
            },
            nowMovie(id){
                this.$bus.emit("nowMovie",(id))
            }
        },
        created() {
            this.loadMovie();
        }
    }
</script>

<style scoped lang="scss">
    div{
        .filem-name{
            width: 90%;
            height: .85rem;
            padding: .2rem 0;
            margin: 0 auto;
            border-bottom: 0.01rem dashed #8e8e8e;
            color: #8e8e8e;
            display: flex;
            justify-content: flex-start;
            .imgs{
                width: 0.6rem;
                height: 0.8256rem;
                background: wheat;
                img{
                    width: 0.6rem;
                    height: 0.8256rem;
                }
            }
            .right{
                margin-left: 0.1rem;
                width: 100%;
                .movie-name{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    margin-top:0.05rem;
                    h4{
                    font-weight: 400;
                    color: black;
                    }
                    div{
                        color:red;
                        margin-right: 0.3rem;
                        i{
                            color:#8e8e8e;
                            margin-left: 0.05rem;
                        }
                    }
                }
                .movie-title{
                    height: 0.24rem;
                    font-size: 0.12rem;
                    margin-top: 0.15rem;
                }
                .movie-num{
                    margin-top: 0.05rem;
                    font-size: .12rem;
                    span{
                        margin-right: 0.3rem;
                    }
                }
                
            }
        }
    }
</style>