<script setup>
import Input from "@/components/Form/Input.vue";
import { ref } from "vue";

defineProps({
	error: String,
});

const model = defineModel();
</script>
<template>
	<div class="grid grid-cols-2">
		<div>
			<p class="text-brand-lightGrey">Signup Code</p>
			<Input class="mt-1 w-full" v-model="model" :error="error">
				<template #right>
					<NeutralButton class="mr-1">Check Code</NeutralButton>
				</template>
			</Input>
		</div>
		<div class="flex items-end pb-4">$10 Off first bet</div>
	</div>
</template>
