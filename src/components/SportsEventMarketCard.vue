<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import SportsEventMarket from "@/components/SportsEventMarket.vue";

defineProps({
	market: {
		type: Object,
		required: true,
	},
});
</script>
<template>
	<div class="sports-event-market-card my-6">
		<Disclosure v-slot="{ open }">
			<DisclosureButton class="px-[32px] py-[15px]  w-full">
				<div class="flex justify-between items-center">
					<p class="font-medium text-lg">{{ market.name }}</p>
					<i :class="[open ? 'fa-chevron-down' : 'fa-chevron-left', 'fa-solid  text-white']"></i>
				</div>
			</DisclosureButton>
			<DisclosurePanel static class="text-gray-500 px-[20px] py-[20px] sports-event-market-card-panel">
				<SportsEventMarket :market="market" />
				<!-- <pre>{{ market }}</pre> -->
			</DisclosurePanel>
		</Disclosure>
	</div>
</template>
<style>
.sports-event-market-card {
	border-radius: 5px;
	border: 1px solid rgba(61, 75, 89, 0.5);
	background: linear-gradient(335deg, #171f2b 24.05%, #2c3e4e 61.46%);
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
.sports-event-market-card-panel {
	border-top: 1px solid rgba(61, 75, 89, 0.5);
}
</style>
