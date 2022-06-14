<template>
  <div>
    <HeaderComponent />

    <div
      class="container p-10 md:p-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      <div v-for="event in this.$store.state.events.data" :key="event.id">
        <EventCardComponent
          :event="{
            picture: event.image,
            name: event.name,
            date: event.startDate,
          }"
        />
      </div>
    </div>
    <div v-for="link in this.$store.state.eventsmeta.links">
    <button @click="getEventsByPage(link.url)">
      {{link.label}}
      {{link.url}}
    </button>
    </div>
       <!-- <div v-if="this.$store.state.events.meta.links" v-for="link in this.$store.state.events.meta.links">
    {{link}}
    <a @click="getData()">
        {{link.label}}
    </a>
    </div> -->
    <!-- <div v-if="this.$store.state.events.meta.links" v-for="link in this.$store.state.events.meta.links">
    {{link}}
    <a @click="getData()">
        {{link.label}}
    </a>
    </div> -->
  </div>
</template>
<script>
import axios from "axios";
import HeaderComponent from "~/components/HeaderComponent.vue";
import EventCardComponent from "~/components/EventCardComponent.vue";

import { mapActions } from 'vuex';
export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  mounted() {
    this.$store.dispatch('getEventsByPage');
  },
  methods: {  
    ...mapActions(["getEventsByPage"])
  },
   components: { HeaderComponent, EventCardComponent }
};


// export default {
//   data() {
//     return {
//       events: {}
//     }
//   },
//   async asyncData() {
//     const api = "http://localhost:8000/api/events";
//     const events = await axios.get(api);
//     this.events = events;
//   },
//   methods: {

//   async getData() {
//     const api = "http://localhost:8000/api/events?page=2"; 
//     const events = await axios.get(api);
//     console.log(this.events)
//     this.events = events;
    
//   }

//   },
//   components: { HeaderComponent, EventCardComponent },
// };
</script>
