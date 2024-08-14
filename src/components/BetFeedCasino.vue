<script setup>
import PrimaryTab from "@/components/Tabs/PrimaryTab.vue";
import { ref, computed } from "vue";
import BetFeedTableCasino from "@/components/BetFeedTableCasino.vue";
import useUserStore from "@/stores/useUserStore";

const userStore = useUserStore();
const active= ref("allbets");

const tabs = computed(() => {
	return [
		{
			title: "My Bets",
			active: active.value === "mybets",
			action: () => (active.value = "mybets"),
		},
		{
			title: "All Bets",
			active: active.value === "allbets",
			action: () => (active.value = "allbets"),
		},
		{
			title: "High Rollers",
			active: active.value === "highrollers",
			action: () => (active.value = "highrollers"),
		},
		{
			title: "Race Leaderboard",
			active: active.value === "leaderboard",
			action: () => (active.value = "leaderboard"),
		},
	];
});
</script>
<template>
		<div class="pt-6">
		<div class="flex justify-between items-center">
			<div class="grid grid-cols-4 space-x-4 w-[850px]">
				<PrimaryTab
					v-for="tab in tabs"
					:key="tab.title"
					:item="tab"
					color="secondary"
				/>
			</div>
			<div >
				<GhostModeToggle v-if="userStore.user" />
			</div>
		</div>
		<div>
			<BetFeedTableCasino v-if="active === 'mybets'" />
			<BetFeedTableCasino v-else-if="active === 'allbets'" />
			<BetFeedTableCasino v-else-if="active === 'sports'" />
			<BetFeedTableLeaderboard v-else-if="active === 'leaderboard'" />
		</div>
	</div>
</template>