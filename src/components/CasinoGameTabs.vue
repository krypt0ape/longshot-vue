<template>
	<div class="w-full  pt-16">
	  <div class="mx-auto w-full rounded-2xl bg-brand-accentBgHeader p-2">
		<Disclosure v-slot="{ open }">
		  <DisclosureButton
			class="flex w-full justify-between rounded-lg bg-brand-accentBgHeader px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
		  >
			<span><i class="fa-solid fa-gamepad-modern mr-2 text-brand-grey"></i>{{ gameType.title }}</span>
			<ChevronUpIcon
			  :class="open ? 'rotate-180 ' : 'rotate-[270deg]'"
			  class="h-5 w-5 text-brand-grey transform"
			/>
		  </DisclosureButton>
		  <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
			content
		  </DisclosurePanel>
		</Disclosure>
	  </div>
	</div>
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { ChevronUpIcon } from '@heroicons/vue/20/solid'

  defineProps({
	gameType: String
  })
  </script>
  