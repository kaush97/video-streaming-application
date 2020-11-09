<template>
   <div class="col-md-3 rooms">
       <div class="room" v-for="room in rooms" v-bind:key="room.id" @click="showRoom(room.name)">
          <b> {{room.name}}</b>
       </div>
   <AddRoom />
   </div>
</template>

<script>
import { EventBus } from '../Event'
import AddRoom from '../components/AddRoom'

export default {
 name: "Rooms", // Name of the component
 data() {
   return {
       rooms: [
           {id: 1, name: 'Daily Standup'},
           {id: 2, name: 'Client Meeting'},
           {id: 3, name: 'Front-end Group Meeting'}
       ],
       roomCount: 3, // used to keep track of the number of rooms present
       loading: false, // indicate when tracks in a room is being loaded
   }
 },
 components: {
   AddRoom // imported AddRoom component
 },
  created() {
   EventBus.$on('new_room', (data) => {
       this.roomCount++;
       this.rooms.push({id: this.roomCount, name: data});
   });
 },
 methods: {
   showRoom(room) {
       debugger
       EventBus.$emit('show_room', room);
   }
 }

}
</script>

<style scoped> /* scoped attribute is used here so the styling applies to this component alone */
   .rooms > .room {
       border: 0px solid rgb(124, 129, 124);
        box-sizing: border-box;
       box-shadow: 0 3px white;
      
       padding: 13px;
       border-radius: 10px;
       margin: 10px 0px;
       color: ghostwhite;
       background-color: #303840;
       
   }
.rooms > .room:hover{
background-color: white;
color: #000;
}
   
</style>