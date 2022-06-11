<template>
<div>
    <ul v-for="event in events.data" :key="event.id">
      <NuxtLink :to="`events/${event.id}`">
        <li>{{ event.name }}</li>
      </NuxtLink>
    </ul>
  </div>
</template>
<script>
export default {
    
  async asyncData() {
    const events = await fetch(
      'http://localhost:8000/api/events'
    ).then((res) => res.json())
    return { events }
  }
}
</script>   