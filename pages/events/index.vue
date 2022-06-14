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
            id: event.id
          }"
        />
      </div>
    </div>
    <PaginationComponent :pagination="this.$store.state.eventsmeta.links" />
  </div>
</template>
<script>
import HeaderComponent from "~/components/HeaderComponent.vue";
import EventCardComponent from "~/components/EventCardComponent.vue";

import { mapActions } from 'vuex';
import PaginationComponent from '../../components/PaginationComponent.vue';
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
    ...mapActions(["getEventsByPage"]),
  },
   components: { HeaderComponent, EventCardComponent, PaginationComponent }
};
</script>
