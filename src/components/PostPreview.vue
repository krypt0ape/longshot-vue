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
			<p class="text-white text-2xl font-medium mb-4">
				{{ post.fields.title }}
			</p>
			<p class="text-brand-grey mb-2">{{ post.fields.shortDescription }}</p>
			<div class="ml-2 mt-6 flex justify-between">
				<RouterLink class="font-medium text-brand-grey hover:text-brand-lightGrey" :to="`/blog/${post.fields.slug}`">
					<i class="fa-solid fa-angle-right mr-4" />Read More
				</RouterLink>
				<RouterLink :to="'/blog/category/'+ post.fields.postCategory.fields.slug" class="flex space-x-3  text-brand-grey cursor-pointer hover:text-white transition items-center">
					<i :class="post.fields.postCategory.fields.icon" class=" text-2xl" />
					<p class="font-semibold ">{{  post.fields.postCategory.fields.name }}</p>
				</RouterLink>
			</div>
		</div>
	</div>
</template>
<style>
.blog-post-preview {
	border-radius: 5px;
border: 1px solid rgba(61, 75, 89, 0.50);
background: var(--Accent-BG-Grey, #182330);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
</style>
