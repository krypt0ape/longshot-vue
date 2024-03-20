<script setup>
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import useApi from "@/composables/useApi";
import PostListLayout from "./PostListLayout.vue";
import { computed } from "vue";
import Loader from "./Loader.vue";

const props = defineProps({
	items: {
		type: Array,
		required: true,
	},
	loading: {
		type: Boolean,
	},
});

const route = useRoute();
const { locale, locales, t } = useI18n();

const posts = computed(() => {
	if (!props.items.length > 1) return [];
	// remove first post from the list
	return props.items.slice(1);
});
</script>
<template>
	<div class="max-w-7xl mx-auto">
		<div v-if="loading" class="flex justify-center mt-[150px]">
			<Loader />
		</div>

		<div v-else>
			<PostListLayout
				v-if="props.items.length"
				:featured="props.items[0]"
				:posts="posts"
			/>
			<div v-else class="relative z-20 mt-12">
				<p class="text-2xl text-brand-darkerGrey font-display tracking-wider">
					No Posts Found For This Category
				</p>
			</div>
		</div>
	</div>
</template>
