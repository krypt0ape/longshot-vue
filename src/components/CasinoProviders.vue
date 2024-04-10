<script setup>
//https://cdn.softswiss.net/i/s2/<provider>/<game.identifier>.png
import useApi from "@/composables/useApi";
import { ref, onMounted, computed } from "vue";
import VerticalScrollingList from "@/components/VerticalScrollingList.vue";
import CasinoGamesListItem from "@/components/CasinoGamesListItem.vue";
import CasinoProvidersLogo from "@/components/CasinoProvidersLogo.vue";
import AsyncContent from "@/components/AsyncContent.vue";

const { data, loading, error } = useApi("get", "/provider/list", {
	limit: 12,
});
</script>
<template>
	<div class="pt-8 pb-2">
		<AsyncContent :loading="loading" :error="error">
			<VerticalScrollingList name="Providers" icon="fa-solid fa-joystick">
				<CasinoProvidersLogo
					v-for="provider in data?.rows"
					:key="provider.identifier"
					:provider="provider"
				>
					<!-- Hack to force the correct height & width with the vertical scrolling and flexbox -->
					<div class="w-[150px] -mt-[25px]">&nbsp;</div>
				</CasinoProvidersLogo>
			</VerticalScrollingList>
		</AsyncContent>
	</div>
</template>
