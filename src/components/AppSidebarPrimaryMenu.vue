<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import AppSidebarMenu from "./AppSidebarMenu.vue";
import { request } from "@/api/api";
import useApi from "@/composables/useApi";
import useUserStore from "@/stores/useUserStore";

const { t, locale } = useI18n();

const userStore = useUserStore();

const { loading, error, data } = useApi("post", "/contentful/entry", {
	data: { id: "6XnHoRun8rLi8078PDlks3" },
});

const items = computed(() => {
	if (!data.value) return [];
	const promotions = data.value.fields.promotions.map((promotion) => {
		return {
			icon: promotion.fields.icon,
			title: promotion.fields.title,
			to: `?modal=promotions&id=${promotion.fields.slug}`,
		};
	});
	// View all link at the end of the list
	promotions.push({
		title: t("global.view_all"),
		to: "/promotions/category/all",
		icon: "fa-solid fa-grid-2-plus",
	});
	const items = [];

	if (userStore.user) {
		items.push({
			icon: "fa-solid fa-user",
			title: t("global.profile"),
			children: [
				{
					icon: "fa-solid fa-receipt",
					title: t("global.my_bets"),
					to: "/",
				},
				{
					icon: "fa-solid fa-wallet",
					title: t("global.wallet"),
					to: "/",
				},
				{
					icon: "fa-solid fa-chart-line-up",
					title: t("global.statistics"),
					to: "/",
				},
				{
					icon: "fa-solid fa-user",
					title: t("global.profile"),
					to: "/",
				},
			],
		});
	}
	return items.concat([
		{
			icon: "fa-solid fa-award",
			title: t("primary_sidebar.promotions"),
			children: promotions,
		},
		{
			icon: "fa-solid fa-users-rays",
			title: t("primary_sidebar.affiliate"),
			to: "/affiliate/overview",
		},
		{
			icon: "fa-solid fa-trophy",
			title: t("primary_sidebar.vip_club"),
			to: "/vip-club",
		},
		{
			icon: "fa-solid fa-newspaper",
			title: t("primary_sidebar.blog"),
			to: "/blog/category/all",
		},
	]);
});
</script>
<template>
	<AppSidebarMenu :items="items" :loading="loading" :height="220" />
</template>
