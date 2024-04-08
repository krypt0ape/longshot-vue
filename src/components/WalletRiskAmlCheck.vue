<template>
  <div class="px-10">
    <h3 class="text-white pt-1 text-xl">
      Verification
    </h3>
    <p class="py-1 pb-6">
      If your details change, level one verification can be updated a later date.
    </p>
    <div :disabled="true" class="grid gap-4">
      <Input v-model="form.firstname" placeholder="First Name *" class="col-span-6" :error="errors.firstname"
        :disabled="loading" />
      <Input v-model="form.lastname" placeholder="Last Name *" class="col-span-6" :error="errors.lastname"
        :disabled="loading" />
      <DatePicker v-model="form.birthDate" placeholder="Date of Birth (dd/mm/yy) *" class="col-span-6"
        :max-date="maxDate" :min-date="minDate" :error="errors.birthDate"
        input-class-name="date-input app-input text-brand-lightGrey ring-0 focus-visible:outline-none bg-brand-bodyBg border-brand-accentStroke border-solid border-2 text-white"
        hide-input-icon :disabled="loading" />
      <Input v-model="form.occupation" placeholder="Occupaion *" class="col-span-6" :error="errors.occupation"
        :disabled="loading" />
      <Select v-model="form.country" placeholder="Country *" class="col-span-12" :error="errors.country"
        :options="countries" :disabled="loading" />
      <Input v-model="form.city" placeholder="City *" class="col-span-6" :error="errors.city" :disabled="loading" />
      <Input v-model="form.postalCode" placeholder="Postal Code *" class="col-span-6" :error="errors.postalCode"
        :disabled="loading" />
    </div>
    <div class="row-auto mt-2 mb-5 pt-6 pb-10">
      <p class="float-start"><i class="fa-solid fa-shield-keyhole mr-2"></i>All data is safely stored and encrypted</p>
      <PrimaryButton class="float-right" @click="submit" :loading="loading">Continue</PrimaryButton>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Input from './Form/Input.vue';
import DatePicker from './Form/DatePicker.vue';
import Select from './Form/Select.vue';
import PrimaryButton from './Buttons/PrimaryButton.vue';
import { useUserStore } from '@/stores/useUserStore';
import { onMounted } from 'vue';

const store = useUserStore()
const loading = ref(false)

const maxDate = (new Date()).setFullYear((new Date()).getFullYear() - 18)
const minDate = (new Date()).setFullYear((new Date()).getFullYear() - 100)
const countries = computed(() => ([
  { value: 'UK', title: 'United Kingdom' },
  { value: 'ES', title: 'Spain' },
  { value: 'PL', title: 'Poland' }
]))

onMounted(() => {
  form.value = { ...store.user }
})

const valid = () => {
  let valid = true

  if (!form.value.firstname.length) {
    errors.value.firstname = 'First Name is required'
    valid = false
  } else {
    errors.value.firstname = ''
  }

  if (!form.value.lastname.length) {
    errors.value.lastname = 'Last Name is required'
    valid = false
  } else {
    errors.value.lastname = ''
  }

  if (!(form.value.birthDate instanceof Date) && Date.parse(form.value.birthDate) === NaN) {
    errors.value.birthDate = 'Date of Birth is required'
    valid = false
  } else {
    errors.value.birthDate = ''
  }

  if (!form.value.occupation.length) {
    errors.value.occupation = 'Occupation is required'
    valid = false
  } else {
    errors.value.occupation = ''
  }

  if (!form.value.country.length) {
    errors.value.country = 'Country is required'
    valid = false
  } else {
    errors.value.country = ''
  }

  if (!form.value.city.length) {
    errors.value.city = 'City is required'
    valid = false
  } else {
    errors.value.city = ''
  }

  if (!form.value.postalCode.length) {
    errors.value.postalCode = 'Postal Code is required'
    valid = false
  } else {
    errors.value.postalCode = ''
  }

  return valid
}

const submit = async () => {
  if (!valid()) {
    return
  }
  loading.value = true
  await store.completeVerification(form.value)
  loading.value = false
}

const form = ref({ firstname: '', lastname: '', birthDate: null, occupation: '', country: '', city: '', postalCode: '' })
const errors = ref({ firstname: '', lastname: '', birthDate: '', occupation: '', country: '', city: '', postalCode: '' })
</script>