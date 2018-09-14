<template>
<div>
  <div class="header">
    <h1 class="headerText">(주)OpenSG</h1>
    <nav>
      <ul>
        <li><router-link :to="{ name:'home' }">Home</router-link></li>
        <li><router-link :to="{ name:'about' }">About</router-link></li>
        <li><router-link :to="{ name:'contacts' }">Contacts</router-link></li>
      </ul>
    </nav>
  </div>

  <div class="container">
    <router-view></router-view>
  </div>
</div>
</template>
<script>
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contacts from './components/Contacts.vue';
import ContactByNo from './components/ContactByNo.vue';
import VueRouter from 'vue-router';
import NotFound from './components/NotFound';

function connectToProps (route) {
  return { no : route.params.no, path : route.path };
}
const router = new VueRouter({
  mode : "history",
  routes : [ // route 경로는 순서대로 찾는다.
    { path:'/', component: Home },
    { path:'/home', name:'home', component: Home },
    { path:'/about', name:'about', component: About },
    { 
      path:'/contacts', 
      component: Contacts,
      name:'contacts', 
      children : [
        {
          path:':no', name:'contactsbyno', component: ContactByNo, props: connectToProps
         } 
      ]
    },
    { path : '*', component : NotFound}
  ]
})
export default {
  name : 'app',
  router
}
</script>
<style>
.header { background-color:aqua; padding: 10px 0px 0px 0px; }
.headerText { padding: 0px 20px 0px 20px; } 
ul { list-style-type: none; margin: 0; padding: 0;
    overflow: hidden; background-color: purple;  }
li { float: left; }
li a { display: block; color: yellow; text-align: center;
    padding: 14px 16px; text-decoration: none;  }
li a:hover { background-color: aqua; color:black; }
</style>