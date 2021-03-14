<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div> -->
  <PostList />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PostList from './components/PostList.vue'

export default {
  name: 'App',
  components: {
    PostList // import 를 components 로 추가
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
