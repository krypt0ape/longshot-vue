<script setup>
import Async from "@/components/Async.vue";
import useApi from "@/composables/useApi";
import { useRoute } from "vue-router";
import SportsEventMarketCard from "@/components/SportsEventMarketCard.vue";
import { find } from "lodash";
import { computed } from "vue";
import {eventName} from "@/utils/radarHelpers";

const route = useRoute();

const path = "/sportsbook/" + route.params.event + "/markets";
const { data, loading } = useApi("get", path);

</script>
<template>
	<div class="max-w-[850px] mx-auto mt-12 text-white">
		<Async :loading="loading">
				<div v-if="data">
					<!-- <pre>{{data.event}}</pre> -->
					<p class="text-3xl font-medium">{{ eventName(data.event) }} </p>
					<p class="text-xl mt-1">Status: {{ data.event.status}}</p>
					<div v-for="e in data.markets" :key="e.id">
						<SportsEventMarketCard :market="e"  :event="data.event"/>
					</div>
				</div>
			</Async>
	</div>
</template>
