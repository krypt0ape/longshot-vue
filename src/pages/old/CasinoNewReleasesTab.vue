<script setup></script>
<template>
	<div>
		<CasinoGamesGrid
			name="New Releases"
			icon="fa-solid fa-rocket-launch"
			:filters="['new-releases']"
			:limit="100"
		/>
		<div class="pt-12">
			<CasinoProviders />
		</div>
	</div>
</template>
