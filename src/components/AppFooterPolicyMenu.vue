<script setup>
import { ref, computed } from "vue";
import useApi from "@/composables/useApi";
import { useI18n } from "vue-i18n";

const { locale, locales, t } = useI18n();

const {loading, error, data} = useApi("post", "/contentful/entries", {
    content_type: "policy",
    select: "fields.heading,fields.slug",
    locale: locale.value !== "en" ? locale.value : "en-US",
  });

const policies = computed(() => {
	if (! data.value) return [];
	return data.value.items.map((policy) => {
		return {
			title: policy.fields.heading,
			to: `/policies/${policy.fields.slug}`,
		};
	});
});
</script>
<template>
	<ul class="text-brand-darkerGrey font-medium">
		<li>
			<RouterLink to="/sports/home" class="hover:text-white transition">{{
				$t("global.fairness")
			}}</RouterLink>
		</li>
		<li v-for="policy in policies" :key="policy.slug">
			<RouterLink :to="policy.to" class="hover:text-white transition">{{
				policy.title
			}}</RouterLink>
		</li>
		<li>
			<a
				href="https://www.begambleaware.org/"
				target="_blank"
				class="flex items-center hover:text-white transition"
				>{{ $t("footer.gamble_aware") }}<i class="fa-solid fa-arrow-up-right-from-square ml-2" /></a>
		</li>
	</ul>
</template>
