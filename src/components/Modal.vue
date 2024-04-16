<template>
  <TransitionRoot appear :show="open" as="template">
    <Dialog as="div" class="relative z-50" @close="close">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-">
        <div class="flex h-screen items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <div class="app-modal max-w-4xl w-full   rounded-lg" v-bind="$attrs">
              <DialogPanel
                class="w-full transform text-brand-grey bg-brand-accentBgHeader text-left align-middle shadow-xl transition-all rounded-lg  overflow-hidden"
                :class="{ 'shadow-xl': shadow }">
                <DialogTitle v-if="$slots['dialog-title']" as="h3" class="text-md font-thin">
                  <slot name="dialog-title" />
                </DialogTitle>
                <div v-if="cross" class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button type="button"
                    class="rounded-md text-brand-light hover:text-gray-500 focus:outline-none ring-0"
                    @click="emit('close')">
                    <i class="fa-solid fa-times text-2xl" />
                  </button>
                </div>
				<div class="max-h-[80vh] overflow-auto">
					<slot />
				</div>
              
              </DialogPanel>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

</template>

<script setup>
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'

defineOptions({
  inheritAttrs: false
})

defineProps({
  open: {
    type: Boolean,
    required: true
  },
  cross: {
    type: Boolean,
    default: true
  },
  shadow: {
    type: Boolean,
    default: true
  },
})

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
}
</script>