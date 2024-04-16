<script setup>
import AuthModal from "./AuthModal.vue";
import useAuthModals from "@/composables/useAuthModals";
import PrimaryButton from "./Buttons/PrimaryButton.vue";
import NeutralButton from "./Buttons/NeutralButton.vue";
import Input from "./Form/Input.vue";
import { ref } from "vue";

const { forgotPasswordModalOpen, toggleForgotPasswordModal, toggleSigninModal } = useAuthModals();

const username_email = ref("");

</script>
<template>
<AuthModal :show="forgotPasswordModalOpen" @close="toggleForgotPasswordModal" :cross="true" class="max-w-lg">
	<div class="mb-4">
			<div>
				<h2 class="text-3xl text-brand-lightGrey font-medium tracking-wide">
					Forgot Password
				</h2>
				<p>
					Enter username or email below. If it exists in our database we will send a reset password email to the account.
				</p>
			</div>
			<div class="mt-4 mb-4">
				<p class="text-brand-lightGrey">
					Email or Username <span class="text-red-600">*</span>
				</p>
				<Input class="mt-1 w-full" v-model="username_email" />
			</div>
			<div class="mt-10 mb-4 grid grid-cols-5 space-x-8">
				<div>
					<NeutralButton @click="toggleSigninModal" class="!w-full !py-4"
						><i class="fa-solid fa-arrow-left mr-2"></i>Back</NeutralButton
					>
				</div>
				<div class="col-span-4">
					<PrimaryButton type="button" @click="call" class="!w-full !py-4">
						<Async :loading="loading" :error="error">
							Reset Password
						</Async>
					</PrimaryButton>
				</div>
			</div>
		</div>
</AuthModal>
</template>