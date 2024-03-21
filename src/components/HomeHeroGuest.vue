<script setup>
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
import NeutralButton from "@/components/Buttons/NeutralButton.vue";
</script>
<template>
	<div class="py-[60px] text-center ml-[120px]">
		<div class="mr-[80px] flex flex-col space-y-4 max-w-[395px]">
			<div class="pb-2">
				<h1 class="uppercase text-5xl font-semibold">
					Going <span class="text-brand-green">Beyond</span> The Bet
				</h1>
				<p class="text-brand-grey mt-1">Signup for a free account today</p>
			</div>
			<PrimaryButton class="py-[16px] text-lg">Create an Account</PrimaryButton>
			<div class="flex items-center justify-center">
				<span class="bg-[#303D4B] h-[1px] w-[108px]">&nbsp;</span>
				<p class="px-6 text-brand-grey">or</p>
				<span class="bg-[#303D4B] h-[1px] w-[108px]">&nbsp;</span>
			</div>
			<NeutralButton class="py-[16px] px-[60px] text-lg">Sign In</NeutralButton>
		</div>
	</div>
</template>
