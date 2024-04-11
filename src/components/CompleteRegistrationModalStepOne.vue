<script setup>
import NeutralButton from "./Buttons/NeutralButton.vue";
import PrimaryButton from "./Buttons/PrimaryButton.vue";
import Input from "@/components/Form/Input.vue";
import { ref } from "vue";

const form = ref({ acceptedTerms: false, nickname: "" });
	//form.value.nickname = store.user.nickname;
const submit = async (s) => {
	if (valid(s)) {
		step.value += s;
	}

	if (step.value === 3) {
		await store.completeRegistration({
			...form.value,
			affiliateCode: "",
			signupCode: "",
		});
		router.go();
	}
};

const valid = (s) => {
	error.value = "";

	if (s < 0) {
		return true;
	}

	switch (step.value + s) {
		case 2:
			error.value =
				form.value.nickname.length > 3 && form.value.nickname.length <= 200
					? ""
					: "Nickname is required";
			break;
		case 3:
			error.value = form.value.acceptedTerms
				? ""
				: "Please read terms and conditions in full and accept to proceed";
			break;
		default:
			throw new Error(step.value + s);
	}

	return !Boolean(error.value.length);
};
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
			<p class="text-brand-lightGrey">Username</p>
			<Input
				class="mt-1 w-full"
				placeholder="Please choose a username *"
				v-model="form.nickname"
				:error="error"
			/>
		</div>
		<div class="mt-6">
			<p class="text-brand-lightGrey">Signup Code</p>
			<Input
				class="mt-1 w-full"
				placeholder="Enter Signup Code"
				v-model="form.signupCode"
				:error="error"
			>
				<template #right>
					<NeutralButton class="mr-2">Check Code</NeutralButton>
				</template>
			</Input>
		</div>
		<div class="mt-10 mb-4 flex justify-end">
			<PrimaryButton type="button" @click="() => submit(1)" class="!w-full !py-4">
				Get Started
			</PrimaryButton>
		</div>
	</div>
</template>
