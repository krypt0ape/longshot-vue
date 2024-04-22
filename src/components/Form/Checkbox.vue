<script setup>
import { ref } from "vue";


const model = defineModel();
const el = ref(null);

const handleClick = () => {
	el.value.click();
};
</script>
<template>
	<div>
		<div
			class="flex cursor-pointer justify-center h-full no-select items-center"
			@click="handleClick"
		>
			<i
				v-if="model"
				class="fa-solid fa-square-check text-brand-lightGrey text-2xl"
			></i>
			<i v-else class="far fa-square text-brand-lightGrey text-2xl"></i>
			<slot />
		</div>
		<input ref="el" type="checkbox" class="hidden" v-model="model" />
	</div>
</template>
