<script setup>
import CasinoGamesList from "@/components/CasinoGamesList.vue";
import CasinoProviders from "@/components/CasinoProviders.vue";
</script>

<template>
	<div>
		<!-- Popular -->
		<CasinoGamesList
			name="Popular"
			icon="fa-solid fa-fire"
			:filters="['popular']"
		/>
		<!-- Slots -->
		<CasinoGamesList
			name="Slots"
			icon="fa-solid fa-slot-machine"
			:filters="['slots']"
		/>
		<!-- Games -->
		<CasinoGamesList
			name="Games"
			icon="fa-solid fa-game-board"
			:filters="['casual', 'crash', 'mines']"
		/>
		<!-- Providers -->
		<CasinoProviders />
		<!-- Casino -->
		<CasinoGamesList
			name="Casino"
			icon="fa-solid fa-cards"
			:filters="['roulette', 'card', 'craps']"
		/>
		<!-- New Releases -->
		<CasinoGamesList name="New Releases" icon="fa-solid fa-rocket-launch" :filters="['new-releases']" />
	</div>
</template>
