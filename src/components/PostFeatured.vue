<script setup>
defineProps({
	post: {},
});
</script>
<template>
	<div class="grid grid-cols-3 blog-post-featured overflow-hidden">
		<div class="col-span-2">
			<img
				:src="post.fields.image.fields.file.url"
		class="w-full"
				alt="featured image"
			/>
		</div>
		<div class="flex items-center px-[60px]">
			<div>
				<RouterLink :to="'/blog/category/'+ post.fields.postCategory.fields.slug" class="flex space-x-4 mb-6 text-[#FFC700] cursor-pointer hover:text-white transition">
					<i :class="post.fields.postCategory.fields.icon" class=" text-2xl" />
					<p class="font-semibold text-lg">{{  post.fields.postCategory.fields.name }}</p>
				</RouterLink>
				<p class="text-brand-lightGrey mb-4 text-2xl font-bold">{{ post.fields.title }}</p>
				<p class=" mb-4 overflow-hidden text-brand-grey h-[75px]">{{ post.fields.shortDescription }}...</p>
				<RouterLink class="text-brand-grey hover:text-brand-lightGrey" :to="`/blog/${post.fields.slug}`">
					<i class="fa-solid fa-circle-chevron-right text-brand-dark mr-2" /> Read More
				</RouterLink>
			</div>
		</div>
	</div>
</template>
<style>
.blog-post-featured {
	border-radius: 5px;
border: 1px solid rgba(61, 75, 89, 0.50);
background: linear-gradient(335deg, rgba(23, 31, 43, 0.50) 24.05%, rgba(44, 62, 78, 0.50) 61.46%);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
</style>
