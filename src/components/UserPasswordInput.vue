<script setup>
import Input from "@/components/Form/Input.vue";
import { ref } from "vue";

defineProps({
	error: String,
});

const model = defineModel();

const checked = ref(null);

const check = () => {
	if (model.value === "") {
		checked.value = false;
		return;
	}
	checked.value = true;
};
</script>
<template>
	<div>
		<p class="text-brand-lightGrey">
			Password <span class="text-red-600">*</span>
		</p>
		<Input
			class="mt-1 w-full"
			v-model="model"
			:error="error"
			@blur="check"
		/>
	</div>
</template>
