<script setup>
import { defineProps, computed } from "vue";

const { sportEvent } = defineProps({
  sportEvent: {
    type: Object,
    required: true,
  },
});

const specify = (string, marketLine) => {
  const competitors = {};
  let index = 0;
  for (const competitor of sportEvent.competitors) {
    index += 1;
    competitors[`$competitor${index}`] = competitor.name;
  }

  const specifiers = marketLine?.specifiers.split("|").reduce((obj, str) => {
    const [key, value] = str.split("=");
    obj[key] = value;
    return obj;
  }, competitors);

  const word = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
  ];

  return Object.keys(specifiers).reduce((processedString, key) => {
    return processedString
      .replace(`{${key}}`, specifiers[key])
      .replace(`{+${key}}`, +specifiers[key])
      .replace(`{-${key}}`, -specifiers[key])
      .replace(`{!${key}}`, word[specifiers[key]]);
  }, string);
};

const status = computed(() => {
  switch (sportEvent.status) {
    case "not_started":
      return {
        title: "NOT STARTED",
        cssClass: "sports-live-events-card-badge",
        status: sportEvent.status,
      };
    case "live":
      return {
        title: "LIVE",
        cssClass: "sports-live-events-card-live-badge",
        status: sportEvent.status,
      };
    case "ended":
      return {
        title: "ENDED",
        cssClass: "sports-live-events-card-badge",
        status: sportEvent.status,
      };
    case "closed":
      return {
        title: "CLOSED",
        cssClass: "sports-live-events-card-badge",
        status: sportEvent.status,
      };
    case "cancelled":
      return {
        title: "CANCELLED",
        cssClass: "sports-live-events-card-badge",
        status: sportEvent.status,
      };
    case "delayed":
      return {
        title: "DELAYED",
        cssClass: "sports-live-events-card-badge",
        status: sportEvent.status,
      };
    case "interrupted":
      return {
        title: "INTERRUPTED",
        cssClass: "sports-live-events-card-badge",
        status: sportEvent.status,
      };
    case "suspended":
      return {
        title: "SUSPENDED",
        cssClass: "sports-live-events-card-badge",
        status: sportEvent.status,
      };
    case "postponed":
      return {
        title: "POSTPONNED",
        cssClass: "sports-live-events-card-badge",
        status: sportEvent.status,
      };
    case "abandoned":
      return {
        title: "ABONDONED",
        cssClass: "sports-live-events-card-badge",
        status: sportEvent.status,
      };
    case "0":
      return {
        title: 'WHAT IS "0" STATUS?',
        cssClass: "sports-live-events-card-badge",
        status: sportEvent.status,
      };
    default:
      throw new Error(`Unknown sport event status value ${sportEvent.status}`);
  }
});
</script>
<template>
  <div
    class="grid grid-cols-12 px-[24px] py-[21px] border-t border-t-[#426575]"
  >
    <div class="col-span-5 grid grid-cols-5">
      <div class="col-span-4">
        <div class="flex justify-between items-center">
          <div class="flex space-x-4 items-center">
            <div
              class="px-[8px] py-[2px] font-medium rounded-md"
              :class="status.cssClass"
            >
              <p>{{ status.title }}</p>
            </div>
            <p v-if="status.status === 'live'" class="font-bold text-lg">
              TODO: TIME
            </p>
            <p v-if="status.status === 'live'" class="text-brand-darkerGrey">
              TODO: ROUND NAME
            </p>
          </div>
          <div class="flex space-x-4">
            <IconsTvPlay />
            <IconsChartLineUp />
          </div>
        </div>
        <div
          v-for="competitor in sportEvent.competitors"
          :key="competitor.id"
          class="flex justify-between items-center border-b border-[#426575] pb-[10px] mb-[10px] mt-[25px]"
        >
          <h4 class="text-white font-bold">{{ competitor.name }}</h4>
          <p
            v-if="status.status === 'live'"
            class="sports-live-events-card-badge py-[4px] px-[16px]"
          >
            TODO: COMPETITOR SCORE
          </p>
        </div>
      </div>
    </div>
    <div
      v-for="marketLine in sportEvent.marketLines"
      class="col-span-7 grid grid-cols-7 space-x-6"
      :key="marketLine.id"
    >
      specifiers: {{ marketLine?.specifiers }}
      <div class="col-span-6">
        <div
          class="text-brand-darkerGrey font-medium text-center pt-[10px] pb-[5px]"
        >
          <p>
            {{ specify(marketLine.market.name, marketLine) }}
          </p>
          <div
            v-for="marketLineOutcome in marketLine.marketLineOutcomes"
            :key="marketLineOutcome.id"
          >
            {{ specify(marketLineOutcome.outcome.name, marketLine) }}
            <br />
            odds {{ marketLineOutcome.odds }}
            <br />
            probabilities {{ marketLineOutcome.probabilities }}
            <br />
            active {{ marketLineOutcome.active }}
          </div>
        </div>
      </div>

      <!-- AFAIU this inputs should be a dedicated component per betting type -->
      <!-- <div
        class="sports-live-events-card-odds-card px-[24px] py-[21px] col-span-3 flex items-center"
      >
        <div>
          <p class="text-brand-darkerGrey">Over 1.5</p>
          <p class="brand-primary-green-gradient-text font-bold">2.9</p>
        </div>
      </div>

      <div
        class="sports-live-events-card-odds-card px-[24px] py-[21px] col-span-3 flex items-center"
      >
        <div>
          <p class="text-brand-darkerGrey">Under 1.5</p>
          <p class="brand-primary-green-gradient-text font-bold">1.2</p>
        </div>
      </div> -->
      <!-- <div class="col-span-1 flex items-center"> -->
      <!-- <RouterLink>+28</RouterLink> -->
      <!-- </div> -->
    </div>
  </div>
</template>
<style scoped>
.sports-live-events-card-live-badge {
  background: linear-gradient(180deg, #ff2525 0%, #aa3535 100%);
}

.sports-live-events-card-odds-card {
  border-radius: 10px;
  border: 1px solid #303d4b;
  background: #0d1824;
}

.sports-live-events-card-badge {
  background: #0d1824;
}
</style>
