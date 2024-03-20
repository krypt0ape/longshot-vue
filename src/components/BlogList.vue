<script setup>
import PostListLayout from "./PostListLayout.vue";
import { computed } from "vue";
import AsyncContent from "./AsyncContent.vue";
import LoaderBar from "./LoaderBar.vue";

const props = defineProps({
	items: {
		type: Array,
		required: true,
	},
	loading: {
		type: Boolean,
		required: true
	},
	error:{
		type: String,
		required: true
	}
});

const posts = computed(() => {
	if (!props.items.length > 1) return [];
	// remove first post from the list
	return props.items.slice(1);
});
</script>
<template>
	<div class="max-w-7xl mx-auto">
		<AsyncContent :loading="loading" :error="error">
			<template #loader>
				<div class="flex justify-center mt-[150px]">
					<LoaderBar />
				</div>
			</template>
			<div>
				<PostListLayout
					v-if="props.items?.length"
					:featured="props.items[0]"
					:posts="posts"
				/>
				<div v-else class="relative z-20 mt-12">
					<p class="text-2xl text-brand-darkerGrey font-display tracking-wider">
						No Posts Found For This Category
					</p>
				</div>
			</div>
		</AsyncContent>
	</div>
</template>
./LoaderBar.vue
