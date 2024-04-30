<script setup></script>
<template>
	<div class="grid grid-cols-12 px-[24px] py-[21px] border-t border-t-[#426575]">
		<div class="col-span-5 grid grid-cols-5">
			<div class="col-span-4">
				<div class="flex justify-between items-center">
					<div class="flex space-x-4 items-center">
						<div
							class="sports-live-events-card-live-badge px-[8px] py-[2px] font-medium"
						>
							<p>Live</p>
						</div>
						<p class="font-bold text-lg">84'</p>
						<p class="text-brand-darkerGrey">Second Half</p>
					</div>
					<div class="flex space-x-4">
						<IconsTvPlay />
						<IconsChartLineUp />
					</div>
				</div>
				<div
					class="flex justify-between items-center border-b border-[#426575] pb-[10px] mb-[10px] mt-[25px]"
				>
					<h4 class="text-white font-bold">PFC Ludogorets 1945 Razgrad</h4>
					<p class="sports-live-events-card-badge py-[4px] px-[16px]">1</p>
				</div>
				<div class="flex justify-between items-center">
					<h4 class="text-white font-bold">PFC Cherno More Varna</h4>
					<p class="sports-live-events-card-badge py-[4px] px-[16px]">1</p>
				</div>
			</div>
		</div>
		<div class="col-span-7 grid grid-cols-7 space-x-6">
			<div class="col-span-6">
				<p class="text-brand-darkerGrey font-medium text-center pt-[10px] pb-[5px]">
					Asian Total
				</p>
			</div>
			<div
				class="sports-live-events-card-odds-card px-[24px] py-[21px] col-span-3 flex items-center"
			>
				<div>
					<p class="text-brand-darkerGrey">Over 1.5</p>
					<p class="brand-primary-green-gradient-text font-bold">2.9</p>
				</div>
			</div>

			<div
				class="sports-live-events-card-odds-card px-[24px] py-[21px] col-span-3 flex items-center"
			>
				<div>
					<p class="text-brand-darkerGrey">Under 1.5</p>
					<p class="brand-primary-green-gradient-text font-bold">1.2</p>
				</div>
			</div>
			<div class="col-span-1 flex items-center">
				<RouterLink>+28</RouterLink>
			</div>
		</div>
	</div>
</template>
<style scoped>
.sports-live-events-card-live-badge {
	border-radius: 5px;
	background: linear-gradient(180deg, #ff2525 0%, #aa3535 100%);
}
.sports-live-events-card-odds-card {
	border-radius: 10px;
	border: 1px solid #303d4b;
	background: #0d1824;
}
.sports-live-events-card-badge {
	border-radius: 5px;
	background: #0d1824;
}
</style>
