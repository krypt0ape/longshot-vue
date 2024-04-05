<script setup>
import { useUserStore } from "@/stores/useUserStore";
import Modal from '@/components/Modal.vue'
import WalletRiskKycCheck from '@/components/WalletRiskKycCheck.vue'
import WalletRiskKycPending from '@/components/WalletRiskKycPending.vue'
import WalletRiskAmlCheck from '@/components/WalletRiskAmlCheck.vue'
import WalletRiskAmlPending from '@/components/WalletRiskAmlPending.vue'
import WalletRiskWithdrawOnly from '@/components/WalletRiskWithdrawOnly.vue'
import WalletRiskBlocked from '@/components/WalletRiskBlocked.vue'
import WalletDeposit from '@/components/WalletDeposit.vue'
import WalletWithdraw from '@/components/WalletWithdraw.vue'
import WalletBuy from '@/components/WalletBuy.vue'
import PrimaryTab from "./Tabs/PrimaryTab.vue";
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import SecondaryButton from "./Buttons/SecondaryButton.vue";

const route = useRoute()
const router = useRouter()

const store = useUserStore();
const activeTab = computed(() => route.query.modal === 'wallet' ? route.query.tab : null)

const components = {
  WalletRiskKycCheck,
  WalletRiskKycPending,
  WalletRiskAmlCheck,
  WalletRiskAmlPending,
  WalletRiskWithdrawOnly,
  WalletRiskBlocked,
  WalletDeposit,
  WalletWithdraw,
  WalletBuy
}

const activeComponent = computed(() => {
  if (!open.value) {
    return null
  }
  switch (store.user.riskStatus) {
    case 'OK':
      switch (activeTab.value) {
        case 'deposit':
          return components.WalletDeposit
        case 'withdraw':
          return components.WalletWithdraw
        case 'buy crypto':
          return components.WalletBuy
        default:
          throw new Error('Unknown WalletModal Tab component')
      }
    case 'ACTION_REQUIRED':
      switch (store.user.riskManagement.amlStatus) {
        case 'NOT_STARTED':
          return components.WalletRiskAmlCheck
        case 'PENDING':
          return components.WalletRiskAmlPending
        case 'COMPLETED':
          switch (store.user.riskManagement.kycStatus) {
            case 'NOT_STARTED':
              return components.WalletRiskKycCheck
            case 'PENDING':
              return components.WalletRiskKycPending
            default:
              throw new Error('Unknown riskManagement kycStatus case')
          }
        default:
          throw new Error('Unknown riskManagement amlStatus case')
      }
    case 'WITHDRAW_ONLY':
      return components.WalletRiskWithdrawOnly
    case 'BLOCKED':
      return components.WalletRiskBlocked
    default:
      throw new Error('Unknown user riskStatus case')
  }
})

const tabs = computed(() => (
  [
    {
      title: "deposit",
      active: activeTab.value === "deposit",
      action: () => router.replace({ query: { modal: 'wallet', tab: 'deposit' } }),
    },
    {
      title: "withdraw",
      active: activeTab.value === "withdraw",
      action: () => router.replace({ query: { modal: 'wallet', tab: 'withdraw' } }),
    },
    {
      title: "buy crypto",
      active: activeTab.value === "buy crypto",
      action: () => router.replace({ query: { modal: 'wallet', tab: 'buy crypto' } }),
    },
  ]
));

const open = computed(() => route.query.modal === 'wallet')

const close = () => {
  router.replace({ query: null })
}

</script>
<template>
  <Modal v-if="store.user" :open="open" @close="close">
    <template #dialog-title>
      <div class="bg-brand-dark-light flex py-6 px-10">
        <h2 class="text-2xl font-medium">
          <i class="fa-solid fa-wallet text-brand-grey mr-2" />
          <span class="text-white">Your Wallet</span>
        </h2>
      </div>
    </template>
    <div class="grid grid-cols-3 bg-brand-dark space-x-4 bg-brand-darkBg pt-6 px-10">
      <PrimaryTab v-for="(tab, index) in tabs" :key="index" :item="tab" />
    </div>
    <div class="bg-brand-dark-light pt-7">
      <component :is="activeComponent" />
      <div v-if="true" class="col-span-12 bg-brand-darkBg px-10 pt-5 pb-7">
        <p class="text-sm font-bold">
          Improve your account security with Two-Factor Authentification
        </p>
        <SecondaryButton class="mt-3">Enable 2FA</SecondaryButton>
      </div>
    </div>
  </Modal>
</template>
