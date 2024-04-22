<script setup>
import ProgressBar from "@/components/ProgressBar.vue";
</script>
<template>
	<div>
		<p class="max-w-[300px]  text-brand-grey my-2">The more you play the more you will progress your VIP Status!</p>
		<div class="pt-4">
			<div class="flex justify-between text-lg font-medium">
				<div class="flex items-center space-x-4 text-brand-grey ">
					<i class="fa-regular fa-star"></i>
					<p>None</p>
				</div>
				<div class="flex items-center space-x-4 text-[#C1AA68]">
					<p>Bronze</p>
					<i class="fa-regular fa-star"></i>
				</div>
			</div>
			<div class="pt-4">
				<ProgressBar fillPercent="30" />
			</div>
			<div class="flex justify-between mt-5">
				<div>
					<p class="text-brand-grey"><i class="fa-solid fa-circle-caret-right mr-3"></i>Your VIP Progress</p>
				</div>
				<div>
					<p class="text-brand-grey font-semibold">66.3%</p>
				</div>
			</div>
		</div>
	</div>
</template>