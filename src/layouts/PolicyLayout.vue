<script setup>
import PageHeader from "../components/PageHeader.vue";
import GlowGreen from "@/components/GlowGreen.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import VerticalMenu from "../components/VerticalMenu.vue";
import useApi from "@/composables/useApi";
import { useI18n } from "vue-i18n";
import AsyncContent from "@/components/AsyncContent.vue";

const { locale, locales, t } = useI18n();
const route = useRoute();

const { loading, error, data } = useApi("post", "/contentful/entries", {
	data: {
		content_type: "policy",
		select: "fields.heading,fields.slug",
		locale: locale.value !== "en" ? locale.value : "en-US",
	},
});

const items = computed(() => {
	if (!data.value) return [];
	return data.value.items.map((policy) => {
		return {
			title: policy.fields.heading,
			to: `/policies/${policy.fields.slug}`,
			active: route.params.slug === policy.fields.slug,
		};
	});
});
</script>
<template>
	<div>
		<PageHeader>Policies</PageHeader>
		<GlowGreen  class="-mt-[80px]"/>
		<div class="max-w-7xl mx-auto flex mt-12">
			<div class="w-[290px]">
				<AsyncContent :loading="loading" :eror="error">
					<template #loader>
						<div class="h-[250px] w-full animate-pulse bg-brand-accentBgHeader rounded-xl">&nbsp;</div>
					</template>
					<VerticalMenu :items="items" />
				</AsyncContent>
			</div>
			<div class="flex-1 pl-[50px]">
				<router-view  :key="$route.path"></router-view>
			</div>
		</div>
	</div>
</template>
