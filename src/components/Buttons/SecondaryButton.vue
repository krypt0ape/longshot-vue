<script setup>
import BaseButton from "./BaseButton.vue";
</script>
<template>
  <BaseButton class="secondary-btn">
    <slot />
  </BaseButton>
</template>
<style>
.secondary-btn {
  border-radius: 5px;
  border-top: 1px solid #EA83F3;
  /* border-right: 1px solid #EA83F3;
border-left: 1px solid #EA83F3; */
  background: linear-gradient(180deg, #C53FC8 0%, #4B236A 100%);
  box-shadow: 0px 2px 0px 0px rgba(255, 255, 255, 0.10) inset, 0px 1px 0px 0px rgba(0, 0, 0, 0.20);
}
</style>
