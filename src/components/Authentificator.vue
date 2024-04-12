<script setup>
import PrimaryButton from "./Buttons/PrimaryButton.vue";
import NeutralButton from "./Buttons/NeutralButton.vue";
import useAuthModals from "@/composables/useAuthModals";

defineProps({
	showControls: {
		type: Boolean,
		default: true,
	},
});


const  {toggleLoginModal, toggleSignupModal} = useAuthModals();
</script>
<template>
	<slot v-if="isAuthenticated" />
	<div v-else-if="showControls" v-bind="$attrs" class="flex items-center gap-x-4">
		<NeutralButton @click="toggleLoginModal">Sign in</NeutralButton>
		<PrimaryButton @click="toggleSignupModal">Register</PrimaryButton>
	</div>
</template>
@/composables/useAuthModals