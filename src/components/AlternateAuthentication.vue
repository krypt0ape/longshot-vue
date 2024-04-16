<script setup>
import useAuthModals from '@/composables/useAuthModals';

const props = defineProps({
	context: {
		required: true,
		type: String,
		validate(value) {
			return ["signup", "signin"].includes(value);
		},
	},
});

const { toggleSigninModal, toggleSignupModal } = useAuthModals();
</script>
<template>
	<div>
		<div class="flex items-center justify-center">
			<span class="bg-[#303D4B] h-[1px] w-[108px]">&nbsp;</span>
			<p class="px-6 text-brand-grey py-2">OR</p>
			<span class="bg-[#303D4B] h-[1px] w-[108px]">&nbsp;</span>
		</div>
		<div class="flex justify-center mt-2 space-x-4">
			<a class="auth-login-button" v-tippy="{ content: 'Login With Gmail', placement: 'top' }">
				<i class="fa-brands fa-google "></i>
			</a>
			<a class="auth-login-button" v-tippy="{ content: 'Login With Facebook', placement: 'top' }">
				<i class="fa-brands fa-facebook-f "></i>
			</a>
			<a class="auth-login-button" v-tippy="{ content: 'Login With Twitch', placement: 'top' }">
				<i class="fa-brands fa-twitch "></i>
			</a>
			<a class="auth-login-button" v-tippy="{ content: 'Login With Steam', placement: 'top' }">
				<i class="fa-brands fa-steam "></i>
			</a>
		</div>
		<div class="mt-4 text-brand-grey text-center">
			<p v-if="context==='signup'">
				Already have an account? <a class="cursor-pointer hover:text-white transition" @click="toggleSigninModal">Sign In</a>
			</p>
			<p v-if="context==='signin'"> 
				Don’t have an account? <a class="cursor-pointer hover:text-white transition" @click="toggleSignupModal">Register an Account</a>
			</p>
		</div>
	</div>
</template>
<style scoped>
.auth-login-button {
	border-radius: 5px;
	border: 1px solid var(--Accent-Stroke, #273646);
	background: #182330;
	box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
	height: 40px;
	width: 40px;
	cursor: pointer;
	transition: background 0.3s;
	display: flex;
	justify-content: center;
	align-items: center;
}
.auth-login-button:hover {
	background: #273646;
}
</style>
