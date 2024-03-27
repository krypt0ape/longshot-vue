<script setup>
import PageHeader from '../components/PageHeader.vue';
import GlowGreen from "@/components/GlowGreen.vue";
import {computed} from 'vue';
import {  useRoute } from 'vue-router';
import VerticalMenu from '../components/VerticalMenu.vue';

const route = useRoute();
const items = computed(()=>{
	return [
		{
			title: 'Overview',
			to: '/affiliate/overview',
			active: route.path.startsWith('/affiliate/overview')
		},
		{
			title: 'Rentention Program',
			to: '/',
			active: route.path.startsWith('/affiliate/retenion-program')
		},
		{
			title: 'Comission',
			to: '/',
			active: route.path.startsWith('/affiliate/retenion-program')
		},
		{
			title: 'Funds',
			to: '/',
			active: route.path.startsWith('/affiliate/retenion-program')
		},
		{
			title: 'Referred Users',
			to: '/',
			active: route.path.startsWith('/affiliate/retenion-program')
		},
		{
			title: 'Campaigns',
			to: '/',
			active: route.path.startsWith('/affiliate/retenion-program')
		},
	]
});
</script>
<template>
	<div>
		<PageHeader>Affiliate Program</PageHeader>
		<GlowGreen />
		<div class="max-w-7xl mx-auto flex mt-8">
			<div class="w-[290px]">
				<VerticalMenu 
					:items="items"
				/>
			</div>
			<div class="flex-1">
				<slot />
			</div>
		</div>
	</div>
</template>