<script setup>
import PrimaryTab from "@/components/Tabs/PrimaryTab.vue";
import { ref, computed } from "vue";
import BetFeedTableCasino from "@/components/BetFeedTableCasino.vue";
import BetFeedTableSports from "@/components/BetFeedTableSports.vue";
import BetFeedTableLeaderboard from "@/components/BetFeedTableLeaderboard.vue";
import GhostModeToggle from "@/components/GhostModeToggle.vue";
import useUserStore from "@/stores/useUserStore";

const userStore = useUserStore();

const active = ref("casino");
const tabs = computed(() => {
	return [
		{
			title: "Casino Bets",
			active: active.value === "casino",
			action: () => (active.value = "casino"),
		},
		{
			title: "Sports Bets",
			active: active.value === "sports",
			action: () => (active.value = "sports"),
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
			<div class="grid grid-cols-3 space-x-4 w-[700px]">
				<PrimaryTab
					v-for="tab in tabs"
					:key="tab.title"
					:item="tab"
					color="primary"
				/>
			</div>
			<div >
				<GhostModeToggle v-if="userStore.user" />
			</div>
		</div>
		<div>
			<BetFeedTableCasino v-if="active === 'casino'" />
			<BetFeedTableSports v-else-if="active === 'sports'" />
			<BetFeedTableLeaderboard v-else-if="active === 'leaderboard'" />
		</div>
	</div>
</template>
