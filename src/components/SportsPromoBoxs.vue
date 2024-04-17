<script setup>
import { ref, computed } from "vue";
import useApi from "@/composables/useApi";
import PromoBox from "@/components/PromoBox.vue";
import {useI18n} from "vue-i18n";

const { t, locale} = useI18n()

const {loading, error, data} = useApi("post", "/contentful/entry", {
	data: { id: "3ZYogQ4KKNTZukE7fAgBrR" }
});

const promotions = computed(() => {
	if(! data.value) return [];
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
<div class="grid grid-cols-3 gap-x-8">
	<PromoBox 
		v-for="promotion in promotions"
		:key="promotion.slug"
		:promotion="promotion"
	/>
</div>
</template>
<style></style>