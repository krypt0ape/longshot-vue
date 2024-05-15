<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});
</script>
<template>
  <div class="text-white inline-block border-solid border-green-500 border-2 p-2 m-2 cursor-pointer">
    {{ title }}
    {{ count }}
    <!-- {{ icon }} -->
  </div>
</template>
