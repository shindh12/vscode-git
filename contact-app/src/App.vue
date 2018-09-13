<template>
  <div id="container">
    <div class="page-header">
      <h1 class="text-center">연락처 관리 애플리케이션</h1>
      <p> (Dynamic Component + EventBus + Axios) </p>
    </div>
    <!--  -->
    <component :is="componentId"></component>
    <!-- contactlist 는 정적으로 고정 -->
    <contactList :contactlist="contactlist"></contactList>
  </div>
</template>

<script>
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import UpdateContact from './components/UpdateContact';
import UpdatePhoto from './components/UpdatePhoto';
import CONF from './Config.js';
import eventBus from './EventBus.js';
import axios from 'axios'

export default {
  name: 'app',
  components: {
    ContactList, AddContact, UpdateContact, UpdatePhoto
  },
  data : function () {
    return {
      currentView : null,
      contact : { no:0, name:'', tel:'', address:'', photo:'' },
      ContactList : {
        pageno:1, pagesize: CONF.PAGESIZE, totalcount:0, contacts:[]
      }
    }
  },
  mounted : function () {
  },
  methods :{
    pageChanged : function (page) {
      this.contactlist.pageno = page;
      this.fetchContacts();
    },
    fetchContacts : function () {
      axios.get(CONF.FETCH, {
        params : {
          pageno : this.contactlist.pageno,
          pagesize : this.contactlist.pagesize
        }
      })
      .then ((response) => {
        this.contactlist = response.data;
      })
      .catch ((ex) => {
        console.log('fetchContacts failed', ex);
        this.contactlist.contacts = [];
      })
    },
    addContact : function (contact) {
      axios.post(CONF.ADD, contact)
      .then ((response) => {
        if(response.data.status === "success"){
          this.contactlist.pageno = 1;
          this.fetchContacts();
        } else {
          console.log("연락처 추가 실패 : " + reponse.data.message);
        }
      })
      .catch ((ex) => {
        console.log("addContact Failed : ", ex);
      })
    },
    updateContact : function (contact) {
      axios.put(CONF.UPDATE.replace("${no}", contact.no), contact)
      .then ((response) => {
        if (response.data.status === "success") {
          this.fetchContacts();
        } else {
          console.log("연락처 변경 실패 : " + reponse.data.message);
        }
      })
      .catch ((ex) => {
        console.log("updateContact Failed : ", ex);
      })
    },
    fetchContactOne : function (no) {
      axios.get (CONF.FETCH_ONE.replace("${no}", no))
      .then ((response) => {
        this.contact = response.data;
      })
      .catch ((ex) => {
        console.log ("fetchContactOne failed", ex)
      })
    },
    deleteContact : function (no) {
      axios.delete(CONF.DELETE.replace("${no}", no))
      .then ((response) => {
        if(response.data.status === "success") {
          this.fetchContacts();
        } else {
          console.log ("연락처 삭제 실패 : " + response.data.message);
        }
      })
      .catch ((ex) => {
        console.log ("delete failed", ex);
      })
    },
    updatePhoto : function (no, file) {
      var data = new FormData();
      data.append ('photo', file);
      axios.post (CONF.UPDATE_PHOTO.replace("${no}", no), data)
      .then ((response) => {
        if(response.data.status === "success") {
          this.fetchContacts();
        } else {
          console.log ("연락처 사진 변경 실패 : " + response.data.message);
        }
      })
      .catch((ex) => {
        console.log("updatePhoto failed", ex)
      })
    }

  }
}
</script>

<style>
#container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
