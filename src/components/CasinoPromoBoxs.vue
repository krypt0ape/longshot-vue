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
			class="absolute glow -top-[170px] mx-auto left-0 right-0 opacity-75 z-10 "
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
.glow {
	border-radius: 981px;
	/* background: url('/img/PURPLE-GLOW-TOP.png') lightgray 50% / cover no-repeat, rgba(203, 12, 251, 0.40); */
	background: linear-gradient(rgba(203, 12, 251, 0.40), rgba(203, 12, 251, 0.40)), url('/img/PURPLE-GLOW-TOP.png') 50% / cover no-repeat;
	background-blend-mode: luminosity, normal;
	filter: blur(32px);
	width: 981px;
height: 272px;
flex-shrink: 0;
}
</style>
