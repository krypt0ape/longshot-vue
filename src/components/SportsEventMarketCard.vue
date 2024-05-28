<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import SportsEventMarket from "@/components/SportsEventMarket.vue";
import { marketName } from "@/utils/radarHelpers";
import { computed } from "vue";

const props = defineProps({
  market: {
    type: Object,
    required: true,
  },
  event: {
    type: Object,
    required: true,
  },
});

const specifier = computed(() => {
  return props.market.marketLines[0].specifiers;
});

const status = computed(() => {
  return props.market.marketLines[0].status;
});
</script>
<template>
  <div class="sports-event-market-card my-6">
    <Disclosure v-slot="{ open }">
      <DisclosureButton class="px-[32px] py-[15px] w-full">
        <div
          class="flex justify-between items-center"
          :class="{
            'bg-yellow-500': specifier && !specifier?.includes('variant='),
            'bg-red-500': specifier,
          }"
        >
          <p class="font-medium text-lg">
            {{ specifier }} - specifier <br />
            {{ marketName(market.name, event.competitors, specifier) }} - ID:
            {{ market.id }} - Status: {{ status }}
          </p>
          <i
            :class="[
              open ? 'fa-chevron-down' : 'fa-chevron-left',
              'fa-solid  text-white',
            ]"
          ></i>
        </div>
      </DisclosureButton>
      <DisclosurePanel
        static
        class="text-gray-500 px-[20px] py-[20px] sports-event-market-card-panel"
      >
        <SportsEventMarket :market="market" :event="event" />
        <!-- <pre>{{ market }}</pre> -->
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>
<style>
.sports-event-market-card {
  border-radius: 5px;
  border: 1px solid rgba(61, 75, 89, 0.5);
  background: linear-gradient(335deg, #171f2b 24.05%, #2c3e4e 61.46%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
.sports-event-market-card-panel {
  border-top: 1px solid rgba(61, 75, 89, 0.5);
}
</style>
