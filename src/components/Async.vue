<script setup>
import { useNotification } from "@kyvg/vue3-notification";
import { computed, watch , ref} from "vue";
const props = defineProps({
	loading: {},
	error: {
		default: false,
	},
	errorType: {
		default: null,
		validator(value) {
			// The value must match one of these strings
			return ["notification", "message", null].includes(value);
		},
	},
	showTickOnSuccess: {
		type: Boolean,
		default: false,
	}
});
const { notify } = useNotification();
const error = computed(()=>{
	if(! props.error) return false;
	if(props.error.message) return props.error.message;
	return props.error;
})
watch(error, (newError) => {
	if (newError && props.errorType === "notification") {
		notify({
			type:'error',
			title: "Error",
			text: newError,
			duration: 100000,
		});
	}
});

const loading = computed(()=>{
	return props.loading;
})

const sucess = ref(false);

watch(loading, (newVal, oldVal ) => {
	if(newVal === false && oldVal === true && ! props.error && props.showTickOnSuccess){
		sucess.value = true;
		setTimeout(() => {
			sucess.value = false;
		}, 2000);
	}
})
</script>
<template>
	<span>
		<i v-if="props.loading" class="fa-solid fa-spinner-third fa-spin"></i>
		<i v-else-if="sucess" class="fa-solid fa-check"></i>
		<p v-else-if="props.error && errorType === 'message'">{{ props.error }}</p>
		<slot v-else />
	</span>
</template>
