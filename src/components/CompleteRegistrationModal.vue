<template>
  <Modal :open="show">
    <template #dialog-title>
      <div class="bg-brand-dark-light flex py-6 px-10">
        <h2 class="text-2xl font-medium">
          <i class="fa-duotone fa-dice text-brand-grey mr-2" />
          <span class="text-white">Complete Registration</span>
        </h2>
      </div>
    </template>
    <div class="p-10 pt-2">
      <TransitionRoot :show="step === 1" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
        leave-to="opacity-0 scale-95">
        <div class="mt-2">
          <p class="text-lg text-center text-gray-500">
            Step 1/2: Fill out your details
          </p>
          <Input class="mt-1 w-full" placeholder="Please choose a nickname *" v-model="form.nickname" :error="error" />
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
            <i @click="() => submit(-1)" class="fa-solid fa-arrow-left ml-2 text-white cursor-pointer" float-left />
            Step
            2/2:
            Read and accept the terms and conditions
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
        <p>
          <Input type="checkbox" v-model="form.acceptedTerms" :error="error"
            label="I have read and agree to the terms and conditions" />
        </p>
        <div class="mt-4">
          <button type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-lg font-bold text-brand-accentStroke hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            @click="() => submit(1)">
            Play Now
          </button>
        </div>
      </TransitionRoot>
      <TransitionRoot :show="step === 3" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
        leave-to="opacity-0 scale-95">
        <div class="flex justify-center my-10" role="status">
          <svg aria-hidden="true" class="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor" />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill" />
          </svg>
        </div>
      </TransitionRoot>
    </div>
  </Modal>
</template>
<script setup>
import Input from "@/components/Form/Input.vue";
import Modal from "./Modal.vue";
import { computed, ref, onMounted } from "vue";
import { useUserStore } from "@/stores/useUserStore";
import { TransitionRoot } from '@headlessui/vue'
import { useRouter } from "vue-router";

const store = useUserStore();
const error = ref('')
const step = ref(1)
const form = ref({ acceptedTerms: false, nickname: '' })
const router = useRouter()

onMounted(async () => {
  await store.getUser()
})

const submit = async (s) => {
  if (valid(s)) {
    step.value += s
  }

  if (step.value === 3) {
    await store.completeRegistration({
      ...form.value,
      affiliateCode: "",
      signupCode: ""
    })
    router.go()
  }
}

const valid = (s) => {
  error.value = ''

  if (s < 0) {
    return true
  }

  switch (step.value + s) {
    case 2:
      error.value = form.value.nickname.length > 3 && form.value.nickname.length <= 200 ? '' : 'Nickname is required'
      break;
    case 3:
      error.value = form.value.acceptedTerms ? '' : 'Please read terms and conditions in full and accept to proceed'
      break;
    default:
      throw new Error(step.value + s)
  }

  return !Boolean(error.value.length)
}

const show = computed(() => {
  if (!store?.user) {
    return false
  }

  return store?.user?.registration !== 'COMPLETE'
});

</script>