<template>
<div>
    <li>
        {{ event.data.name }}
    </li>
  </div>
</template>
<script>
export default {
  async asyncData(params) {
    const event = await fetch(
      `http://localhost:8000/api/events/${params.params.slug}`
    ).then((res) => res.json())
    return { event }
  }
}
</script>   