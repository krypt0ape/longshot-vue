<script setup>
import Async from "./Async.vue";
import NeutralButton from "./Buttons/NeutralButton.vue";
import PrimaryButton from "./Buttons/PrimaryButton.vue";
import { ref } from "vue";
import useAsync from "@/composables/useAsync";
import useUserStore from "@/stores/useUserStore";
import AuthModal from "./AuthModal.vue";
import UserEmailInput from "./UserEmailInput.vue";
import UserPasswordInput from "./UserPasswordInput.vue";
import UserUsernameInput from "./UserUsernameInput.vue";
import UserDobInput from "./UserDobInput.vue";
import UserOfferCodeInput from "./UserOfferCodeInput.vue";
import useAuthModals from "@/composables/useAuthModals";
import AlternateAuthentication from "./AlternateAuthentication.vue";
import Checkbox from "./Form/Checkbox.vue";

const form = ref({
	email: "",
	password: "",
	dob: "",
	username: "",
	signupCode: "",
	affiliateCode: "",
	acceptMarketingEmails: false,
});

const errors = ref({
	username: "",
	signupCode: "",
	affiliateCode: "",
	email: "",
});

const store = useUserStore();

const { signupModalOpen, toggleSignupModal } = useAuthModals();

const { loading, error, call } = useAsync(async () => {
	if (!form.value.nickname) {
		errors.value.nickname = "* Required";
		return;
	}

	errors.value = { nickname: "", signupCode: "", affiliateCode: "" };

	await store.completeRegistration(form.value);
});
</script>
<template>
	<AuthModal :show="signupModalOpen" @close="toggleSignupModal">
		<template #header>
			<p class="font-semibold">Step 1/2</p>
			<p class="font-medium text-sm">Fill out your details</p>
		</template>
		<div class="mb-4">
			<h2 class="text-3xl text-brand-lightGrey font-medium tracking-wide">
				Create an Account
			</h2>
			<p>Please fill in the details below to create your account.</p>
			<div class="grid grid-cols-2 gap-6 mt-4">
				<UserEmailInput v-model="form.email" :error="errors.email" />
				<UserPasswordInput v-model="form.password" :error="errors.password" />
				<UserUsernameInput v-model="form.username" :error="errors.username" />
				<UserDobInput v-model="form.dob" :error="errors.dob" />
				<UserOfferCodeInput
					v-model="form.signupCode"
					:error="errors.signupCode"
				/>
			</div>
			<Checkbox v-model="form.acceptMarketingEmails">
				<p class="ml-2 text-brand-grey text-sm mb-1">
					Receive Offers & Promotions
				</p>
			</Checkbox>
			<div class="mt-10 mb-4">
				<PrimaryButton type="button" @click="call" class="!w-full !py-4">
					<Async :loading="loading" :error="error">
						Play Now <i class="fa-solid fa-right"></i
					></Async>
				</PrimaryButton>
			</div>

			<AlternateAuthentication context="signup" />
		</div>
	</AuthModal>
</template>
