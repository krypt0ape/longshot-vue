<script setup>
import { computed, onMounted } from "vue";
import VueCountdown from "@chenfengyuan/vue-countdown";
import RichTextRenderer from "contentful-rich-text-vue-renderer";
import { useRoute } from "vue-router";
import useApi from "@/composables/useApi";
import { useI18n } from "vue-i18n";
import AsyncContent from "@/components/AsyncContent.vue";

const { locale, locales, t } = useI18n();
const route = useRoute();

const { loading, error, data } = useApi("post", "/contentful/entries", {
	content_type: "promotion",
	"fields.slug": route.params.slug,
	locale: locale.value !== "en" ? locale.value : "en-US",
});

const promotion = computed(() => {
	if (!data.value) return false;
	return data.value.items[0];
});

const countdown = computed(() => {
	if(! promotion) return false;
	return new Date(promotion.value.fields.endTime).getTime() - new Date().getTime();
});
</script>
<template>
	<AsyncContent
		:loading="loading"
		:error="error"
		class="w-full min-h-[200px] flex items-center justify-center"
	>
		<div class="text-white max-w-7xl mx-auto">
			<h2 class="text-3xl">
				{{ promotion?.fields?.title }}
			</h2>
			<img :src="promotion?.fields?.image.fields.file.url" class="w-[350px]" />
			<vue-countdown
				v-if="countdown"
				:time="countdown"
				v-slot="{ days, hours, minutes, seconds }"
			>
				{{ days }} Day | {{ hours }} Hour | {{ minutes }} Mins |
				{{ seconds }} seconds
			</vue-countdown>
			<div>
				<RichTextRenderer
					v-for="(document, index) in promotion?.fields?.content.content"
					:key="index"
					:document="document"
				/>
			</div>
		</div>
	</AsyncContent>
</template>
