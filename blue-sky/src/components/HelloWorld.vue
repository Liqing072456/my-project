<template>
  <div class="hello">
    <h1>欢迎来到留言板</h1>
    <form>
      姓名： <input type="text" name="username" v-model="userName"> <br>
      年龄： <input type="text" name="age" v-model="age"> <br>
      <textarea name="" id="" cols="30" rows="10" v-model="message"></textarea>
      <button @click="addUser">提交</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      userName: '',
      age: '',
      message:''
    }
  },
  methods: {
    addUser() {
      var name = this.userName;
      var age = this.age;
      var message=this.message
      this.$http.post('/api/user/addUser', {
        name: name,
        age: age,
        message:message
      },{}).then((response) => {
        console.log(response);
      })
    }
  }
}
</script>