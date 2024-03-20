<script setup>
//https://cdn.softswiss.net/i/s2/<provider>/<game.identifier>.png
import useApi from "@/composables/useApi";
import { ref, onMounted, computed } from "vue";
import VerticalScrollingList from "@/components/VerticalScrollingList.vue";
import CasinoGamesListItem from "@/components/CasinoGamesListItem.vue";
import CasinoProvidersLogo from "@/components/CasinoProvidersLogo.vue";


const {data, loading, error} = useApi("get", "/provider/list", {
	limit: 12,
});
</script>
<template>
	<div class="pt-8 pb-2">
		<VerticalScrollingList name="Providers" icon="fa-solid fa-joystick">
			<CasinoProvidersLogo
				v-for="provider in data"
				:key="provider.identifier"
				:provider="provider"
			>
			<!-- Hack to force the correct width -->
				<div class="w-[150px] " >&nbsp;</div>
			</CasinoProvidersLogo>
		</VerticalScrollingList>
	</div>
</template>
