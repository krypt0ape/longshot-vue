<template>
  <Listbox as="div" v-model="selected">
    <div class="relative ">
      <ListboxButton
        class="app-input relative w-full rounded-xl bg-brand-darkBg border-2 border-brand-accentStroke cursor-pointer py-1.5 pl-3 pr-10 text-left text-brand-grey shadow-sm  focus:outline-none sm:text-sm sm:leading-6">
        <span class="block truncate text-brand-light ">{{ selected?.[titleKey] || placeholder }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <Transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <ListboxOptions
          class="py-4 cursor-pointer absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-brand-darkBg text-base shadow-lg  focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="option in props.options" :key="option[valueKey]" :value="option"
            v-slot="{ active, selected }">
            <li
              :class="[active ? 'bg-brand-sidebarBg font-semibold' : '', 'text-brand-darkerGrey relative cursor-default select-none py-2 pl-5 pr-9']">
              <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ option[titleKey]
                }}</span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </Transition>
      <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
        <p v-if="error" class="text-red-500 font-medium pt-2 bg-dark rounded-b-lg w-full">
          <i class="fa-solid fa-times mr-2" />{{ error }}
        </p>
      </Transition>
    </div>
  </Listbox>
</template>

<script setup>
import { defineModel, Transition, ref } from 'vue'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import { watch } from 'vue';

const model = defineModel()
const selected = ref()
const props = defineProps({
  options: {
    type: Array,
    required: true,
    description: '[{value: string, title: string}]'
  },
  placeholder: '',
  error: '',
  valueKey: {
    type: String,
    default: 'value'
  },
  titleKey: {
    type: String,
    default: 'title'
  }
})

watch(selected, (nVal) => {
  if (!nVal) {
    model.value = null
    return
  }
  model.value = nVal?.[props.valueKey]
})
</script>