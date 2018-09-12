<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  mounted : function () {
    axios.get("http://sample.bmaster.kro.kr/contacts", {
      params : { pageno:1, pagesize:5 }
    })
    .then((response)=> { 
      console.log (response.data)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
