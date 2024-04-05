<template>
  <div class="grid px-10 pb-7">
    <div class="col-span-12">
      <Select v-model="currency" class="mx-auto w-1/3" :options="currencies.rows" :disabled="loadingCurrencies"
        value-key="ISO" placeholder="Select Currency" title-key="ISO" />
    </div>

    <div class="col-span-12">
      <Input v-model="address" :label="addressLabel" class="mt-6" />
      <Input v-model="amount" label="Amount" class="mt-6 amount-input" type="number">
      <template #right>
        <SecondaryButton class="rounded-l-none ammount-button">Max</SecondaryButton>
      </template>
      </Input>
      <PrimaryButton class="mt-6">Re-verify with Google</PrimaryButton>
      <p class="text-xs font-bold mt-6">
        Minimum withdrawal is $3.27. Your withdrawal will have $5.24 subtracted from your remaining balance to cover the
        fee
        required to process the transaction.
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import useAsyncApi from "@/composables/useAsyncApi";
import Select from "./Form/Select.vue";
import Input from "./Form/Input.vue";
import PrimaryButton from "./Buttons/PrimaryButton.vue";
import SecondaryButton from "./Buttons/SecondaryButton.vue";

const addressLabel = computed(() => currency.value ? `${currency.value} address` : 'Wallet address')
const currencies = ref([])
const currency = ref()
const amount = ref(0)

const { call, loading } = useAsyncApi('get', '/currency/list')

onMounted(async () => {
  const data = await call()
  currencies.value = data
})

</script>

<style lang="scss">
.amount-input {
  input {
    padding-right: 80px !important;
  }
}
</style>

<style scoped lang="scss">
.ammount-button {
  height: 100%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>