<template>
  <div>
    <!-- 轮播图 -->
    <Carousel></Carousel>
    <!-- 中间部分 -->
    <Main></Main>
    <More></More>
    <ConnectUs></ConnectUs>
  </div>
  
</template>

<script>
import Carousel from '@/views/Home/Carousel/Carousel'
import Main from '@/views/Home/Main/Main'
import More from '@/views/Home/More/More'
import ConnectUs from '@/views/Home/ConnectUs/ConnectUs'
import {AddScroll} from '@/utils/scroll/scroll.js'
export default {
  name:'home',
  components:{
    Carousel,
    Main,
    More,
    ConnectUs
  },
  mounted(){
    AddScroll()
  }
}
</script>

<style>
/* 去除页面滚条 */
 body::-webkit-scrollbar {display: none;}
</style>