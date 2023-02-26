<template>
  <div class="">
    <span class="text-teal-400" >{{ author }}</span>&nbsp;
    <span class="text-teal-400">{{ formattedDate }}</span>
  </div>
</template>

<script setup>
//truc
const props = defineProps({
  author: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'info'
  }
})
const formattedDate = computed(() => {
  return new Date(props.date).toDateString()
})
</script>
