<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { computed } from "vue";
import PopoverStateWatcher from '@/components/PopoverStateWatcher.vue';

const props = defineProps({
	selected: String,
});
const emit = defineEmits(["update:selected", "close"]);
const options = {
	az: "A-Z",
	za: "Z-A",
	popular: "Popularity",
	featured: "Featured",
};

const updateSelected = (val) => {
	emit("update:selected", val);
};

const onPopoverChange = (open) => {
	if(! open){
		emit("close");
	}
};
</script>
<template>
	<Popover v-slot="{ open }" class="relative z-50">
		<PopoverStateWatcher :open="open" @change="onPopoverChange(open)" />
		<PopoverButton
			:class="open ? 'text-white' : 'text-white/90'"
			class="group inline-flex items-center rounded-md focus:ring-0 focus:ring-offset-0 px-3 py-2 text-base font-medium hover:text-white bg-brand-accentBgHeader border border-[#273646] focus:outline-none focus-visible:ring-0"
		>
			<p class="ml-3 font-medium hidden lg:block">
				{{ options[props.selected] }}
			</p>
			<ChevronDownIcon
				class="ml-2 h-6 w-6 transition duration-150 ease-in-out text-brand-darkerGrey"
				aria-hidden="true"
			/>
		</PopoverButton>

		<transition
			enter-active-class="transition duration-200 ease-out"
			enter-from-class="translate-y-1 opacity-0"
			enter-to-class="translate-y-0 opacity-100"
			leave-active-class="transition duration-150 ease-in"
			leave-from-class="translate-y-0 opacity-100"
			leave-to-class="translate-y-1 opacity-0"
		>
			<PopoverPanel
				class="absolute right-0 z-10 mt-3 w-[200px] transform px-4 sm:px-0"
			>
				<div
					class="overflow-hidden border border-[#273646] rounded-lg shadow-lg text-brand-dark font-medium py-2 bg-[#182330] text-brand-lightGrey"
				>
					<div
						v-for="(value, key) in options"
						:key="value"
						class="flex justify-between text-lg py-3 px-6"
					>
						<div
							class="flex cursor-pointer no-select items-center"
							@click="updateSelected(key)"
						>
							<i
								v-if="selected === key"
								class="fa-solid fa-circle-dot text-brand-lightGrey text-lg"
							></i>
							<i v-else class="far fa-circle text-brand-lightGrey text-lg"></i>

							<p class="ml-4">{{ value }}</p>
						</div>
					</div>
				</div>
			</PopoverPanel>
		</transition>
	</Popover>
</template>
