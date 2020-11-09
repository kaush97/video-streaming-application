<template>
    <div class="col-md-3 box">
        <div class="log"  v-for="log in logs" v-bind:key="log.id">
            {{log.message}}
        </div>
    </div>
</template>

<script>

import { EventBus } from '../Event'
// import axios from 'axios'

export default {
  name: "Logs",
  data() {
    return {
        logs: [],
        logCount: 0
    }
  },
  created() {
    EventBus.$on('new_log', (message) => {
        this.logs.push( {id: this.logCount, message: message} );

        this.logCount += 1; 
    })
  },
}
</script>

<style scoped>
    .log {
        border: 0px;
        padding: 13px;
        margin: 5px 0px;
        color: ghostwhite;
        border-radius: 1em;
        background-color: #009688;
        
    }
</style>