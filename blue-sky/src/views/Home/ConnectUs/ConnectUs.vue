<template>
  <div class="total">
    <!-- 上面部分 -->
    <div class="header">
      <h3>联系我们</h3>
    </div>
    <!-- 下面部分 -->
    <div class="footer">
      <div class="footer_left">
        <div class="footer_left_item">
          <h3>大数据学习</h3>
          <a href="#">blueskybigdata@163.com</a>
          </div>
        <div class="footer_left_item">
          <h3>云计算学习</h3>
          <a href="#">blueskycloudcomputed@163.com</a>
          </div>
        <div class="footer_left_item">
          <h3>前端学习</h3>
          <a href="#">blueskywebclient@163.com</a>
        </div>
      </div>
      <div class="footer_right">
        <div class="footer_right_item">
          <h3>python学习</h3>
          <a href="#">blueskypython@163.com</a>
        </div>
        <div class="footer_right_item">
          <h3>java学习</h3>
          <a href="#">blueskyjava@163.com</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'connectus'
}
</script>

<style scoped>
.total{
  height: 600px;
  margin: 150px 100px;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  padding-left: 25px;
}
.total .header{
  flex: 1;
}
.total .header h3{
  font-size: 48px;
}
.total .footer{
  flex: 2;
  display: flex;
  /* border: 1px solid red; */
}
.total .footer .footer_left{
  flex: 1;
  /* border: 1px solid red; */

}
.total .footer .footer_right{
  flex: 1;
  /* border: 1px solid red; */
  padding-left: 50px;
}
.total .footer .footer_right .footer_right_item{
  /* border: 1px solid red; */
  margin-bottom: 40px;

}
.total .footer .footer_right .footer_right_item h3{
  font-size: 25px;
}
.total .footer .footer_right .footer_right_item a{
  font-size: 18px;
  text-decoration: none;
  color: #3c8cff;

}
.total .footer .footer_left .footer_left_item{
  /* border: 1px solid red; */
  margin-bottom: 40px;
}
.total .footer .footer_left .footer_left_item h3{
  font-size: 25px;
}
.total .footer .footer_left .footer_left_item a{
  font-size: 18px;
  text-decoration: none;
  color: #3c8cff;
}
</style>