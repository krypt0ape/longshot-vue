<script setup>
import PrimaryButton from "./Buttons/PrimaryButton.vue";
import Input from "@/components/Form/Input.vue";
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import useApi from "@/composables/useApi";
import RichTextRenderer from "contentful-rich-text-vue-renderer";
import AuthModal from "./AuthModal.vue";

const { locale, locales, t } = useI18n();

const { loading, error, data } = useApi("post", "/contentful/entries", {
	content_type: "policy",
	"fields.slug": "terms-and-conditions",
	locale: locale.value !== "en" ? locale.value : "en-US",
});

onMounted(async () => {});

const terms = computed(() => {
	if (!data.value) return null;
	return data.value.items[0];
});

const accept = ref(false);

const toggleAccept = () => {
	accept.value = !accept.value;
};

const submit = async (s) => {
	if (valid(s)) {
		step.value += s;
	}

	if (step.value === 3) {
		await store.completeRegistration({
			...form.value,
			affiliateCode: "",
			signupCode: "",
		});
		router.go();
	}
};

const show = computed(() => {
	if (!store?.user) {
		return false;
	}

	return store?.user?.acceptedTerms !== 1;
});
</script>
<template>
	<AuthModal :show="show">
		<template #header>
			<p class="font-semibold">Step 2/2</p>
			<p class="font-medium text-sm">Accept Terms & Conditions</p>
		</template>
		<div class="">
			<h2 class="text-3xl text-brand-lightGrey font-medium tracking-wide">
				Terms And Conditions
			</h2>
			<p>Read and accept the terms and conditions to start playing.</p>
			<div class="mt-2" v-if="terms">
				<RichTextRenderer
					v-for="(document, index) in terms.fields.content.content"
					:key="index"
					:document="document"
				/>
			</div>
			<div
				class="mt-4 absolute bottom-0 left-0 right-0 px-8 pb-6 pt-4 bg-brand-accentBgHeader"
			>
				<div
					class="flex cursor-pointer no-select items-center mb-4"
					@click="toggleAccept"
				>
					<i
						v-if="accept"
						class="fa-solid fa-square-check text-brand-lightGrey text-2xl"
					></i>
					<i v-else class="far fa-square text-brand-lightGrey text-2xl"></i>

					<p class="ml-4 text-brand-lightGrey">
						I Have Read And Agree To The Terms And Conditions
					</p>
				</div>
				<PrimaryButton type="button" class="!w-full !py-4">
					Accept Terms
				</PrimaryButton>
			</div>
		</div>
	</AuthModal>
</template>
