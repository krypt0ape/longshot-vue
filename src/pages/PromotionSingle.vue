<script setup>
import { computed } from "vue";
import VueCountdown from "@chenfengyuan/vue-countdown";
import RichTextRenderer from "contentful-rich-text-vue-renderer";

const route = useRoute();
const { data } = await useFetch("/api/promotion/" + route.params.promotion);

const countdown = computed(() => {
	return new Date(data.value.fields.endTime).getTime() - new Date().getTime();
});
</script>
<template>
	<div class="text-white max-w-7xl mx-auto">
		<h2 class="text-3xl">
			{{ data.fields.title }}
		</h2>
		<img :src="data.fields.image.fields.file.url" class="w-[350px]" />
		<client-only>
			<vue-countdown
				v-if="countdown"
				:time="countdown"
				v-slot="{ days, hours, minutes, seconds }"
			>
				{{ days }} Day | {{ hours }} Hour | {{ minutes }} Mins |
				{{ seconds }} seconds
			</vue-countdown>
		</client-only>
		<div>
			<RichTextRenderer
				v-for="(document, index) in data.fields.content.content"
				:key="index"
				:document="document"
			/>
		</div>
	</div>
</template>
