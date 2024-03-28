<script setup>
defineProps({
	height: Number
})
</script>
<template>
	<div  :style="{height: height + 'px'}" class="animate-pulse bg-[#273646] rounded-lg w-full">&nbsp;</div>
</template>