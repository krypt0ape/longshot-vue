<template>
  <div class="grid px-10 pb-7">
    <div class="col-span-12">
      <Input :value="buyAmount" :label="buyLabel" class="mt-6 amount-input" type="number" :readonly="true">
      <template #right>
        <Select v-model="buyCurrency" class="currency-button" :options="currencies.rows" :disabled="loadingCurrencies"
          value-key="ISO" placeholder="-" title-key="ISO" @input="() => calc('1 select')" />
      </template>
      </Input>
      <Input v-model="payAmount" :label="payLabel" class="mt-6 amount-input" type="number" @input="() => calc('input')">
      <template #right>
        <Select v-model="payCurrency" class="currency-button" :options="currencies.rows" :disabled="loadingCurrencies"
          value-key="ISO" placeholder="-" title-key="ISO" @input="() => calc('2 select')" />
      </template>
      </Input>
      <PrimaryButton class="mt-6 w-full">MoonPay</PrimaryButton>
      <p class="text-xs font-bold mt-6">
        Disclamer: The above third party services can be used to purchase crypto that can be used to play on Stake.
        By registering on their platform, you are also accepting to their terms of servicing and will be required to
        pass
        their KYC
        process, which runs independently to ours.
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

const currencies = ref([])
const buyCurrency = ref()
const payCurrency = ref()
const buyAmount = ref(0)
const payAmount = ref(0)
const buyLabel = computed(() => `Buy ${buyCurrency.value ?? ''}`)
const payLabel = computed(() => `Pay ${payCurrency.value ?? ''}`)

const { call, loading } = useAsyncApi('get', '/currency/list')

onMounted(async () => {
  const data = await call()
  currencies.value = data
})

const calc = (source) => {
  console.log(source)
}

</script>

<style lang="scss">
.amount-input {
  input {
    padding-right: 80px !important;
  }
}

.currency-button {
  button {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
  }

  width: 120px;
  height: 100%;
}
</style>