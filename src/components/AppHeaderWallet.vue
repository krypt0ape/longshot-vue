<script setup>
import WalletBalancesDropdown from "./WalletBalancesDropdown.vue";
import PrimaryButton from "./Buttons/PrimaryButton.vue";
import { onMounted, ref } from "vue";
import useAsyncApi from "@/composables/useAsyncApi";
import { useRouter } from "vue-router";
import useUserStore from "@/stores/useUserStore";

const router = useRouter()

const { call, loading } = useAsyncApi('get', '/currency/list')

const currencies = ref([])

const userStore = useUserStore()
onMounted(async () => {
  //const data = await call()
  //currencies.value = data
})

</script>
<template>
  <div v-if="userStore.user" class="h-full ">
    <div class="hidden sm:flex  items-center space-x-4">
      <WalletBalancesDropdown :currencies="currencies" :loading="loading" />
      <PrimaryButton @click="() => router.replace({ query: { modal: 'wallet', tab: 'deposit' } })">
        Wallet
      </PrimaryButton>
    </div>
    <div class="sm:hidden flex space-x-4 items-center">
      <p class="text-white">0.00</p>
      <i class="fa-solid fa-wallet text-brand-grey"></i>
    </div>
  </div>
</template>
