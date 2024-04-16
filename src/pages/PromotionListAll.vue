<script setup>
import useApi from "@/composables/useApi";
import PromotionListLayout from "@/components/PromotionListLayout.vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import {computed} from "vue";

const route = useRoute();
const { locale, locales, t } = useI18n();


const { loading, error, data } = useApi("post", "/contentful/entries", {
	content_type: "promotion",
    select: "fields.title,fields.image,fields.summary,fields.endTime,fields.slug,fields.icon,fields.postCategory",
    order: "-sys.createdAt",
    limit: 12,
});

const posts = computed(() => {
	if(! data.value.items.length > 1) return [];
	// remove first post from the list
	return data.value.items.slice(1);
});

</script>
<template>
	<div class="max-w-7xl mx-auto text-white">
		<PromotionListLayout v-if="data?.items.length" :posts="posts" />
		<div  v-else class="relative z-20 mt-12 ">
			<p class="text-2xl text-brand-darkerGrey font-display tracking-wider">No Posts Found For This Category</p>
		</div>
	</div>
</template>
