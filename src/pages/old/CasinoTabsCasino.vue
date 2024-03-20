<script setup></script>
<template>
	<div>
		<CasinoGamesGrid
			name="Casino"
			icon="fa-solid fa-cards"
			:filters=""
			:limit="100"
		/>
		<div class="pt-12">
			<CasinoProviders />
		</div>
	</div>
</template>
