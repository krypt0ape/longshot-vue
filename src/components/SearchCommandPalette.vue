<template>
	<div>
		<a
			@click="open = true"
			class="flex transition items-center hover:bg-brand-accentStroke cursor-pointer bg-brand-accentBgHeader text-brand-grey px-[32px] py-[16px] rounded-lg border border-brand-accentStroke"
		>
			<i class="fa-solid fa-magnifying-glass mr-4"></i>
			<p class="pt-1">{{ label }}</p>
		</a>
		<TransitionRoot :show="open" as="template" @after-leave="query = ''" appear>
			<Dialog as="div" class="relative z-50" @close="open = false">
				<TransitionChild
					as="template"
					enter="ease-out duration-300"
					enter-from="opacity-0"
					enter-to="opacity-100"
					leave="ease-in duration-200"
					leave-from="opacity-100"
					leave-to="opacity-0"
				>
					<div
						class="fixed inset-0 bg-brand-sidebarBg bg-opacity-[0.9] transition-opacity"
					/>
				</TransitionChild>

				<div
					class="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20"
				>
					<TransitionChild
						as="template"
						enter="ease-out duration-300"
						enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100"
						leave="ease-in duration-200"
						leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95"
					>
						<DialogPanel
							class="mx-auto max-w-5xl mt-[150px] transform  overflow-hidden rounded-xl bg-brand-bodyBg px-8 py-8 pb-12 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
						>
							<div>
								<Input
									class="mt-1 text-brand-grey w-full !py-3 text-lg rounded-lg"
									v-model="model"
									:error="error"
									:placeholder="label"
								>
									<template #left
										><i class="fa-solid fa-magnifying-glass mr-4 ml-2 mt-1 text-brand-grey"></i
									></template>
									<div class="mt-3 mr-0.5">
										<NeutralButton @click="search">
											Search
										</NeutralButton>
									</div>
								</Input>
							</div>
							<div v-if="searchHistory" class="mt-4 mx-4">
								<div class="flex mb-1 justify-between text-brand-grey">
									<p>Recent Searches</p>
									<a @click="clearSearchHistory" class="hover:text-white cursor-pointer transition">Clear History ({{searchHistory.length}})</a>
								</div>
								<div class="flex space-x-2">
									<a v-for="item in searchHistory" @click="searchFromHistory(item)"  :key="item" class="hover:bg-brand-sidebarBg rounded-full px-3 py-0.5 text-brand-grey transition cursor-pointer bg-brand-accentBgHeader">{{ item }}</a>
								</div>
							</div>
							<slot />
						</DialogPanel>
					</TransitionChild>
				</div>
			</Dialog>
		</TransitionRoot>
	</div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import NeutralButton from '@/components/Buttons/NeutralButton.vue';
import Input from "@/components/Form/Input.vue";
import {
	Dialog,
	DialogPanel,
	TransitionChild,
	TransitionRoot,
} from "@headlessui/vue";

const props = defineProps({
	label: String,
	historyKey: String,
});

const emit = defineEmits(["search", "clear"]);

const model = define();

const search = () => {
	addSearchHistory(model.value);
	emit("search");
};

const searchFromHistory = (term) => {
	model.value = term;
	search(term);
}

const open = ref(false);

const searchHistory = ref([]);

const addSearchHistory = (term) => {
	if(! term) return;
	if(searchHistory.value.includes(term)) return;

	const newHistory = [term].concat(searchHistory.value);
	searchHistory.value = newHistory;
	
	// Add term to search history in local storage
	window.localStorage.setItem(
		props.historyKey,
		JSON.stringify(searchHistory.value)
	);
}

const clearSearchHistory = () => {
	// Clear search history in local storage
	window.localStorage.removeItem(props.historyKey);
	searchHistory.value = [];
}

const getSearchHistory = () => {
	// Get search history from local storage
	const history = window.localStorage.getItem(props.historyKey);
	searchHistory.value = history ? JSON.parse(history) : [];
}

onMounted(()=>{
	getSearchHistory();
})
</script>
