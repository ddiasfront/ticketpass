<template>
  <div>
    <HeaderComponent />

    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      <div v-for="event in events.data" :key="event.id">
        <EventCardComponent
          :event="{
            picture: event.image,
            name: event.name,
            date: event.startDate,
          }"
        />
      </div>
    </div>
    <div v-if="events.meta.links" v-for="link in events.meta.links">
    <a>
        {{link.label}}
    </a>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import HeaderComponent from "~/components/HeaderComponent.vue";
import EventCardComponent from "~/components/EventCardComponent.vue";
export default {
  async asyncData() {
    const api = "http://localhost:8000/api/events";
    const events = await axios.get(api).then((events) => events.data);
    return { events };
  },
  components: { HeaderComponent, EventCardComponent },
};
</script>
