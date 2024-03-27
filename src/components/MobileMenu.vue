<script setup></script>
<template>
<div class="app-header app-mobile-menu flex bg-brand-accentBgHeader grid grid-cols-5 py-2 ">
	<div class="text-center">
		<i class="fa-solid fa-bars text-brand-grey text-xl"></i>
		<p class="text-brand-lightGrey text-sm font-bold">Browse</p>
	</div>
	<RouterLink to="/casino/home" class="text-center">
		<i class="fa-solid fa-cards text-brand-grey text-xl"></i>
		<p class="text-brand-lightGrey text-sm font-bold">Casino</p>
	</RouterLink>
	<div class="text-center">
		<i class="fa-solid fa-receipt text-brand-grey text-xl"></i>
		<p class="text-brand-lightGrey text-sm font-bold">Bets</p>
	</div>
	<RouterLink class="text-center" to="/casino/home">
		<i class="fa-solid fa-futbol text-brand-grey text-xl"></i>
		<p class="text-brand-lightGrey text-sm font-bold">Sports</p>
	</RouterLink>
	<div class="text-center">
		<i class="fa-solid fa-message-dots text-brand-grey text-xl"></i>
		<p class="text-brand-lightGrey text-sm font-bold">Chat</p>
	</div>
</div>
</template>
<style>
.app-mobile-menu {
	-webkit-box-shadow: 0px -2px 17px -1px rgba(14,23,37,1);
-moz-box-shadow: 0px -2px 17px -1px rgba(14,23,37,1);
box-shadow: 0px -2px 17px -1px rgba(14,23,37,1);
}
</style>