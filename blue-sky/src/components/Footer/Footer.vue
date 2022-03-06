<template>
  <div class="total">
    <!-- 上面部分 -->
    <div class="header">
      <!-- 左边logo -->
      <img src="../../assets/images/header-logo.png" alt="">
      <div class="header_right">
        <div class="header_right_item">
          <p class="title">关于我们</p>
          <p class="title_item"><a>社团文化</a></p>
          <p class="title_item"><a>行为准则</a></p>
          <p class="title_item"><a>我们的作品</a></p>
          <p class="title_item"><a>联系我们</a></p>
        </div>
        <div class="header_right_item">
          <p class="title">新闻动态</p>
          <p class="title_item"><a>社团新闻</a></p>
          <p class="title_item"><a>证书加分</a></p>
        </div>
        <div class="header_right_item">
          <p class="title">社团管理办法</p>
          <p class="title_item"><a>学习打卡</a></p>
          <p class="title_item"><a>任务布置</a></p>
          <p class="title_item"><a>优秀作品</a></p>
          <p class="title_item"><a>留言板</a></p>
        </div>
        <div class="header_right_item">
          <p class="title">加入我们</p>
          <p class="title_item"><a>申请加入</a></p>
        </div>
      </div>
    </div>
    <!-- 下面部分 -->
    <div class="footer">
      <!-- 下左边切换语言 -->
      <div class="footer_lang">
        <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
        </el-select>
      </div>
      <!-- 下右版权 -->
      <div class="footer_right">
        <p>©2022/03/05蓝天云社团</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
     data() {
      return {
        options: [{
          value: '选项1',
          label: '简体中文'
        }, {
          value: '选项2',
          label: 'English'
        }, {
          value: '选项3',
          label: '俄语'
        }],
        value: '简体中文'
      }
    }
}
</script>

<style scoped>
.total{
  width: 100%;
  height: 330px;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  background-color: #3c8cff;
} 
.total .header{
  flex: 4;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin-top: 50px;
  padding: 0 100px;
  /* border: 1px solid red; */
}
.total .header img{
  width: 275px;
  height: 90px;
  /* border: 1px solid red; */
  flex: 1;
}
.total .header .header_right{
  flex: 3;
  display: flex;
  margin: 0 100px;
  /* border: 1px solid red; */

}
.total .header .header_right .header_right_item{
  flex: 1;
  color: #fff;
  /* border: 1px solid red; */
  /* margin-right: 10px; */
  padding-left: 100px;
}
.total .header .header_right .header_right_item .title{
  font-weight: 700;
  font-size: 16px;
  margin-top: -2px;
}
.total .footer{
  flex: 1;
  display: flex;
  /* border: 1px solid red; */
  padding: 0 100px;
  justify-content:space-around;
  align-items: center;
}
.total .footer .footer_lang{
  flex: 1;
  padding-left: 35px;
  /* border: 1px solid red; */
  color: #fff;
}
.total .footer .footer_right{
  color: #fff;
  flex: 1;
  /* border: 1px solid red; */
  text-align: right;
  /* margin-left: 50px; */
  padding-right: 50px;

}
</style>