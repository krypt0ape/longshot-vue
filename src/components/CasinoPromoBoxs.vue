<script setup>
import useApi from "@/composables/useApi";
import { computed } from "vue";
import PromoBox from "@/components/PromoBox.vue";

const { loading, error, data } = useApi("post", "/contentful/entry", {
	id: "5vATqatwvdkTIALxajLi4U",
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
	<div class="grid grid-cols-3 gap-x-8 relative">
		<div
			class="absolute glow-purple -top-[170px] mx-auto left-0 right-0 opacity-75 z-10 "
		>&nbsp;</div>
		<PromoBox
			v-for="promotion in promotions"
			:key="promotion.slug"
			:promotion="promotion"
			color="secondary"
		/>
	</div>
</template>
<style scoped>

</style>
