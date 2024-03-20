<script setup>
const { locale, locales, t } = useI18n();

const { data } = await useFetch("/api/promotion/list", {
	query: {
		lang: locale.value,
	},
});

const promotions = computed(()=>{
	// remove first post from the list
	return data.value.items.slice(1);
})
</script>
<template>
	<div>
		<PostListLayout 
			:featured="data.items[0]"
			:posts="promotions"
		/>
	</div>
</template>
