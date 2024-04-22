<script setup>
import AuthModal from "./AuthModal.vue";
import useAuthModals from "@/composables/useAuthModals";
import PrimaryButton from "./Buttons/PrimaryButton.vue";
import Async from "./Async.vue";
import useAsync from "@/composables/useAsync";
import useUserStore from "@/stores/useUserStore";

const { signoutModalOpen, toggleSignoutModal } = useAuthModals();
const userStore = useUserStore();

const {loading, error, call: signout} = useAsync(async () => {
	await userStore.signout();
	toggleSignoutModal();
});
</script>
<template>
	<AuthModal
		:show="signoutModalOpen"
		@close="toggleSignoutModal"
		:cross="true"
		class="max-w-lg"
	>
		<div class="mb-4">
			<div>
				<h2 class="text-3xl text-brand-lightGrey font-medium tracking-wide">
					Sign Out
				</h2>
				<p>Are you sure you want to Signout?</p>
			</div>
			<div class="mt-6 mb-4">
				<PrimaryButton type="button" @click="signout" class="!w-full !py-4">
					<Async :loading="loading" :error="error"> Sign Out </Async>
				</PrimaryButton>
			</div>
		</div>
	</AuthModal>
</template>
