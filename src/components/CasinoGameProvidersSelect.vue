<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import {watch} from 'vue';
import PopoverStateWatcher from '@/components/PopoverStateWatcher.vue';

const props = defineProps({
	selected: Array,
});
const emit = defineEmits(['update', 'close']);

// TODO replace with BE query
const providers = [
	{
		indentifier: "1x2gaming",
		title: "1x2 Gaming (Iron Dog, Leap Gaming)",
		count: 12,
	},
	{
		indentifier: "3oaks",
		title: "3oaks (Booongo)",
		count: 4,
	},
	{
		indentifier: "avatarux",
		title: "AvatarUX",
		count: 11,
	},
];

const format = (val) => {
	// Removes the (Iron Dog, Leap Gaming) part from the title
	return val.split("(")[0].trim();
};

const updateSelected = (identifier) => {
	emit("update", identifier);
};

const onPopoverChange = (open) => {
	if(! open){
		emit("close");
	}
};
</script>
<template>
	<Popover v-slot="{ open }" class="relative z-50" @close="handleClose">
		<PopoverStateWatcher :open="open" @change="onPopoverChange(open)" />
		<PopoverButton
			:class="open ? 'text-white' : 'text-white/90'"
			class="group inline-flex items-center rounded-md focus:ring-0 focus:ring-offset-0 px-3 py-2 text-base font-medium hover:text-white bg-brand-accentBgHeader border border-[#273646] focus:outline-none focus-visible:ring-0"
		>
			<p class="ml-3 font-medium hidden lg:block">Providers</p>
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
				class="absolute right-0 z-10 mt-3 w-[250px] transform px-4 sm:px-0"
			>
				<div
					class="overflow-hidden border border-[#273646] rounded-lg shadow-lg text-brand-dark font-medium  pt-4 bg-[#182330] text-brand-lightGrey"
				>
					<div
						v-for="provider in providers"
						:key="provider.indentifier"
						class="flex justify-between text-lg  py-3  px-6"
					>
						<div
							class="flex cursor-pointer no-select items-center"
							@click="updateSelected(provider.indentifier)"
						>
							<i
								v-if="selected.includes(provider.indentifier)"
								class="fa-solid fa-square-check text-brand-lightGrey text-2xl"
							></i>
							<i v-else class="far fa-square text-brand-lightGrey text-2xl"></i>

							<p class="ml-4">{{ format(provider.title) }}</p>
							<p class="ml-4 rounded-full px-2 "  :class="[selected.includes(provider.indentifier) ? 'bg-brand-purple text-grey' : 'bg-brand-grey text-brand-darkBg']">{{ provider.count }}</p>
						</div>
					</div>
					<a @click="updateSelected(false)" class="border-t border-[#273646] py-2 mt-4 text-lg  cursor-pointer hover:text-brand-grey text-center block">Clear All</a>
				</div>
			</PopoverPanel>
		</transition>
	</Popover>
</template>
@/components/PopoverStateWatcher