<script setup>
import { computed } from "vue";
import useApi from "@/composables/useApi";
import CasinoGamesListItem from "@/components/CasinoGamesListItem.vue";
import useAsyncApi from "@/composables/useAsyncApi";
import { ref } from "vue";
import NeutralButton from "@/components/Buttons/NeutralButton.vue";
import ProgressBar from "./ProgressBar.vue";

const props = defineProps({
	name: String,
	icon: String,
	filters: Object,
	sort: Object,
	limit: { type: Number, default: 21 },
	offset: { type: Number, default: 0 },
});

const options = computed(() => ({
	filters: props.filters,
	limit: props.limit,
	sort: props.sort ? props.sort : { createdAt: "DESC" },
}));

const { data, refetch, loading } = useApi("post", "/game-type/list", {
	data: options.value,
});

const { call: toggleFavourite } = useAsyncApi("POST", "/game-type/favourite");

const favourite = async (identifier) => {
	await toggleFavourite(identifier);
	refetch(options.value);
};

const isMore = computed(() => {
	if (!data.value) return false;
	return data.value.count > data.value.rows.length;
});

const fillPercent = computed(() => {
	if (!data.value) return 0;
	return (data.value.rows.length / data.value.count) * 100;
});

const loadMore = () => {
	emit("update:limit", options.value.limit + 20);
	refetch(options.value);
};

const emit = defineEmits(["update:limit"]);
defineExpose({ refetch: () => refetch(options.value) });
</script>

<template>
	<div>
		<div v-if="loading" class="flex  flex-wrap gap-6 ">
			<div
				v-for="i in 21"
				:key="i"
				class="rounded-xl animate-pulse bg-[#273646] h-[207px] w-[155px]"
			>
				&nbsp;
			</div>
		</div>
		<div v-else class="flex flex-wrap gap-6">
			<CasinoGamesListItem
				v-for="gameType in data?.rows"
				:key="gameType.identifier"
				:game-type="gameType"
				@favourite="() => favourite(gameType.identifier)"
			/>
		</div>

		<div class="mx-auto max-w-[250px] pt-6 text-center">
			<div v-if="data" class="mx-auto mt-8 text-brand-grey">
				<div class="pb-2">
					<ProgressBar :fill-percent="fillPercent" />
				</div>
				<p class="my-4 text-lg">
					Displaying {{ data.rows.length }} of {{ data.count }} games
				</p>
			</div>
			<div class="text-center pt-2">
				<Async :loading="loading" :error="error">
					<NeutralButton v-if="isMore" @click="loadMore" class="!px-14 !py-5"
						>Load More</NeutralButton
					>
				</Async>
			</div>
		</div>
	</div>
</template>
