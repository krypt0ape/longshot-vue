<script setup>
import Async from "@/components/Async.vue";
import useApi from "@/composables/useApi";
import { useRoute } from "vue-router";
import SportsEventMarketCard from "@/components/SportsEventMarketCard.vue";
const route = useRoute();

const path = "/sportsbook/" + route.params.event + "/markets";
const { data, loading } = useApi("get", path);
</script>
<template>
	<div class="max-w-7xl mx-auto">
		<div class="text-white pl-12 mt-12 max-w-[800px]">
			<Async :loading="loading">
				<div v-if="data">
					<div v-for="e in data.markets">
						<!-- <pre>{{e}}</pre> -->
						<SportsEventMarketCard :market="e"  />
					</div>
				</div>
			</Async>
		</div>
	</div>
</template>
