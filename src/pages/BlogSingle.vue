<script setup>
import { computed } from "vue";
// https://github.com/paramander/contentful-rich-text-vue-renderer
import RichTextRenderer from "contentful-rich-text-vue-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { format } from "date-fns";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import NeutralButton from "@/components/Buttons/NeutralButton.vue";
import useApi from "@/composables/useApi";

const { locale, locales, t } = useI18n();
const route = useRoute();

const { loading, error, data } = useApi("post", "/contentful/entries", {
	data: {
		content_type: "blogPost",
		"fields.slug": route.params.slug,
		locale: locale.value !== "en" ? locale.value : "en-US",
	},
});

const headerStyle = computed(() => {
	if (!blog) return {};
	return {
		background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 37.71%, #0E1725 50.85%), url(${blog.value.fields.image.fields.file.url}), lightgray 50% / cover no-repeat`,
	};
});

const blog = computed(() => {
	if (!data.value) return null;
	return data.value.items[0];
});

const formattedDate = computed(() => {
	if (!blog) return "";
	return format(new Date(blog.value.sys.createdAt), "MMMM d, yyyy");
});

const renderMarks = () => {
	return {
		[MARKS.BOLD]: (text, key) => h("custom-bold", { key }, text),
	};
};

const renderNodes = () => {
	return {
		[BLOCKS.PARAGRAPH]: (node, key, next) =>
			h("p", { class: "mb-4" }, next(node.content, key, next)),
	};
};
</script>
<template>
	<div>
		<div v-if="blog">
			<div
				:style="headerStyle"
				class="h-[750px] w-full absolute top-0 left-0 top-0 z-10 opacity-[0.6]"
			>
				&nbsp;
			</div>
			<div class="max-w-7xl mx-auto pt-12 relative z-20">
				<NeutralButton
					to="/blog/category/all"
					class="font-light"
					as="RouterLink"
				>
					<i class="fa-solid fa-chevron-left mr-4" />Go Back
				</NeutralButton>
				<div class="max-w-5xl mx-auto mt-8">
					<img
						:src="blog.fields.image.fields.file.url"
						class="w-full rounded-xl shadow-md"
					/>
				</div>
			</div>
		</div>

		<div v-if="blog" class="max-w-3xl mx-auto text-white relative z-30">
			<div class="py-10 flex items-center">
				<RouterLink
					:to="'/blog/category/' + blog.fields.postCategory.fields.slug"
					class="flex space-x-4 cursor-pointer text-[#FFC700] hover:text-white transition"
				>
					<i :class="blog.fields.postCategory.fields.icon" class="text-2xl" />
					<p class="font-light text-xl">
						{{ blog.fields.postCategory.fields.name }}
					</p>
				</RouterLink>
				<p class="ml-8 text-xl font-light text-brand-darkerGrey">
					{{ formattedDate }}
				</p>
			</div>
			<h2 class="text-brand-lightGrey font-semibold text-4xl mb-[30px]">
				{{ blog.fields.title }}
			</h2>
			<RichTextRenderer
				v-for="(document, index) in blog.fields.postContent.content"
				:key="index"
				:document="document"
			/>
		</div>
	</div>
</template>
<style>
.blog-rich-text h2 {
	color: var(--icon-color, #fff);
	leading-trim: both;
	text-edge: cap;
	font-family: Inter;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	margin-bottom: 30px;
}
</style>
