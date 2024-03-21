<script setup>
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
import NeutralButton from "@/components/Buttons/NeutralButton.vue";
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
			<PrimaryButton class="py-[16px] text-lg">Create an Account</PrimaryButton>
			<div class="flex items-center justify-center">
				<span class="bg-[#303D4B] h-[1px] w-[108px]">&nbsp;</span>
				<p class="px-6 text-brand-grey py-2">or</p>
				<span class="bg-[#303D4B] h-[1px] w-[108px]">&nbsp;</span>
			</div>
			<NeutralButton class="py-[16px] px-[60px] text-lg">Sign In</NeutralButton>
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
