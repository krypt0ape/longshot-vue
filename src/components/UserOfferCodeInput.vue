<script setup>
import Input from "@/components/Form/Input.vue";
import { ref } from "vue";

defineProps({
	error: String,
});

const model = defineModel();
</script>
<template>
	<div>
		<p class="text-brand-lightGrey">Signup Code</p>
		<Input class="mt-1 w-full" v-model="model" :error="error">
			<template #right>
				
			</template>
		</Input>
	</div>
</template>
