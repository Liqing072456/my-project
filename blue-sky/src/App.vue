<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-if="this.$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  }

}
</script>

<style scoped>

</style>
