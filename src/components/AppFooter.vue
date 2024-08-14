<script setup>
import  AppFooterPolicyMenu from "./AppFooterPolicyMenu.vue";
</script>
<template>
	<div class="bg-brand-accentBgHeader pb-[100px] sm:pb-[54px] mt-[50px] px-4">
		<div class="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 py-[50px] gap-y-4 gap-x-4">
			<div>
				<h3 class="text-white mb-[12px] text-lg font-semibold">
					{{ $t("global.sports") }}
				</h3>
				<ul class="text-brand-darkerGrey font-medium">
					<li>
						<RouterLink
							to="/sports/home"
							class="hover:text-white transition"
							>{{ $t("global.home") }}</RouterLink
						>
					</li>
					<li>
						<RouterLink
							to="/sports/home"
							class="hover:text-white transition"
							>{{ $t("global.live") }}</RouterLink
						>
					</li>
					<li>
						<RouterLink
							to="/sports/home"
							class="hover:text-white transition"
							>{{ $t("global.sports_rules") }}</RouterLink
						>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="text-white mb-[12px] text-lg font-semibold">
					{{ $t("global.casino") }}
				</h3>
				<ul class="text-brand-darkerGrey font-medium">
					<li>
						<RouterLink
							to="/sports/home"
							class="hover:text-white transition"
							>{{ $t("global.games") }}</RouterLink
						>
					</li>
					<li>
						<RouterLink
							to="/sports/home"
							class="hover:text-white transition"
							>{{ $t("primary_sidebar.vip_club") }}</RouterLink
						>
					</li>
					<li>
						<RouterLink
							to="/sports/home"
							class="hover:text-white transition"
							>{{ $t("primary_sidebar.promotions") }}</RouterLink
						>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="text-white mb-[12px] text-lg font-semibold">
					{{ $t("secondary_sidebar.policies") }}
				</h3>
				<AppFooterPolicyMenu />
			</div>
			<div>
				<h3 class="text-white mb-[24px] text-lg font-semibold">
					{{ $t("global.social") }}
				</h3>
				<ul class="text-brand-darkerGrey font-medium">
					<li>
						<RouterLink
							to="/sports/home"
							class="hover:text-white transition"
							>{{ $t("primary_sidebar.blog") }}</RouterLink
						>
					</li>
					<li>Instagram</li>
					<li>X</li>
				</ul>
			</div>
			<div>
				<h3 class="text-white mb-[24px] text-lg font-semibold">
					{{ $t("global.about_us") }}
				</h3>
				<ul class="text-brand-darkerGrey font-medium">
					<li>Blog</li>
					<li>License</li>
					<li>Live Support</li>
					<li>Help Center</li>
				</ul>
			</div>
			<div>
				<h3 class="text-white mb-[24px] text-lg font-semibold">
					{{ $t("global.preferences") }}
				</h3>
				<!-- <AppFooterLanguageMenu /> -->
				<!-- <AppFooterOddsSelector /> -->
			</div>
		</div>
		<div class="border-[#303D4B] border-t border-b py-[32px] max-w-7xl mx-auto">
			<div class="flex flex-wrap justify-center mb-[25px]">
				<img src="/img/logos/litecoin.png" />
				<img src="/img/logos/bitcoin.png" />
				<img src="/img/logos/ethereum.png" />
				<img src="/img/logos/tron.png" />
				<img src="/img/logos/ripple.png" />
			</div>
			<div class="flex flex-wrap justify-center">
				<img src="/img/logos/dogecoin.png" />
				<img src="/img/logos/bitcoincash.png" />
				<img src="/img/logos/tether.png" />
				<img src="/img/responsible-gambling.png" />
				<img src="/img/18+.png" />
			</div>
		</div>
		<div class="max-w-2xl mx-auto text-center text-brand-darkerGrey pt-[32px]">
			<p>{{ $t("footer.copy") }}</p>
		</div>
		<div class="flex justify-center py-[32px]">
			<img src="/img/ColorWhite_Full.png" class="w-[120px]" />
		</div>
		<p class="text-brand-darkerGrey text-center mb-[16px] text-sm">
			{{ $t("global.support") }}
			<a
				href="mailto:support@betlongshot.com"
				class="text-white hover:underline"
				>support@betlongshot.com</a
			>
			| {{ $t("global.partners") }}
			<a
				href="mailto:support@betlongshot.com"
				class="text-white hover:underline"
				>partners@betlongshot.com</a
			>
			| {{ $t("global.press") }}
			<a
				href="mailto:support@betlongshot.com"
				class="text-white hover:underline"
				>press@betlongshot.com</a
			>
		</p>
		<p class="text-brand-darkerGrey text-center text-sm">
			© 2024 betlongshot.com | {{ $t("footer.all_rights_reserved") }}.
		</p>
	</div>
</template>
<style>
</style>
