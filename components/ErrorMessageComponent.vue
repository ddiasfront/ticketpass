<template>
    <div>
          <span v-for="message in messages" class="text-red-500">
            {{
              message
            }}
          </span>
    </div>
</template>
<script>
export default {
    props: ['messages']
}
</script>