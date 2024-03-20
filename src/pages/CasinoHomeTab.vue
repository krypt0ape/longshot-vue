<script setup>
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import CasinoGamesGrid from '@/components/CasinoGamesGrid.vue'

const route = useRoute();
const pageData = computed(()=>{
	switch(route.params.tab){
		case 'casino':
			return {
				filters: ['roulette', 'card', 'craps'],
				name: 'Casino',
				icon: "fa-solid fa-cards"
			}
		case 'slots':
			return {
				filters: ['slots'],
				name: 'Slots',
				icon: "fa-solid fa-slot-machine"
			}
		case 'games':
			return {
				filters: ['casual', 'crash', 'mines'],
				name: 'Games',
				icon: "fa-solid fa-gamepad"
			}
		case 'lottery':
			return {
				filters: ['lottery'],
				name: 'Lottery',
				icon: "fa-solid fa-gift"
			}
		case 'new-releases':
			return {
				filters: ['new-releases'],
				name: 'New Releases',
				icon: "fa-solid fa-rocket-launch"
			}
		default:
			return null
	}
})
</script>
<template>
	<div>
		<CasinoGamesGrid
			v-if="pageData"
			:icon="pageData.icon" 
			:name="pageData.name"
			:filters="pageData.filters"
			:limit="100"
		/>
		<!-- Providers -->
		<div class="pt-12">
			<CasinoProviders />
		</div>
	</div>
</template>