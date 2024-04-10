<template>
  <div class="grid px-10 pb-7">
    <div class="col-span-12">
      <Select v-model="currency" label="Deposit currency" class="mx-auto w-1/3" :options="currencies"
        :disabled="loadingCurrencies" value-key="ISO" placeholder="Select Currency" title-key="ISO" />
    </div>
    <div v-if="currency" class="col-span-12 mt-6">
      <div class="mt-3">
        <Input label="Your BTC deposit address" ref="addressInput" :readonly="true" v-model="wallet.address">
        <template #right>
          <i class="mr-3 cursor-pointer fa-duotone fa-arrows-rotate" @click="() => refresh(true)"></i>
          |
          <i class="mx-3 cursor-pointer fa-duotone fa-copy" @click="copy"></i>
        </template>
        </Input>
      </div>
      <vue-qrcode v-if="wallet?.address" :value="wallet.address" class="qr" :width="200" />
      <p class="text-xs font-bold">
        Only send BTC to this address, 1 confirmation required
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import useAsyncApi from "@/composables/useAsyncApi";
import Select from "./Form/Select.vue";
import Input from "./Form/Input.vue";
import VueQrcode from 'vue-qrcode'

const { call: getCurrencies, loading: loadingCurrencies } = useAsyncApi('get', '/currency/list')
const { call: getWallet, loadingAddress } = useAsyncApi('get', '/wallet/deposit/wallet')

const currencies = ref([])
const currency = ref()
const addressInput = ref()
const wallet = ref({})

const copy = async () => {
  addressInput.value.input.select();
  addressInput.value.input.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(addressInput.value.input.value);
  if (window.getSelection) {
    if (window.getSelection().empty) {  // Chrome
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) {  // Firefox
      window.getSelection().removeAllRanges();
    }
  } else if (document.selection) {  // IE?
    document.selection.empty();
  }
}

const refresh = async (force = false) => {
  wallet.value = await getWallet(undefined, '', { ISO: currency.value, force })
}

onMounted(async () => {
  const data = await getCurrencies()
  currencies.value = data.rows
})

watch(currency, (nVal) => {
  if (!nVal) {
    return
  }
  refresh()
})
</script>

<style scoped>
.qr {
  display: block;
  width: 200px;
  margin: 3rem auto;
  border-radius: 5px;
}
</style>