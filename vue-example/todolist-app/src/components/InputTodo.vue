<template>
    <div>
        <input type="text" class="input" id="task" v-model.trim="todo" placeholder="입력 후 엔터" @keyup.enter="addTodo"/>
        <span class="addbutton" @click="addTodo">추 가</span>
    </div>
</template>
<script>
import Constant from '../Constant.js';
export default {
    name : "input-todo",
    data : function () {
        return { todo:"" };
    },
    methods : {
        addTodo : function () {
            // this.$store.commit(Constant.ADD_TODO, {todo:this.todo});
            this.$store.dispatch(Constant.ADD_TODO, { todo:this.todo });
            this.todo = "";
        }
    }
}
</script>
<style>
    * {  box-sizing: border-box;  }
    .header {
        background-color: purple; padding: 30px 30px;
        color: yellow; text-align: center;
    }
    .header:after {
        content: ""; display: table; clear: both;
    }
</style>
