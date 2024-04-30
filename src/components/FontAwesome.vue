<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <i :class="icon" v-bind="$attrs" />
</template>