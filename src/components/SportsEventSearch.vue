<script setup>
import { computed, ref } from "vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import {
	Combobox,
	ComboboxInput,
	ComboboxOptions,
	ComboboxOption,
	Dialog,
	DialogPanel,
	TransitionChild,
	TransitionRoot,
} from "@headlessui/vue";

const people = [
	{ id: 1, name: "Leslie Alexander", url: "#" },
	// More people...
];

const open = ref(true);
const query = ref("");
const filteredPeople = computed(() =>
	query.value === ""
		? []
		: people.filter((person) => {
				return person.name.toLowerCase().includes(query.value.toLowerCase());
		  })
);

function onSelect(person) {
	window.location = person.url;
}
</script>
<template>
	<div class="sports-event-search ">
		<Combobox @update:modelValue="onSelect">
			<div class="relative">
				<MagnifyingGlassIcon
					class="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
					aria-hidden="true"
				/>
				<ComboboxInput
					class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-band-light  placeholder:text-gray-400 focus:ring-0 sm:text-sm"
					placeholder="Search For An Event"
					@change="query = $event.target.value"
				/>
			</div>

			<ComboboxOptions
				v-if="filteredPeople.length > 0"
				static
				class="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
			>
				<ComboboxOption
					v-for="person in filteredPeople"
					:key="person.id"
					:value="person"
					as="template"
					v-slot="{ active }"
				>
					<li
						:class="[
							'cursor-default select-none px-4 py-2',
							active && 'bg-indigo-600 text-white',
						]"
					>
						{{ person.name }}
					</li>
				</ComboboxOption>
			</ComboboxOptions>

			<p
				v-if="query !== '' && filteredPeople.length === 0"
				class="p-4 text-sm text-gray-500"
			>
				No people found.
			</p>
		</Combobox>
	</div>
</template>
<style>
.sports-event-search {
	border-radius: 10px;
border: 1px solid var(--Accent-Stroke, #273646);
background: var(--Accent-BG-Grey, #182330);
}
</style>