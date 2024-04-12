<script setup>
const props = defineProps({
	context: {
		required: true,
		type: String,
		validate(value) {
			return ["signup", "login"].includes(value);
		},
	},
});
</script>
<template>
	<div>
		<div class="flex items-center justify-center">
			<span class="bg-[#303D4B] h-[1px] w-[108px]">&nbsp;</span>
			<p class="px-6 text-brand-grey py-2">OR</p>
			<span class="bg-[#303D4B] h-[1px] w-[108px]">&nbsp;</span>
		</div>
		<div class="flex justify-center mt-2">
			<a class="auth-login-button" v-tippy="{ content: 'Login With Gmail', placement: 'top' }">
				<i class="fa-brands fa-google "></i>
			</a>
		</div>
		<div class="mt-2 text-brand-grey">
			<p v-if="context==='signup'">
				Already have an account? Login
			</p>
			<p v-if="context==='login'"> 
				Don’t have an account? Register an Account
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
	padding: 13px 16px;
	cursor: pointer;
	transition: background 0.3s;
}
.auth-login-button:hover {
	background: #273646;
}
</style>
