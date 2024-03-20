<script setup>
import { ref } from "vue";
const open = ref(false);
const toggle = () => {
	open.value = !open.value;
};
</script>
<template>
	<div class="sports-betting-info relative overflow-hidden   mb-[30px]">
		<div :class="[open ? 'h-full pb-[100px]' : 'h-[300px]', 'overflow-hidden pt-[50px] px-[50px] relative z-10 ']">
			<slot />
		</div>
		<div class="flex justify-center  absolute left-0 right-0 bottom-[30px] z-30 ">
			<ButtonsPrimaryButton class="" @click="toggle">{{
				open ? "Show Less" : "Read More"
			}}</ButtonsPrimaryButton>
		</div>
		<div
			v-if="!open"
			class="sports-betting-info-overlay absolute left-0 z-20 right-0 bottom-0 h-[250px]"
		>
			&nbsp;
		</div>
	</div>
</template>
<style>
.sports-betting-info {
	border-radius: 10px;
	background: #0d1824;
}
.sports-betting-info-overlay {
	background: linear-gradient(180deg, rgba(13, 24, 36, 0) 0%, #030d16 100%);
}
</style>
