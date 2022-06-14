<template>
  <div
    v-if="event"
    class="h-80 md:h-64 border border-black radius-sm bg-white rounded-lg overflow-hidden flex flex-col" 
  >
    <div
      class="h-2/5 bg-cover bg-center"
      :style="{ backgroundImage: `url(${event.picture})` }"
    ></div>
    <div>
      <div class="p-2 pl-4 text-lg md:text-sm">
        <div>{{ event.name }}</div>
        <div>{{ event.date }}</div>
      </div>
      <div class="p-2 pb-4 pt-6 flex justify-center">
        <button
          class="rounded-full group relative w-full md:w-32 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          View
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["event"],
};
</script>
