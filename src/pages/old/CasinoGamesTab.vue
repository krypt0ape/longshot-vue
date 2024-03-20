<script setup></script>
<template>
	<div>
		<CasinoGamesGrid
			name="Games"
			icon="fa-solid fa-game-board"
			:filters="['casual', 'crash', 'mines']"
			:limit="100"
		/>
		<div class="pt-12">
			<CasinoProviders />
		</div>
	</div>
</template>
