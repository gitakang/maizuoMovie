<template>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="imgs in carousel" :key="imgs.id">
                    <img :src="imgs.imageUrl">
                </div>
            </div>
        </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import axios from "axios";
export default{
    name:"Carousel",
    data(){
        return{
           carousel:[]
        }
    },
    methods: {
        loadCarouselImg(){
                axios.get("http://localhost:8080/mz/v4/api/billboard/home",{
                params:{
                    __t:Date.now()
                }
            }).then(res=>{
                this.carousel = res.data.data.billboards;
            });
        }
    },
    updated() {
         new Swiper ('.swiper-container', {
                    //无限循环
                    loop: true,
                    //自动轮播
                    autoplay:{
                        //自动启动轮播
                        disableOnInteraction:false,
                        //轮播时间
                        delay: 2500,
                    },
                    }); 
    },
    created() {
        this.loadCarouselImg();
    }
}
</script>

<style scoped lang="scss">
        .swiper-container {
                width: 100%;
                z-index: 100;
            img{
                height: 1.8rem;
            }
        }
</style>