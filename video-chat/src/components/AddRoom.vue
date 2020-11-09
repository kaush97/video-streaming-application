<template>
   <div class="row roomForm">
       <form class="form-inline" @submit.prevent="createNewRoom(room_name)">
           <div class="form-group mb-2">
               <input style="width:12em" type="text" class="form-control" placeholder="Enter Room Name" v-model="room_name" >
           </div>
           <button type="submit" class="btn btn-primary mb-2 createRoomBotton" @submit.prevent="createNewRoom()">Add</button>
       </form>
   </div>
</template>

<script>
import { EventBus } from '../Event'

export default {
 name: "AddRoom", // Component name
 data() {
   return {
    room_name: "",
   }
 },
 methods: {
   createNewRoom(name) {
       debugger
       if(!name) {
         alert("please provide a room name");
         return
       }

       this.room_name = '';
       EventBus.$emit('new_room', name);
   }
 }
}
</script>

<style>
.form-control{
  padding: auto 20% ;
 
}
 .roomForm {
     margin-left: auto;
     margin-right: auto;
     margin-top: 30px;
     width: 100%;
 }
 .createRoomBotton {
   color: #fff;
   background-color: #303840;
   border-color: #303840;
   padding: 8px 10px;
   margin-left: 8px;
   /* float: right; */
   font-weight: bolder;
 }
</style>