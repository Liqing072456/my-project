<template>
  <div class="total">
    <!-- 左边logo -->
    <div class="left">
      <img @click="goHome"  class="img_logo" src="../../assets/images/header-logo.png" alt="">
    </div>
    <div class="right">
      <div class="item">
        <a class="link" @click="goHome">关于我们</a>
      </div>
      <div class="item">
        <a class="link" @click="gotoOurworks">我们的作品</a>
      </div>
      <div class="item">
        <a class="link" @click="gotoColorfullife">多彩生活</a>
      </div>
      <div class="item">
        <a class="link" @click="gotoGoodsmember">优秀社员</a>
      </div>
      <div class="item">
        <a class="link" @click="gotoJoinus">加入我们</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goHome(){
      this.$router.push('/home')
    },
    gotoOurworks(){
      this.$router.push('/ourworks')
    },
    gotoColorfullife(){
      this.$router.push('/colorfullife')
    },
    gotoGoodsmember(){
      this.$router.push('/goodmembers')
    },
    gotoJoinus(){
      this.$router.push('/joinus')
    }

  }
}
</script>

<style scoped>
.total{
  width: 100%;
  height: 100px;
  display: flex;
  background-color: #3c8cff;
  position: fixed;
  top: 0;
  z-index: 100;
}
.total .left{
  display: flex;
  flex: 1;
  justify-content:center;
  align-items: center;
  /* border:  1px solid red; */
  text-align:center;
}
.total .left .img_logo{
  width: 275px;
  height: 90px;
  }
  .total .left .img_logo:hover{
    cursor: pointer;
  }
.total .right{
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
  margin-left: 120px;
  /* border:  1px solid red; */
}
.total .right .item{
  margin-left: 70px;
  font-size: 16px;
  /* border: 1px solid red; */
}
.total .right .item .link{
  color: #fff;
  text-decoration: none;
}
.total .right .item .link:hover{
  color: #4fd8dc;
  cursor: pointer;
}
</style>