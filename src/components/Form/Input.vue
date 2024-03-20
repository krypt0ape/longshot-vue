<script setup>
import { onMounted, ref } from "vue";

defineProps({
	value: String,
	type: {
		default: "text",
	},
	placeholder: {},
	error: String,
	disabled: {
		default: false,
		type: Boolean,
	},
});

defineEmits(["update"]);

const input = ref(null);

onMounted(() => {
	if (input.value.hasAttribute("autofocus")) {
		input.value.focus();
	}
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
	<div class="relative">
		<div v-if="$slots.left" class="absolute left-2 top-0 flex items-center h-full">
			<slot name="left" ></slot>
		</div>
		<input
			ref="input"
			:type="type"
			autocomplete="one-time-code"
			:class="[
				'input text-brand-lightGrey ring-0 focus-visible:outline-none', 
				disabled ? 'cursor-not-allowed  text-brand-darkerGrey opacity-80' : '',
				$slots.left ? 'pl-[90px]' : 'pl-4'
			]"
			:value="value"
			:placeholder="placeholder"
			:disabled="disabled"
			v-bind="$attrs"
			@input="$emit('update', $event.target.value)"
		/>
		<div class="absolute top-0 h-[51px] flex items-center right-1">
			<slot />
		</div>
		<div
			v-if="error"
			class="text-red-500 font-medium pt-2 bg-dark rounded-b-lg"
		>
			<p><i class="fa-solid fa-times mr-2"></i>{{ error }}</p>
		</div>
	</div>
</template>
<style>
.input {
	/* background: linear-gradient(137.76deg, #303650 26.98%, #24293c 86.43%),
		linear-gradient(0deg, #303750, #303750);
	border: 1px solid #303750;
	box-shadow: 0px 2px 3px 0px #00000040; */
	border-radius: 5px;
border: 1px solid #303750;
background: #24293C;
box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
	padding: 16px 20px 16px 20px;
	border-radius: 5px;
}
.input::placeholder {
	color: #93a3af;
}
</style>
