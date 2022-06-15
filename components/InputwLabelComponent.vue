<template>
    <div>
          <label class="form-label" :for="forLabel">{{label}}</label>
        <input
            :type="type"
            :accept="accept"
            :aria-label="arialabel"
            @change="onChange"
            :id="id"
            v-mask="mask"
            :name="name"
            class="w-full relative h-10 border-solid border border-gray-200 rounded-full"
            v-model="dynamic"
          />
    </div>
</template>
<script>
export default {
    props: [
        'type',
        'accept',
        'arialabel',
        'onChange',
        'mask',
        'name',
        'id',
        'value',
        'label',
        'forLabel',
        'dynamic'
    ]
}
</script>
<style>
    
</style>