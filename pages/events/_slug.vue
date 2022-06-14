<template>
  <div class="h-screen">
    <HeaderComponent />
    <div
      class="w-full h-1/2 bg-contain bg-center bg-no-repeat bg-gray-300"
      :style="{ backgroundImage: `url(${event.data.image})` }"
    ></div>

    <div class="w-full h-1/2 container mx-auto">
      <h1 class="text-4xl p-2 text-center">{{ event.data.name }}</h1>
      <h2 class="text-xl p-2 text-left">{{ this.normalizedDate }}</h2>
      <h3 class="text-xl p-2 text-left">{{ this.normalizedEndDate }}</h3>
      <p cl>
        {{ event.data.description }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    normalizeDate(date) {
      const jsDate = new Date(date);
      const m = jsDate.getMonth() + 3;
      const y = jsDate.getFullYear();
      const d = jsDate.getDay();
      const displayDate = `${d}/${m}/${y}`;
      return displayDate;
    },
  },
  computed: {
    normalizedDate() {
      return this.normalizeDate(this.event.data.startDate);
    },
    normalizedEndDate() {
      return this.normalizeDate(this.event.data.endDate);
    },
  },
  async asyncData(params) {
    const event = await fetch(
      `http://localhost:8000/api/events/${params.params.slug}`
    ).then((res) => res.json());
    return { event };
  },
};
</script>
