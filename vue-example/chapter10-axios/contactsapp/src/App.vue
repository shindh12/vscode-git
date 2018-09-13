<template>
  
</template>

<script>
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import UpdateContact from "./components/UpdateContact";
import UpatePhoto from "./components/UpatePhoto";
import CONF from "./Config.js";
import eventBus from "./EventBus.js";

export default {
  name : "app",
  components : { ContactList, AddContact, UpdateContact, UpatePhoto },
  data : function () {
    return {
      currentView : null,
      contact : { no:0, name:"", tel:"", address:"", photo:"" },
      contactlist : {
        pageno:1, pagesize: CONF.PAGESIZE, totalcount:0, contacts:[]
      }
    }
  },
  mounted() {
    
  },
  methods : {

  }
}
</script>

<style scoped>
#container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
