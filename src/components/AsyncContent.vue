<script setup>
import LoaderBar from "./LoaderBar.vue";
import { computed } from "vue";

const props = defineProps({
	loading: Boolean,
	error: String,
	type: {
		type: String,
		default: "bar",
		validator: (value) => {
			return ["bar", "spinner"].includes(value);
		},
	},
	showError: {
		type: String,
		default: "inline",
		validator: (value) => {
			return ["inline", "toast"].includes(value);
		},
	},
});

// TODO handle toast
// TODO add spinner type

const errorMessage = computed(() => {
	if (props.error.response && props.error.response.data && props.error.response.data.message) {
		return props.error.response.data.message;
	}
	return props.error.message;
});
</script>
<template>
	<div>
		<slot v-if="error && $slots.error" name="error" />
		<div
			v-else-if="error && showError == 'inline'"
			class="bg-red-500 opacity-75 rounded-xl m-12 text-white p-4"
		>
			<p class="text-lg">{{ errorMessage }}</p>
			<p class="text-brand-lightGrey">Please refresh the page, if the error persits please contact support.</p>
		</div>
		<!-- <template #loader /> will prevent any loader being used -->
		<slot v-else-if="loading && $slots.loader" name="loader" />
		<div v-else-if="loading">
			<LoaderBar v-if="type === 'bar'" />
		</div>

		<slot v-else />
	</div>
</template>
