<template>
  <div>
    <h1>연락처</h1>
    <div class="wrapper">
        <div class="box" v-for="c in contacts" :key="c.no">
            <span @click="navigate(c.no)" style='cursor:pointer'>
                [ {{c.name}} ]
            </span>
            <!-- <router-link v-bind:to="{name:'contactsbyno', params: {no:c.no}}">
                {{c.name}}
            </router-link> -->
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import contactlist from '../ContactList.js';

export default {
    name: "contact",
    data : function () {
        return { contacts:contactlist.contacts };
    }, 
    methods : {
        navigate(no) {
            if(confirm('상세정보 볼까요?')) {
                 this.$router.push( {name : 'contactsbyno', params : {no:no}},
                 function () {
                     console.log('굿');
                 })
            }
        }
    }
}
</script>

<style>
.wrapper { background-color:#fff; clear:both; display:table; }
.box { float:left; background-color:aqua; border-radius:5px;
    padding: 10px; margin:3px; text-align:center; font-size:120%;
    width:100px; font-weight:bold; }
a:link, a:visited { text-align:center; text-decoration:none;
    display:inline-block; }
</style>
