<template>
   <div class="block">
    <el-carousel trigger="click" height="620px">
      <el-carousel-item v-for="item in imageList" :key="item.id">
        <img class="img_caro" :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name:'carousel',
  data(){
    return {
      imageList:[
        {
          id:0,
          imgUrl:require('./images/no1.png') 
        },
        {
          id:1,
          imgUrl:require('./images/no2.png') 
        },
        {
          id:2,
          imgUrl:require('./images/no3.png') 
        }
      ]
    }
  }
}
</script>

<style>
.block{
  margin-top: 100px;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .img_caro{
    width: 100%;
    height: 100%;
  }
</style>