<template>
  <TransitionRoot appear :show="false" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <div class="cr-modal rounded-2xl w-1/3">
              <DialogPanel
                class="w-full transform overflow-hidden rounded-2xl bg-brand-bodyBg p-6 text-left align-middle shadow-xl transition-all ">
                <DialogTitle as="h3" class="text-md font-thin text-white">
                  Complete Registration
                </DialogTitle>
                <TransitionRoot :show="step === 1" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                  enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                  leave-to="opacity-0 scale-95">
                  <div class="mt-2">
                    <p class="text-lg text-center text-gray-500">
                      Step 1/2: Fill out your details
                    </p>
                    <Input class="mt-1 w-full" placeholder="Please choose a nickname *" />
                  </div>

                  <div class="mt-4">
                    <button type="button"
                      class="w-full inline-flex justify-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-lg font-bold text-brand-accentStroke hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      @click="() => submit(1)">
                      Continue
                    </button>
                  </div>
                </TransitionRoot>
                <TransitionRoot :show="step === 2" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                  enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                  leave-to="opacity-0 scale-95">
                  <div class="mt-2">
                    <p class="text-lg text-center text-gray-500">
                      <i @click="() => submit(-1)" class="fa-solid fa-arrow-left ml-2 text-white cursor-pointer"
                        float-left /> Step 2/2: Read and accept the terms and conditions
                    </p>
                    <p class="text-sm text-white font-thin">
                      EULA
                      <br>...
                      <br>...
                      <br>...
                      <br>...
                      <br>...
                      <br>...
                      <br>...
                      <br>...
                      <br>...
                      <br>...
                      <br>...
                      <br>...
                      <br>...
                      <br>...
                      <br>...
                      <br>...
                      <br>...
                      <br>...
                      <br>...
                      <br>...
                      EULA
                    </p>
                  </div>
                  <div class="mt-4">
                    <button type="button"
                      class="w-full inline-flex justify-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-lg font-bold text-brand-accentStroke hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      @click="() => submit()">
                      Play Now
                    </button>
                  </div>
                </TransitionRoot>
              </DialogPanel>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup>
import { computed, ref, onMounted } from "vue";
import Input from "@/components/Form/Input.vue";
import useUserStore from "@/stores/useUserStore";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const store = useUserStore();

const user = ref()
const step = ref(1)

onMounted(async () => {
  console.log(store)
  user.value = await store.getUser()
  console.log(store)
})

const submit = (s) => {
  step.value += s
}

const show = computed(() => {
  return store?.user?.registration !== 'COMPLETE';
});

</script>

<style lang="scss" scoped>
.cr-modal {
  background: linear-gradient(180deg, #FA00FF 0%, #6A2B74 100%);
  padding: 2px;
}
</style>