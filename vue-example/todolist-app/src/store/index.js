import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../Constant.js';

// 모든 컴포넌트에서 vuex 접근 가능 this.$store 접근 가능
Vue.use(Vuex);

// state는 단일 state다! 단 하나!
const store = new Vuex.Store({
    state : {
        todolist : [
            { id:1, todo : "영화보기", done:false },
            { id:2, todo : "주말 산책", done:true },
            { id:3, todo : "ES6 학습", done:false },
            { id:4, todo : "잠실 야구장", done:false },
        ]
    },
    mutations : {
        [Constant.ADD_TODO] : (state, payload) => {
            if (payload.todo !== "") {
                state.todolist.push(
                    { id:new Date().getTime(), todo: payload.todo, done:false });
            }
        },
        [Constant.DELETE_TODO] : (state, payload) => {
            var index = state.todolist.findIndex((item)=>item.id === payload.id);
            state.todolist[index].done = !state.todolist[index].done;
        },
        [Constant.DONE_TOGGLE] : (state, payload) => {
            var index = state.todolist.findIndex((item)=>item.id === payload.id);
            state.todolist.splice(index,1);
        }
    }
});

export default store;