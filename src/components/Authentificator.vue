<script setup>
import PrimaryButton from "./Buttons/PrimaryButton.vue";
import NeutralButton from "./Buttons/NeutralButton.vue";
import useAuthModals from "@/composables/useAuthModals";
import useUserStore from "@/stores/useUserStore";

defineProps({
	showControls: {
		type: Boolean,
		default: true,
	},
});

const userStore = useUserStore();

const  {toggleSigninModal, toggleSignupModal} = useAuthModals();
</script>
<template>
	<slot v-if="userStore.user" />
	<div v-else-if="showControls" v-bind="$attrs" class="flex items-center gap-x-4">
		<NeutralButton @click="toggleSigninModal">Sign in</NeutralButton>
		<PrimaryButton @click="toggleSignupModal">Register</PrimaryButton>
	</div>
</template>
@/composables/useAuthModals