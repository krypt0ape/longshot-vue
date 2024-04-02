<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { computed } from "vue";
import { useLocalStorage } from "@/composables/useLocalStorage";

const openWallet = () => { };

const ls = useLocalStorage()

const props = defineProps({
  loading: Boolean,
  error: String,
  currencies: {
    type: Object,
  },
});

const defaultCurrency = computed(() => {
  const { ISO } = ls.get('DEFAULT_CURRENCY', { ISO: 'USD', name: 'US Dollar' })
  if (!props.currencies?.rows) {
    return ''
  }
  return props.currencies.rows.find(v => v.ISO === ISO)
})

const getBalance = (userBalances) => {
  if (!userBalances?.length) {
    return '--'
  }
  return userBalances.map(v => v.balance).join(' | ')
}

const getSymbol = (ISO) => {
  switch (ISO) {
    case 'USD':
      return '$'
    case 'EUR':
      return '€'
    case 'BTC':
      return '₿'
    case 'ETH':
      return 'Ξ'
    case 'USDTT':
      return '₮(T)'
    case 'USDTE':
      return '₮(E)'
    default:
      return '+'
  }
}
</script>
<template>
  <div>
    <Popover v-slot="{ open }" class="relative">
      <PopoverButton :class="open ? 'text-white' : 'text-white/90'"
        class="group wallet-balances-dropdown-button inline-flex items-center  px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-0">
        <CryptoCurrencyIconsUsdt />
        <p class="ml-3 font-medium">
          {{ getSymbol(defaultCurrency.ISO) }} {{ getBalance(defaultCurrency.userBalances) }}
        </p>
        <ChevronDownIcon class="ml-2 h-6 w-6 transition duration-150 ease-in-out text-brand-darkerGrey"
          aria-hidden="true" />
      </PopoverButton>

      <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
        <PopoverPanel class="absolute right-0 z-10 mt-3 w-[200px] transform px-4 sm:px-0">
          <div class="overflow-hidden rounded-lg shadow-lg text-brand-dark font-medium px-4 py-2 bg-white">

            <div class="flex justify-between" v-for="currency in currencies?.rows" :key="currency.ISO">
              <p>{{ getSymbol(currency.ISO) }} {{ getBalance(currency.userBalances) }}</p>
              <p>{{ currency.ISO }}</p>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>
<style>
.wallet-balances-dropdown-button {
  border-radius: 5px;
  border: 1px solid rgba(61, 75, 89, 0.5);
  background: linear-gradient(335deg, #171f2b 24.05%, #2c3e4e 61.46%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
</style>
