<script setup>
import CasinoPromoBoxs from "@/components/CasinoPromoBoxs.vue";
import CasinoSearch from "@/components/CasinoSearch.vue";
import CasinoTabs from "@/components/CasinoTabs.vue";
import { useI18n } from "vue-i18n";
import NeutralButton from "@/components/Buttons/NeutralButton.vue";

const { locale, locales, t } = useI18n();
</script>
<template>
	<div class="max-w-7xl mx-auto pt-[30px] relative">
		<CasinoPromoBoxs />
		<div class="py-4">
			<CasinoSearch />
		</div>
		<CasinoTabs />
		<router-view  :key="$route.fullPath" />
		<div class="mt-24">
			<NeutralButton
				as="RouterLink"
				:to="`/casino/games/softswiss:CherryFiesta`"
				>Real Session: softswiss:CherryFiesta</NeutralButton
			>

			<NeutralButton as="RouterLink" :to="`/casino/games/acceptance:test`"
				>Test Session: acceptance:test</NeutralButton
			>

			<NeutralButton
				as="RouterLink"
				:to="`/casino/games/acceptance:secondary_test`"
				>Test Session: acceptance:secondary_test</NeutralButton
			>
		</div>
	</div>
</template>
