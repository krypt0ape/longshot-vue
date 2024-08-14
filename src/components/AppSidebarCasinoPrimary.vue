<script setup>
import AppSidebarMenu from "@/components/AppSidebarMenu.vue";
import useUserStore from "@/stores/useUserStore";
import { computed } from "vue";

const userStore = useUserStore();

const primaryMenu = computed(() => {
	return [
		{
			icon: "fa-solid fa-globe",
			title: "Lobby",
			to: "/casino/home",
		},
		{
			icon: "fa-solid fa-bookmark",
			title: "Favourites",
			to: "/casino/favourites",
		},
		{
			icon: "fa-solid fa-history",
			title: "Recent",
			to: "/casino/recent",
		},
		// {
		// 	icon: "fa-solid fa-bullseye",
		// 	title: "Challenges",
		// 	to: "/casino/challenges",
		// },
		{
			icon: "fa-solid fa-receipt",
			title: "My Bets",
			to: "/casino/my-bets",
		},
	];
});
</script>
<template>
	<div class="mb-4">
		<AppSidebarMenu :items="primaryMenu" />
	</div>
</template>
