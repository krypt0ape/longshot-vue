<script setup>
import { ref, computed } from "vue";
import useApi from "@/composables/useApi";
import PromoBox from "@/components/PromoBox.vue";
import { useI18n } from "vue-i18n";
import VerticalScrollingList from "@/components/VerticalScrollingList.vue";

const { t, locale } = useI18n();

const { loading, error, data } = useApi("post", "/contentful/entry", {
	data: { id: "3ZYogQ4KKNTZukE7fAgBrR" },
});

const promotions = computed(() => {
	if (!data.value) return [];
	return data.value.fields.promotions.map((promotion) => {
		return {
			title: promotion.fields.title,
			image: promotion.fields.image.fields.file.url,
			summary: promotion.fields.summary,
			to: `/promotions/${promotion.fields.slug}`,
			betLink: promotion.fields.betLink,
		};
	});
});
</script>
<template>
	<div class="relative">
		<div
			class="absolute glow-green -top-[170px] mx-auto left-0 right-0 opacity-75 z-10"
		>
			&nbsp;
		</div>
		<VerticalScrollingList
			:loading="loading"
			:loading-items="7"
			:loader-style="{ height: '95px', width: '182px' }"
			:controls="false"
		>
			<PromoBox
				v-for="promotion in promotions"
				:key="promotion.slug"
				:promotion="promotion"
				color="primary"
			/>
		</VerticalScrollingList>
	</div>
</template>
<style></style>
