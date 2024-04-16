<script setup>
import { Transition } from "vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import PrimaryButton from "../Buttons/PrimaryButton.vue";

const model = defineModel()

defineProps({
  error: ''
})

</script>

<template>
  <div class="relative">
    <VueDatePicker v-model="model" v-bind="$attrs" teleport-center menu-class-name="app-calendar" dark
      :enable-time-picker="false">
      <template #action-row="{ selectDate }">
        <div class="inline-block w-full">
          <PrimaryButton class="float-end" @click="selectDate">Select</PrimaryButton>
        </div>
      </template>
    </VueDatePicker>
    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
      <p v-if="error" class="text-red-500 font-medium pt-2 bg-dark rounded-b-lg w-full">
        <i class="fa-solid fa-times mr-2" />{{ error }}
      </p>
    </Transition>
  </div>
</template>


<style>
.date-input {
  background-color: #0E1725;
  border: 1px solid #273646;
  font-family: sans-serif;
  font-weight: 400;
  color: #d9dfe8;
  padding: 8px 12px !important;
  border-radius: 5px !important;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25) !important;
}

.app-calendar {
  background-color: #0E1725;
  border: 1px solid #273646;
  font-family: sans-serif;
  font-weight: 400;
  color: #d9dfe8;
}
</style>