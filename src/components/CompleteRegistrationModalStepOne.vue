<script setup>
import Async from "./Async.vue";
import NeutralButton from "./Buttons/NeutralButton.vue";
import PrimaryButton from "./Buttons/PrimaryButton.vue";
import Input from "@/components/Form/Input.vue";
import { ref } from "vue";
import useAsync from "@/composables/useAsync";
import { useUserStore } from "@/stores/useUserStore";

const form = ref({ nickname: "", signupCode: "", affiliateCode: "" });
const errors = ref({ nickname: "", signupCode: "", affiliateCode: "" });
const store = useUserStore();

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
	<div>
		<h2 class="text-3xl text-brand-lightGrey font-medium tracking-wide">
			Complete Signup
		</h2>
		<p>
			Please fill in the details below to complete the signup process. All the
			information provided is private & secure.
		</p>
		<div class="mt-6">
			<p class="text-brand-lightGrey">
				Username <span class="text-red-600">*</span>
			</p>
			<Input
				class="mt-1 w-full"
				placeholder=""
				v-model="form.nickname"
				:error="errors.nickname"
			/>
		</div>
		<div class="mt-6">
			<p class="text-brand-lightGrey">Signup Code</p>
			<Input
				class="mt-1 w-full"
				placeholder=""
				v-model="form.signupCode"
				:error="errors.signupCode"
			>
				<template #right>
					<NeutralButton class="mr-2">Check Code</NeutralButton>
				</template>
			</Input>
		</div>
		<div class="mt-10 mb-4 flex justify-end">
			<PrimaryButton
				type="button"
				@click="call"
				class="!w-full !py-4"
			>
				<Async :loading="loading" :error="error"> Get Started </Async>
			</PrimaryButton>
		</div>
	</div>
</template>
