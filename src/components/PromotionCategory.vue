<script setup>
defineProps({
	category: "required"
})
</script>
<template>
	<div class="bg-dark rounded-xl shadow-lg flex">
		<img :src="category.fields.image.fields.file.url" :alt="category.fields.image.fields.title" class="w-[50px] object-cover" />
		<NuxtLink :to="`/promotions/category/${category.fields.slug}`">
			<h2 class="text-white text-3xl font-bold mb-2 ml-2">{{ category.fields.name }}</h2>
		</NuxtLink>
	</div>
</template>