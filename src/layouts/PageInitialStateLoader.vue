<script setup>
import { computed, onMounted, ref } from "vue";
import useAsync from "@/composables/useAsync";
import useUserStore from "@/stores/useUserStore";
import { useLocalStorage } from "@/composables/useLocalStorage";
import useIpApi from "@/composables/useIpApi";
import { decodeCredential } from "vue3-google-login";
import useAsyncApi from "@/composables/useAsyncApi";
import { LottieAnimation } from "lottie-web-vue";
import LoaderJSON from "../lottie/LongShotLoderFaster.json";

const ls = useLocalStorage();
const { call: callIpApi } = useIpApi();

const userStore = useUserStore();

// Delay is added here to ensure the loader anim can finish
const { loading, error, call } = useAsync(userStore.getUser, 1500);
call();
onMounted(async () => {
	
	//ls.set('COUNTRY_CODE', (await callIpApi()).countryCode)
});

const errorMessage = computed(() => {
	if (!error) return null;
	if (error.response && error.response.data && error.response.data.message) {
		return error.response.data.message;
	}
	return error.message;
});

let anim = ref();
</script>
<template>
	<div>
		<div
			v-if="error"
			class="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center"
		>
			<div class="bg-red-500 opacity-75 rounded-xl m-12 text-white p-4">
				<p class="text-lg">{{ errorMessage }}</p>
				<p class="text-brand-lightGrey">
					Please refresh the page, if the error persits please contact support.
				</p>
			</div>
		</div>
		<transition name="fade">
			<div
				v-if="loading"
				class="fixed top-0 left-0 w-screen h-screen z-[100] flex items-center justify-center bg-brand-bodyBg"
			>
				<div class="w-[350px]">
					<LottieAnimation
						:animation-data="LoaderJSON"
						:auto-play="true"
						:loop="true"
						:speed="1"
						ref="anim"
					/>
				</div>
			</div>
		</transition>
		<slot v-if="!error && !loading" />
	</div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
	opacity: 1;
}
</style>
