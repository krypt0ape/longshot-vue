<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <ClientOnly>
    <i :class="icon" v-bind="$attrs" />
  </ClientOnly>
</template>