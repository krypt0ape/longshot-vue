<script setup>
import Input from "@/components/Form/Input.vue";
import {ref} from "vue";

defineProps({
	error: String
});

const model = defineModel();

const emailChecked = ref(null);

const checkEmail = () => {
	if (model.value === "") {
		emailChecked.value = false;
		return;
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	emailChecked.value = emailRegex.test(model.value);
};
</script>
<template>
	<div>
		<p class="text-brand-lightGrey">
			Email <span class="text-red-600">*</span>
		</p>
		<Input
			class="mt-1 w-full"
			v-model="model"
			:error="error"
			@blur="checkEmail"
		>
		</Input>
	</div>
</template>
