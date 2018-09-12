<template>
<div>
  <div class="header">
    <h1 class="headerText">(주) OpenSG</h1>
    <nav>
      <ul>
        <li>
            <!-- current view 값을 바꿔줌 -->
          <a href="#" @click="changeMenu('home')">Home</a>
        </li>
        <li>
          <a href="#" @click="changeMenu('about')">About</a>
        </li>
        <li>
          <a href="#" @click="changeMenu('contact')">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- 여기 위치에 컴포넌트 이름에 따라 바뀜 -->
  <div class="container">
      <!-- 캐싱 콤마로 컴포넌트 여러개 사용 -->
      <keep-alive include="home,about">
          <component v-bind:is="currentView"></component>
      </keep-alive>
  </div>
</div>
</template>

<script>
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

// 기본은 참조한 이름의 소문자
export default {
    name : 'App',
    components : { Home, About, Contact },
    data : function () {
        return { currentView : 'home' }
    },
    methods : {
        changeMenu(view) {
            this.currentView = view;
        }
    }
}
</script>

<style scoped>
.header { background-color:aqua; padding: 10px 0px 0px 0px; }
.headerText { padding: 0px 20px 0px 20px; } 
ul { list-style-type: none; margin: 0; padding: 0;
    overflow: hidden; background-color: purple;  }
li { float: left; }
li a { display: block; color: yellow; text-align: center;
    padding: 14px 16px; text-decoration: none;  }
li a:hover { background-color: aqua; color:black; }
</style>