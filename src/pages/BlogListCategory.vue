<script setup>
import useApi from "@/composables/useApi";
import useAsyncApi from "@/composables/useAsyncApi";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const loading = ref(false);
const error = ref(null);
const data = ref(null);

const { call: getCategory } = useAsyncApi("post", "/contentful/entries");
const { call: getBlogsForCategory } = useAsyncApi(
	"post",
	"/contentful/entries"
);

const route = useRoute();
const category = route.params.category;

onMounted(async () => {
	loading.value = true;
	const category = await getCategory({
		content_type: "blogCategory",
		"fields.slug": category,
	});

	data.value = await getBlogsForCategory({
		content_type: "blogPost",
		order: "-sys.createdAt",
		limit: 6,
		select:
			"fields.title,fields.image,fields.shortDescription,fields.postCategory,fields.slug",
		locale: query.lang !== "en" ? query.lang : "en-US",
		links_to_entry: response.items[0].sys.id,
	});
	loading.value = false;
});
</script>
<template>
	<BlogList :items="data" />
</template>
