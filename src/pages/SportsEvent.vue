<script setup>
import Async from "@/components/Async.vue";
import useApi from "@/composables/useApi";
import { useRoute } from "vue-router";
const route = useRoute();

const path = "/sportsbook/" + route.params.event + "/markets";
const { data, loading } = useApi("get", path);
</script>
<template>
	<div class="text-white pl-12 mt-12">
		<Async :loading="loading">
			<div v-if="data">
				<div v-for="e in data">
					<p>{{e.name}}</p>
					<div v-for="l in e.marketLines">
						<pre>{{ l }}</pre>
					</div>
				</div>
			</div>
		</Async>
	</div>
</template>
