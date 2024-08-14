<script setup>
import Input from "@/components/Form/Input.vue";
import { ref, computed } from "vue";

defineProps({
	error: String,
});

const model = defineModel();
const visible = ref(false);
const type = computed(()=>{
	return visible.value ? 'text' : 'password';
})

const checkPassword = () => {}
</script>
<template>
	<div>
		<p class="text-brand-lightGrey">
			Password <span class="text-red-600">*</span>
		</p>
		<Input
			name="password"
			class="mt-1 w-full"
			:type="type"
			v-model="model"
			:error="error"
			autocomplete="current-password"
			@blur="checkPassword"
		>
			<div class="pr-3">
				<a class="cursor-pointer" v-if="visible" @click="visible = ! visible"><i class="fa-solid fa-eye-slash" /></a>
				<a class="cursor-pointer" v-else  @click="visible = ! visible"><i class="fa-solid fa-eye" /></a>
			</div>
		</Input>
	</div>
</template>
