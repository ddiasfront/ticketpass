<template>
  <div v-if="event" class="p-2 border border-black radius-sm bg-white rounded-lg overflow-hidden">
    <img :src="event.picture" />
    <div>{{event.picture}}</div>
    <div>
        <div>{{event.name}}</div>
        <div>{{event.date}}</div>
    </div>
    <button>View</button>
  </div>
</template>
<script>
export default {
    props: ['event'],
};
</script>
