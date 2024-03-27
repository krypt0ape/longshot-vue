<script setup>
import { ref, computed } from "vue";
import {useI18n} from "vue-i18n";
import useApi from "@/composables/useApi";
import AppSidebarMenu from "./AppSidebarMenu.vue";

const { locale, locales, t } = useI18n();

const {loading, error, data} = useApi("post", "/contentful/entries", {
    content_type: "policy",
    select: "fields.heading,fields.slug",
    locale: locale.value !== "en" ? locale.value : "en-US",
  });

const items = computed(() => {
	if(! data.value) return [];
	const policies = data.value.items.map((policy) => {
		return {
			title: policy.fields.heading,
			to: `/policies/${policy.fields.slug}`,
		};
	});
	// TOOD Come back to this
	// const languages = locales.value.map((locale) => {
	// 	return {
	// 		title: locale.name,
	// 		to: ()=>{},
	// 	};
	// });
	return [
		{
			icon: "fa-solid fa-file-contract",
			title: t("secondary_sidebar.policies"),
			children: policies,
		},
		{
			icon: "fa-solid fa-headset",
			title: t("secondary_sidebar.live_support"),
			to: "/affiliate/overview",
		},
		// {
		// 	icon: "fa-solid fa-language",
		// 	title: t("secondary_sidebar.language") + ": (" + locale.value + ")",
		// 	children: [],
		// },
	];
});
</script>
<template>
	<div class="mt-4 text-white">
		<AppSidebarMenu :items="items" :loading="loading" :height="132"/>
	</div>
</template>
