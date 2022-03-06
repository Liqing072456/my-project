<template>
  <div class="total">
    <div class="left">
      <h3>社团文化</h3>
      <p>这里可以全面提升大学生文化素质和创新素养，充分展示当代大学生丰富多彩的校园文化生活和蓬勃向上的精神风貌。</p>
    </div>
    <div class="right">
        <el-carousel :interval="4000" type="card" height="350px">
         <el-carousel-item v-for="item in carousel_small" :key="item.id">
           <img class="img1" :src="item.img" alt="">
         </el-carousel-item>
        </el-carousel>
        <div class="right_bottom">
          <h3>团队协作</h3>
          <p>form a team 组成一个团队</p>
          <p>organize a team 组织一个团队</p>
          <p>manage a team 管理一个团队</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
      carousel_small:[
        {
          id:0,
          img:require('./images/06.jpg') 
        },
        {
          id:1,
          img:require('./images/19.png') 
        },
        {
          id:2,
          img:require('./images/20.png') 
        },
        {
          id:3,
          img:require('./images/10.jpg')
        }
      ]
    };
  }
}
</script>

<style scoped>
.total{
  height: 600px;
  display: flex;
  margin:150px 100px;
  background-color: #fcfdfd;
  /* border: 1px solid red; */
}
.total .left{
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: left;
  /* border: 1px solid red; */
  margin-left: 50px;
}
.total .left h3{
  font-size: 48px;
}
.total .left p{
  font-size: 22px;
  line-height: 40px;
}
.total .right{
  flex: 3;
  /* border: 1px solid red; */
  margin-left: 80px;
}
.total .right .right_bottom{
  border: 1px solid red;
  margin: 10px auto;
  padding-left: 100px;
  text-align: left;
}
.total .right .right_bottom h3{
  font-size: 28px;
}
.total .right .right_bottom p{
  font-size: 22px;
  line-height: 30px;
}
.img1{
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
</style>