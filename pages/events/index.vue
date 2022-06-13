<template>
  <div>
    <HeaderComponent/>
    <ul v-for="event in events.data" :key="event.id">
      <NuxtLink :to="`events/${event.id}`">
        <li>{{ event.name }}</li>
      </NuxtLink>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import HeaderComponent from "~/components/HeaderComponent.vue";
export default {
    async asyncData() {
        const api = "http://localhost:8000/api/events";
        const events = await axios.get(api).then((events) => events.data);
        return { events };
    },
    components: { HeaderComponent }
};
</script>
