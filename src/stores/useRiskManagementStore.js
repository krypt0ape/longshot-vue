import { defineStore } from "pinia";
import {ref, computed} from "vue";
import {useRoute, useRouter} from "vue-router";

export default defineStore("riskManagement", () => { 
	const route = useRoute();
	const router = useRouter();

	const walletModalOpen = computed(() => {
		return route.query.modal === "wallet";
	});

	const toggleWalletModal = () => {
		if (walletModalOpen.value) {
			// close modal
			router.replace({ query: {} });
		} else {
			// open modal
			router.replace({ query: { modal: "wallet" } });
		}
	};	



	return {
		walletModalOpen,
		toggleWalletModal
	}
})