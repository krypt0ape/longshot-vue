<script setup>
defineProps({
	post: "required",
});
</script>
<template>
	<div class="blog-post-preview overflow-hidden">
		<div>
			<img
				:src="post.fields.image.fields.file.url"
				class="w-full"
				alt="featured image"
			/>
		</div>
		<div class="p-[30px]">
			<h2 class="text-white text-3xl font-medium mb-4">
				{{ post.fields.title }}
			</h2>
			<p class="text-brand-darkerGrey mb-2">{{ post.fields.shortDescription }}</p>
			<div class="ml-2 mt-6 flex justify-between">
				<NuxtLinkLocale class="font-medium text-brand-darkerGrey hover:text-brand-lightGrey" :to="`/blog/${post.fields.slug}`">
					<FontAwesome icon="fa-solid fa-angle-right" class="mr-4" />Read More
				</NuxtLinkLocale>
				<NuxtLinkLocale :to="'/blog/category/'+ post.fields.postCategory.fields.slug" class="flex space-x-4  text-brand-darkerGrey cursor-pointer hover:text-white transition">
					<FontAwesome :icon="post.fields.postCategory.fields.icon" class=" text-2xl" />
					<p class="font-semibold ">{{  post.fields.postCategory.fields.name }}</p>
				</NuxtLinkLocale>
			</div>
		</div>
	</div>
</template>
<style>
.blog-post-preview {
	border-radius: 10px;
	background: linear-gradient(137deg, #202d3c 24.01%, #0d1824 73.28%);
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
</style>
