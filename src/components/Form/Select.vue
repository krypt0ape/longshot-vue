<template>
	<Listbox as="div" v-model="selected">
	  <div class="relative ">
		<ListboxButton class="relative w-full cursor-default rounded-xl bg-brand-dark  py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm  focus:outline-none sm:text-sm sm:leading-6">
		  <span class="block truncate text-brand-light ">{{ selected.name }}</span>
		  <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
			<ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
		  </span>
		</ListboxButton>
  
		<transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
		  <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg  focus:outline-none sm:text-sm">
			<ListboxOption as="template" v-for="person in props.options" :key="person.id" :value="person" v-slot="{ active, selected }">
			  <li :class="[active ? 'bg-indigo-600 text-white' : 'text-brand-darkerGrey', 'relative cursor-default select-none py-2 pl-3 pr-9']">
				<span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ person.name }}</span>
			  </li>
			</ListboxOption>
		  </ListboxOptions>
		</transition>
	  </div>
	</Listbox>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
  import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
  
const props = defineProps({
	options: 'required',
})

const selected = ref(props.options[0])
  </script>