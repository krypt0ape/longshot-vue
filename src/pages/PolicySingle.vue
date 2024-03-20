<script setup>
import RichTextRenderer from "contentful-rich-text-vue-renderer";
const route = useRoute();
const { locale, locales, t } = useI18n();

const { data } = await useFetch("/api/policy/" + route.params.policy, {
	query: {
		lang: locale.value,
	},
})
</script>
<template>
	<div class="max-w-2xl mx-auto text-white mt-12">
		<h2 class="text-white text-3xl mb-4">
			{{ data.fields.heading }}
		</h2>
		<div class="mt-8">
			<RichTextRenderer
				v-for="(document, index) in data.fields.content.content"
				:key="index"
				:document="document"
			/>
		</div>
	</div>
</template>
