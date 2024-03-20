<script setup>
import useApi from "@/composables/useApi";
import useAsyncApi from "@/composables/useAsyncApi";
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import BlogList from "@/components/BlogList.vue";

const data = ref(null);

const { call: getCategory, error: getCategoryError, loading: getCategoryLoading } = useAsyncApi("post", "/contentful/entries");
const { call: getBlogsForCategory, error: getBlogsError, loading: getBlogsLoading } = useAsyncApi(
	"post",
	"/contentful/entries"
);

const route = useRoute();
const category = route.params.category;
const { locale, locales, t } = useI18n();

const loading = computed(()=>{
	return getCategoryLoading.value || getBlogsLoading.value;
});

const error = computed(()=>{
	return getCategoryError.value || getBlogsError.value;
});

onMounted(async () => {
	const response = await getCategory({
		content_type: "blotPostType",
		"fields.slug": category,
	});
	// Error is set in the return object of the hooks
	if(! response) return;
	data.value = await getBlogsForCategory({
		content_type: "blogPost",
		order: "-sys.createdAt",
		limit: 6,
		select:
			"fields.title,fields.image,fields.shortDescription,fields.postCategory,fields.slug",
			locale: locale.value !== "en" ? locale.value : "en-US",
		links_to_entry: response.items[0].sys.id,
	});
});
</script>
<template>
	<BlogList :items="items" :loading="loading" :error="error" />
</template>
