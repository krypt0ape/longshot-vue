<script setup>
import useApi from "@/composables/useApi";
import useAsyncApi from "@/composables/useAsyncApi";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";


const loading = ref(false);
const error = ref(null);
const data = ref(null);

const { call: getCategory, error: getCategoryError } = useAsyncApi("post", "/contentful/entries");
const { call: getBlogsForCategory } = useAsyncApi(
	"post",
	"/contentful/entries"
);

const route = useRoute();
const category = route.params.category;
const { locale, locales, t } = useI18n();

onMounted(async () => {
	loading.value = true;
	const response = await getCategory({
		content_type: "blogCategory",
		"fields.slug": category,
	});
	data.value = await getBlogsForCategory({
		content_type: "blogPost",
		order: "-sys.createdAt",
		limit: 6,
		select:
			"fields.title,fields.image,fields.shortDescription,fields.postCategory,fields.slug",
			locale: locale.value !== "en" ? locale.value : "en-US",
		links_to_entry: response.items[0].sys.id,
	});
	loading.value = false;
});
</script>
<template>
	<BlogList :items="data" />
</template>
