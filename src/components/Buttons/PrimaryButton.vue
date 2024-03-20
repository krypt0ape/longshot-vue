<script setup>
import BaseButton from "./BaseButton.vue";
</script>
<template>
	<BaseButton class="primary-btn"><slot /></BaseButton>
</template>
<style>
.primary-btn {
	border-radius: 5px;
border-top: 1px solid #68D663;
/* border-right: 1px solid #68D663;
border-left: 1px solid #68D663; */
background: linear-gradient(180deg, #4FA630 0%, #205E1D 100%);
box-shadow: 0px 2px 0px 0px rgba(255, 255, 255, 0.10) inset, 0px 1px 0px 0px rgba(0, 0, 0, 0.20);
}
</style>
