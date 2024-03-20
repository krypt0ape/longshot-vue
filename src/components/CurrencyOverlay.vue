<template>
  <div v-if="open" id="currency-overlay"
    class="px-6 py-4 space-x-10 absolute z-50 top-0 right-0 left-0 bottom-0 flex items-center justify-center"
    :class="{ fullscreen }">
    <div @click="() => onConfirm()" class="bg-brand-dark opacity-75 absolute top-0 right-0 left-0 bottom-0 z-50"></div>
    <div class="relative z-50 space-x-6">
      <Menu as="div" class="z-50 inline-block text-left">
        <MenuButton
          class="text-white text-xl base-btn tracking-wide hover:opacity-80 p-4 font-medium rounded-lg neutral-btn cursor-pointer">
          {{ currency.name }}
        </MenuButton>
        <transition enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0">
          <MenuItems class="absolute z-50">
            <MenuItem :id="v.name" :disabled="false" :key="v.name" v-for="v in currencies" @click="() => onSelect(v)"
              class="text-white base-btn tracking-wide hover:opacity-80 p-2 text-md font-medium rounded-lg neutral-btn cursor-pointer"
              as="div" v-slot="active">
            {{ v.name }}
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
      <ButtonsPrimaryButton @click="() => onConfirm(true)">
        <FontAwesome icon="fa-solid fa-cards" class="text-white text-xl" />
        Real Play!
      </ButtonsPrimaryButton>
      <ButtonsSecondaryButton @click="() => onConfirm()">
        <FontAwesome icon="fa-solid fa-cards" class="text-white text-xl" />
        Fun Play!
      </ButtonsSecondaryButton>
    </div>
  </div>
</template>

<script setup lang="ts">
export type Currency = {
  ISO: string[3] | string[4];
  name: string;
};

type Props = {
  fullscreen?: Boolean;
}

import {ref} from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

const currencies = ref<Currency[]>([
  { ISO: "EUR", name: "Euro" },
  { ISO: "USD", name: "US Dollar" },
  { ISO: "JPY", name: "Japan" },
  { ISO: "BTC", name: "Bitcoin" },
  { ISO: "LTC", name: "Litecoin" },
  { ISO: "DOG", name: "Dogecoin" },
  { ISO: "ETH", name: "Etherium" },
  { ISO: "BCH", name: "Bitcoin Cash" },
  { ISO: "USDT", name: "Tether" },
  { ISO: "XRP", name: "Ripple" },
]);

const open = ref(true);

const currency = ref<Currency>({ ISO: "USD", name: "US Dollar" });

const onSelect = (v: Currency | null) => {
  currency.value = v || { ISO: "USD", name: "US Dollar" };
};

const onConfirm = (real = false) => {
  open.value = false;
  emit("select", real ? currency.value : undefined);
};

const emit = defineEmits(["select"]);

withDefaults(defineProps<Props>(), {
  fullscreen: () => false,
})
</script>
