<script setup>
import useApi from "@/composables/useApi";
import {useI18n} from "vue-i18n";
import {computed} from "vue";
import BlogList from "@/components/BlogList.vue";

const { locale, locales, t } = useI18n();

const { loading, error, data } = useApi("post", "/contentful/entries", {
	content_type: "blogPost",
	order: "-sys.createdAt",
	limit: 6,
	select:
		"fields.title,fields.image,fields.shortDescription,fields.postCategory,fields.slug",
	locale: locale.value !== "en" ? locale.value : "en-US",
});

const items = computed(()=>{
	if(! data.value) return [];
	return data.value.items;
})
</script>
<template>
	<BlogList :items="items" :loading="loading" />
</template>
