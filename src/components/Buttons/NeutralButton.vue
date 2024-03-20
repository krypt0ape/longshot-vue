<script setup>
import BaseButton from './BaseButton.vue';
</script>
<template>
  <BaseButton class="neutral-btn ">
    <slot />
  </BaseButton>
</template>
<style>
.neutral-btn {
  border-radius: 5px;
  border: 1px solid var(--Accent-Stroke, #273646);
  background: #182330;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.20);
}
</style>