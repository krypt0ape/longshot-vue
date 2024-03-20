<script setup>
import { computed } from "vue";
import VueCountdown from "@chenfengyuan/vue-countdown";
// import { VMarkdownView } from "vue3-markdown";

const route = useRoute();
const router = useRouter();
const open = computed(() => {
	return route.query.modal === "promotions";
});
const { locale, locales, t } = useI18n();
const countdown = computed(() => {
	if (!promotion.value) return 0;
	return (
		new Date(promotion.value.fields.endTime).getTime() - new Date().getTime()
	);
});
const close = () => {
	router.push({ path: route.path, query: {} });
};
const promotion = ref(false);
const loading = ref(false);

const getPromotion = async () => {
	loading.value = true;
	const { data } = await useFetch("/api/promotion/" + route.query.id, {
		query: {
			lang: locale.value,
		},
	});
	promotion.value = data.value;
	loading.value = false;
};

if (open.value) {
	getPromotion();
}

watch(open, async (newValue) => {
	if (newValue) {
		getPromotion();
	} else {
		promotion.value = false;
	}
});
</script>
<template>
	<Modal :open="open" @close="close">
		<div v-if="promotion">
			<h2 class="text-3xl">
				{{ promotion?.fields.title }}
			</h2>
			<img :src="promotion.fields.image.fields.file.url" class="w-[350px]" />
			<client-only>
				<vue-countdown
					:time="countdown"
					v-slot="{ days, hours, minutes, seconds }"
				>
					{{ days }} Day | {{ hours }} Hour | {{ minutes }} Mins |
					{{ seconds }} seconds
				</vue-countdown>
			</client-only>
			<!-- <client-only>
				<VMarkdownView :content="promotion.fields.summary"></VMarkdownView>
			</client-only> -->
		</div>
		<div v-if="promotion" class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
			<NuxtLink :to="'/promotions/' + promotion.fields.slug">
				Read More
			</NuxtLink>
		</div>
	</Modal>
</template>
