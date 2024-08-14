<script setup>
import useAuthModals from "@/composables/useAuthModals";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
import AlternateAuthentication from "@/components/AlternateAuthentication.vue";

const {toggleLoginModal, toggleSignupModal} = useAuthModals();
</script>
<template>
	<div class="text-center relative z-50   lg:ml-[50px] sm:w-[350px] xl:w-[430px]">
		<div
			class="flex flex-col justify-center h-full w-full  px-4 py-8  hero-home-guest-bg lg:!bg-none lg:!border-none "
		>
			<div class="pb-4">
				<h1 class="uppercase text-5xl font-semibold">
					Going <span class="text-brand-green">Beyond</span> The Bet
				</h1>
				<p class="text-brand-lightGrey text-lg mt-1">Signup for a free account today</p>
			</div>
			<PrimaryButton @click="toggleSignupModal" class="py-[18px] text-lg">Create an Account</PrimaryButton>
			<AlternateAuthentication context="signup" class="mt-2"/>
		</div>
	</div>
</template>
<style>
.hero-home-guest-bg {
	border: 1px solid rgba(61, 75, 89, 0.5);
	background: linear-gradient(
		335deg,
		rgba(23, 31, 43, 0.7) 24.05%,
		rgba(44, 62, 78, 0.7) 71.46%
	);

}
</style>