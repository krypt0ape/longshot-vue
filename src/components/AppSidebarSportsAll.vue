<script setup>
import { computed, onMounted } from "vue";
import Async from "@/components/Async.vue";
import AppSidebarMenu from "@/components/AppSidebarMenu.vue";
import useApi from "@/composables/useApi";

const { data, refetch, loading } = useApi("get", "/sportsbook/sports");

const items = computed(() => {
	if (!data.value) return [];
	return [
		{
			icon: "fa-solid fa-futbol",
			title: "All Sports",
			children: data.value?.map((d) => ({
				title: d.name,
				to: d.slug,
			})),
		},
	];
});

onMounted(refetch);
</script>
<template>
	<div class="mb-4">
		<AppSidebarMenu :items="items" :loading="loading" :height="45"/>
	</div>
</template>
<style></style>
