<template>
  <div class="total">
    <div class="left">
      <img class="img" src="./image/21.png" alt="">
    </div>
    <div class="right">
      <h3>团队行为准则</h3>
      <p>目标要明确一致，这样团队有前进的动力，这正是高效团队的不同之处；
        积极向上、豁达乐观、真诚待人、经验要相互分享，学习资源要共享，
        还可以增进员工间的情感，减少摩擦，有利于团队和谐；
        定位准确、团队合理分工，只有多方向的人才的合理搭配和组合，
        才能有效地履行团队职能最终达成成就。</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'more'
}
</script>

<style scoped>
.total{
  height: 600px;
  margin: 0 100px;
  background-color: #fcfdfd;
  display: flex;
  /* border: 1px solid red; */
}
.total .left{
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* border: 1px solid red; */

}
.total .left .img{
  width: 700px;
  height: 450px;
  border-radius: 5px;
}
.total .right{
  flex: 2;
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  /* border: 1px solid red; */
}
.total .right h3{
  font-size: 48px;
}
.total .right p{
   font-size: 22px;
  line-height: 40px;
}
</style>