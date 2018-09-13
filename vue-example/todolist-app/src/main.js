import Vue from 'vue'
import TodoList from './components/TodoList'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store : store,
  render: h => h(TodoList)
}).$mount('#app')
