<script setup>
import useApi from "@/composables/useApi";
import useAsyncApi from "@/composables/useAsyncApi";
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import BlogList from "@/components/BlogList.vue";
import AsyncContent from "@/components/AsyncContent.vue";
import useContentfulPaginatedQuery from "@/composables/useContentfulPaginatedQuery";
import Paginator from "@/components/Paginator.vue";

const route = useRoute();
const { locale, locales, t } = useI18n();

const query = {
	content_type: "blogPost",
	order: "-sys.createdAt",
	limit: 4,
	select:
		"fields.title,fields.image,fields.shortDescription,fields.postCategory,fields.slug",
	locale: locale.value !== "en" ? locale.value : "en-US",
};

const {
	call: getCategory,
	error: getCategoryError,
	loading: getCategoryLoading,
} = useAsyncApi("post", "/contentful/entries");

const {
	loading,
	error,
	fetch,
	updateQuery,
	data,
	itemsPerPage,
	totalPages,
	totalItems,
	currentPage,
	next,
	prev,
	skipToPage,
} = useContentfulPaginatedQuery(query);

onMounted(async () => {
	if (route.params.category !== "all") {
		// We need the get the  id of the cat slug and
		// add it to the query before we can call fetch on the
		// useContentfulPaginatedQuery
		const response = await getCategory({
			data: {
				content_type: "blotPostType",
				"fields.slug": route.params.category,
			},
		});
		if (!response) return;
		const newQuery = {
			...query,
			...{ links_to_entry: response.items[0].sys.id },
		};
		// Add the links_to_entry to the query
		updateQuery(newQuery);
	}

	fetch();
});
</script>
<template>
	<div class="max-w-7xl mx-auto text-white pb-[50px]">
		<AsyncContent
			:loading="loading"
			:error="error"
			class="w-full min-h-[200px] flex items-center justify-center"
		>
			<BlogList v-if="data?.items?.length" :items="data?.items" />
			<div v-else class="relative z-20 mt-12">
				<p class="text-2xl text-brand-darkerGrey font-display tracking-wider">
					No Blogs Found For This Category
				</p>
			</div>
		</AsyncContent>
		<Paginator
			v-if="data?.items?.length"
			:currentPage="currentPage"
			:totalPages="totalPages"
			@next="next"
			@prev="prev"
			@skipTo="skipToPage"
		/>
	</div>
</template>
