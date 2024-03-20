<script setup>
defineProps({
	posts: {},
	featured: {},
});
</script>
<template>
	<div class="relative mt-[50px]">
		<div class="relative z-20  max-w-7xl mx-auto">
			 <PromotionFeatured :post="featured" />
			<div class="grid grid-cols-3 gap-x-8 gap-y-8 mt-[50px] mb-[100px]">
				<PromotionPreview
					v-for="post in posts"
					:key="post.slug"
					:post="post"
				/>
			</div>
		</div>
		<div></div>
	</div>
</template>
