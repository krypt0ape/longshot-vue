<template>
	<Modal :open="show" :cross="false" class="max-w-xl">
		<template #dialog-title>
			<div
				class="px-6 py-4 bg-brand-accentBgHeader flex justify-between items-center"
			>
				<img src="/img/ColorWhite_Full.png" class="w-[100px]" />
				<div class="text-brand-grey text-right">
					<p class="font-semibold">Step {{ step }}/2</p>
					<p v-if="step === 1 " class="font-medium text-sm">
						Fill out your details
					</p>
					<p v-else-if="step === 2 " class="font-medium text-sm">
						Accept Terms & Conditions
					</p>
				</div>
			</div>
		</template>
		<div class="px-6 py-4 bg-brand-darkBg">
			<div class="mb-10 mt-2">
				<ProgressBar :fill-percent="fillPercent" />
			</div>
			<CompleteRegistrationModalStepOne v-if="step == 1" />
			<CompleteRegistrationModalStepTwo v-else-if="step == 2" />
		</div>
	</Modal>
</template>
<script setup>
import Modal from "./Modal.vue";
import { computed, ref, onMounted } from "vue";
import { useUserStore } from "@/stores/useUserStore";
import { useRouter } from "vue-router";
import ProgressBar from "./ProgressBar.vue";
import CompleteRegistrationModalStepOne from "./CompleteRegistrationModalStepOne.vue";
import CompleteRegistrationModalStepTwo from "./CompleteRegistrationModalStepTwo.vue";

const store = useUserStore();
const router = useRouter();

onMounted(async () => {
	await store.getUser();
});

const step = computed(()=>{
	if(store?.user?.registration === "COMPLETE" &&  ! store?.sure?.acceptedTerms){
		return 2
	}
	return 2;
});

const show = computed(() => {
	if (!store?.user) {
		return false;
	}

	return store?.user?.registration !== "COMPLETE" || ! store?.sure?.acceptedTerms;
});

const fillPercent = computed(()=>{
	return step.value === 1 ? 50 : 100
})
</script>
