<script setup>
import { onMounted, defineModel } from "vue";
import useApi from "@/composables/useApi";
import SportsCard from "@/components/SportsCard.vue";
import Async from "@/components/Async.vue";
const { data, refetch, loading } = useApi("get", "/sportsbook/sports");

onMounted(refetch);
const model = defineModel();
</script>

<template>
	<Async :loading="loading">
		<div v-if="data">
			<!-- <pre>{{data}}</pre> -->
			<div v-for="cat in data[0].categories" :key="cat.id">
				<div v-for="t in cat.tournaments" :key="t.id">
					<div v-for="event in t.sportEvents" :key="event.id">
						<RouterLink class="hover:text-brand-grey" :to="'/sports/' + data[0].slug + '/' + cat.slug + '/'+ t.slug + '/' + event.slug">{{ event.slug }}</RouterLink>	
					</div>
				</div>
			</div>
		</div>
	</Async>
</template>
