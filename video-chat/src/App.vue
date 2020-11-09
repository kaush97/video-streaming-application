<template>
 <div class="container-fluid chat_container" id="app">
   
     <div class="row" id="main" v-if="authenticated">
       <Rooms />
       <Video :username="username"/>
       <Logs />
     </div>
    
     <div class="row"  v-else>
       
       <div class="username">
         
           <form class="form" @submit.prevent="submitUsername(username)">
             <h2><span class="txt--gradient-green"><b>VIDEO STREAMING</b></span></h2>
             <div class="form-group mb-2">
                 <input type="text" class="form-control" v-model="username"  placeholder="Enter you name">
             </div>
             <button type="submit" class="btn btn-primary mb-2 Botton">Submit</button>
         </form>
       </div>
     </div>
 
 </div>
</template>

<script>
// import components
import Rooms from './components/Rooms'
import Video from './components/Video'
import Logs from './components/Logs'
// import AddRoom from './components/AddRoom'

export default {
 name: 'App',
 data() {
   return {
     username: "",
     authenticated: false
   }
 },
 components: {
   Rooms,
   Video,
   Logs,
  //  AddRoom
 },
 methods: {
   submitUsername(username) {
      if(!username) {
        return alert('please provide a username');
      }

      this.authenticated = true;
   }
 }
 }
</script>

<style>
h2
 .txt--gradient-green { background-image:linear-gradient( #4d555f ,  gray); color:rgba(0, 0, 0, 0); -webkit-background-clip:text; background-clip:text; position:relative; }


#main {
 height: 460px;
  overflow-y: auto;
}
 #app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 50px;
   background: #2c3e50;
  width: 90%;
  border-radius: 25px;
    box-sizing: border-box;
     box-shadow: 0 15px 25px rgba(0,0,0,.6);
  padding: 20px; 
  
 
 
 }
 .box {
   border: 0px ;
   border-radius: 1em;
   margin-left: 1.5em;
   background: linear-gradient( #4d555f ,  gray );
    }
.rooms {
     border: 0px ;
     cursor: pointer;
     margin-left: 1.6em;
     border-radius: 1em;
     background: linear-gradient( #4d555f ,  gray );
   }
 .username {
   margin: 12px auto 20px auto;
   color: #cef0d4;
 }

   .Botton {
   color: #fff;
   background-color: #4d555f;
   border-color: #303840;
   padding: 8px;
   margin-left: 5px;
   font-weight: bolder;
 }
</style>
