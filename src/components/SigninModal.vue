<script setup>
import { ref } from "vue";
import AuthModal from "./AuthModal.vue";
import useAuthModals from "@/composables/useAuthModals";
import Input from "./Form/Input.vue";
import UserPasswordInput from "./UserPasswordInput.vue";
import PrimaryButton from "./Buttons/PrimaryButton.vue";
import AlternateAuthentication from "./AlternateAuthentication.vue";

const form = ref({
	username_email: "",
	password: "",
});

const error = ref("");

const { signinModalOpen, toggleSigninModal, toggleForgotPasswordModal } = useAuthModals();
</script>
<template>
	<AuthModal :show="signinModalOpen" @close="toggleSigninModal" :cross="true" class="max-w-lg">
		<div class="mb-4">
			<div>
				<h2 class="text-3xl text-brand-lightGrey font-medium tracking-wide">
					Sign In
				</h2>
				<p>Please fill in the details below to sign in to your account.</p>
			</div>
			<div class="mt-4 mb-4">
				<p class="text-brand-lightGrey">
					Email or Username <span class="text-red-600">*</span>
				</p>
				<Input class="mt-1 w-full" v-model="form.username_email" />
			</div>
			<UserPasswordInput v-model="form.password" />
			<div class="mt-2"> 
				<a @click="toggleForgotPasswordModal" class="hover:text-brand-lightGrey transition cursor-pointer">Forgot Password?</a>
			</div>
			<div class="mt-6 mb-4">
				<PrimaryButton type="button" @click="call" class="!w-full !py-4">
					<Async :loading="loading" :error="error">
						Sign In
					</Async>
				</PrimaryButton>
			</div>
			<AlternateAuthentication context="signin" />
		</div>
	</AuthModal>
</template>
