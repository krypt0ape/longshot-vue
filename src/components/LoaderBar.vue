<script setup>
</script>
<template>
	<div class="loader">&nbsp;</div>
</template>
<style>
.loader {
  width: 120px;
  height: 15px;
  opacity: 0.75;
  border-radius: 20px;
  color: #D9DFE8;
  border: 2px solid;
  position: relative;
}
.loader::before {
  content: "";
  position: absolute;
  margin: 2px;
  inset: 0 100% 0 0;
  border-radius: inherit;
  background: currentColor;
  animation: l6 2s infinite;
}
@keyframes l6 {
    100% {inset:0}
}
</style>
