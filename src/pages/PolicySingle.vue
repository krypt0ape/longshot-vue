<script setup>
import useApi from "@/composables/useApi";
import RichTextRenderer from "contentful-rich-text-vue-renderer";
import { computed , h} from "vue";
import AsyncContent from "@/components/AsyncContent.vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const route = useRoute();
const { locale, locales, t } = useI18n();

const { loading, error, data } = useApi("post", "/contentful/entries", {
	data: {
		content_type: "policy",
		"fields.slug": route.params.slug,
		//locale: query.lang !== "en" ? query.lang : "en-US",
	},
});

const policy = computed(() => {
	if (!data.value) return null;
	return data.value.items[0];
});

const renderNodes = () => {
	return {
		paragraph: (node, key, next) =>
			h("p", { class: "text-red-600" }, next(node.content, key, next)),
	};
};
</script>
<template>
	<AsyncContent :loading="loading" :error="error" class="max-w-2xl min-h-[150px] flex items-center justify-center">
		<div class="text-white ">
			<h2 class="text-white text-3xl mb-4">
				{{ policy.fields.heading }}
			</h2>
			<div class="mt-8">
				<RichTextRenderer
					v-for="(document, index) in policy.fields.content.content"
					:key="index"
					:document="document"
					:node-renderers="renderNodes()"
				/>
			</div>
		</div>
	</AsyncContent>
</template>
