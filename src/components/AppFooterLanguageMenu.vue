<script setup>
import {computed} from 'vue';

const { locale, locales, t } = useI18n();

const languages = computed(()=>{
	return locales.value.map((locale) => {
		return {
			title: locale.name,
			to: switchLocalePath(locale.code),
		};
	});
})
</script>
<template>
	<ul class="text-brand-darkerGrey font-medium mb-2">
		<li class="text-white flex items-center">Language</li>
		<li>{{ locale }}</li>
	</ul>
</template>
