<script setup>
import PrimaryTab from "@/components/Tabs/PrimaryTab.vue";
import { ref, computed } from "vue";
import BetFeedCasino from "@/components/BetFeedCasino.vue";
import BetFeedSports from "@/components/BetFeedSports.vue";
import BetFeedLeaderboard from "@/components/BetFeedLeaderboard.vue";
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
			<BetFeedCasino v-if="active === 'casino'" />
			<BetFeedSports v-else-if="active === 'sports'" />
			<BetFeedLeaderboard v-else-if="active === 'leaderboard'" />
		</div>
	</div>
</template>
