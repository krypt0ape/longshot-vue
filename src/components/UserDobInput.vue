<script setup>
import DatePicker from './Form/DatePicker.vue';

defineProps({
	error: String,
});

const model = defineModel({
	set(val) {
		return val.toISOString();
	}
});

const maxDate = (new Date()).setFullYear((new Date()).getFullYear() - 18)
const minDate = (new Date()).setFullYear((new Date()).getFullYear() - 100)
</script>
<template>
	<div>
		<p class="text-brand-lightGrey mb-1">
			Date of Birth <span class="text-red-600">*</span>
		</p>
		<DatePicker v-model="model"  class="col-span-6"
        :max-date="maxDate" :min-date="minDate" :error="error"
        input-class-name="date-input app-input text-brand-lightGrey ring-0 focus-visible:outline-none bg-brand-bodyBg border-brand-accentStroke border-solid border-2 text-white"
        hide-input-icon :disabled="loading" />
	</div>
</template>
