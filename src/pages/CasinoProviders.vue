<script setup>
import { ref, onMounted, computed } from "vue";
import CasinoProvidersLogo from "@/components/CasinoProvidersLogo.vue";
import CasinoSearch from "@/components/CasinoSearch.vue";
import useApi from "@/composables/useApi";
import PageHeader from "@/components/PageHeader.vue";

const { data, loading, error } = useApi("get", "/provider/list", {
	data: { limit: 12, }
});
</script>
<template>
	<div>
		<PageHeader>Providers</PageHeader>
		<img
			src="/img/PURPLE-GLOW-TOP.png"
			class="absolute -top-[70px] mx-auto left-0 right-0 opacity-75"
		/>
		<div class="mx-auto max-w-7xl relative">
			<div class="py-2">
				<CasinoSearch />
			</div>
			<div class="grid grid-cols-6 gap-6 mt-8">
				<div
					v-for="provider in data"
					:key="provider.identifier"
					class="bg-brand-accentBgHeader px-2 py-2 shadow-xl rounded-xl flex items-center justify-center"
				>
					<CasinoProvidersLogo :provider="provider" />
				</div>
			</div>
		</div>
	</div>
</template>
