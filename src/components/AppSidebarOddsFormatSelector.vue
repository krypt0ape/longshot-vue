<script setup>
import { computed } from "vue";
import useFormatOdds from "@/composables/useFormatOdds";
import AppSidebarMenu from "@/components/AppSidebarMenu.vue";

const oddsFormat = useFormatOdds();

const items = computed(()=>{
	return [
		{
			icon: "fa-solid fa-percentage",
			title: "Odds (" +  oddsFormat.oddsFormat.value.charAt(0).toUpperCase() + oddsFormat.oddsFormat.value.slice(1) + ")",
			children: [
				{
					title: "Decimal",
					action: ()=>{oddsFormat.setOddsFormat("decimal")},
					icon: oddsFormat.oddsFormat.value === "decimal" ? "fa-regular fa-circle-dot" : "fa-regular fa-circle",
				},
				{
					title: "Fractional",
					action: ()=>{oddsFormat.setOddsFormat("fractional")},
					icon: oddsFormat.oddsFormat.value === "fractional" ? "fa-regular fa-circle-dot" : "fa-regular fa-circle",
				},
				{
					title: "American",
					action: ()=>{oddsFormat.setOddsFormat("american")},
					icon: oddsFormat.oddsFormat.value === "american"? "fa-regular fa-circle-dot" : "fa-regular fa-circle",
				},
				{
					title: "Indonesian",
					action: ()=>{oddsFormat.setOddsFormat("indonesian")},
					icon: oddsFormat.oddsFormat.value === "indonesian" ? "fa-regular fa-circle-dot" : "fa-regular fa-circle",
				},
				{
					title: "Hong Kong",
					action: ()=>{oddsFormat.setOddsFormat("hongkong")},
					icon: oddsFormat.oddsFormat.value === "hongkong" ? "fa-regular fa-circle-dot" : "fa-regular fa-circle",
				},
				{
					title: "Malaysian",
					action: ()=>{oddsFormat.setOddsFormat("malaysian")},
					icon: oddsFormat.oddsFormat.value === "malaysian" ? "fa-regular fa-circle-dot" : "fa-regular fa-circle",
				},
			]
		}
	]
})
</script>
<template>
	<div class="mb-4">
		<AppSidebarMenu :items="items" :height="45" />
	</div>
</template>