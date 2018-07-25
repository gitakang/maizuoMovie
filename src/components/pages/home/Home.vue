<template>
    <div class="warp">
        <m-Carousel></m-Carousel>
        <hot-movie v-for="type in types" :key="type.id" :type="type"></hot-movie>
    </div>
</template>

<script>
    import mCarousel from "./carousel.vue";
    import HotMovie from "./HotMovie.vue";
    export default{
        name : "mHome",
        data(){
            return {
                types:[
                    {id:1,urlType:"now-playing",count:5,title:"热映"},
                    {id:2,urlType:"coming-soon",count:3,title:"即将上映"}
                ]
            }
        },
        components:{
            mCarousel,
            HotMovie,
        },
        methods: {
        }
    }
</script>

<style scoped lang="scss">
    
</style>