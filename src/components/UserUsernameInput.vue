<script setup>
import Input from "@/components/Form/Input.vue";
import {ref} from "vue";

const props = defineProps({
	error: String
});

const model = defineModel();

const usernameChecked = ref(null);

const checkUsername = () => {};
</script>
<template>
	<div>
		<p class="text-brand-lightGrey">
			Username <span class="text-red-600">*</span>
		</p>
		<Input
			class="mt-1 w-full"
			v-model="model"
			:error="error"
			@blur="checkUsername"
		/>
	</div>
</template>
