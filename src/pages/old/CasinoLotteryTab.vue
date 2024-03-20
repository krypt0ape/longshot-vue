<script setup></script>
<template>
	<div>
		<CasinoGamesGrid
			name="Lottery"
			icon="fa-solid fa-gift"
			:filters="['lottery']"
			:limit="100"
		/>
		<div class="pt-12">
			<CasinoProviders />
		</div>
	</div>
</template>
