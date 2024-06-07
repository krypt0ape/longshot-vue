<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Async from "@/components/Async.vue";
import useApi from "@/composables/useApi";
import { useRoute } from "vue-router";
import SportsEventMarketCard from "@/components/SportsEventMarketCard.vue";
import { eventName } from "@/utils/radarHelpers";
import { wss } from "@/api/wss";

const route = useRoute();
const slug = ref();

const socket = ref();

onMounted(() => {
  socket.value = wss();

  socket.value.on("EVENT", (data) => {
    console.log(data);
  });

  socket.value.on("EVENT_MARKET_LINES", (data) => {
    console.log(data);
  });

  socket.value.on("EVENT_MARKET_LINE_OUTCOMES", (data) => {
    console.log(data);
  });

  socket.value.on("USER", (data) => {
    console.log(data);
  });

  socket.value.on("USER_BALANCE", (data) => {
    console.log(data);
  });

  slug.value = route.params.event;

  socket.value.emit("join", route.params.event);
});

onBeforeUnmount(() => socket.value.emit("leave", slug.value));

const path = "/sportsbook/" + route.params.event + "/markets";
const { data, loading } = useApi("get", path);
</script>
<template>
  <div class="max-w-[850px] mx-auto mt-12 text-white">
    <Async :loading="loading">
      <div v-if="data">
        <!-- <pre>{{data.event}}</pre> -->
        <p class="text-3xl font-medium">{{ eventName(data.event) }}</p>
        <p class="text-xl mt-1">Status: {{ data.event.status }}</p>
        <div v-for="e in data.markets" :key="e.id">
          <SportsEventMarketCard :market="e" :event="data.event" />
        </div>
      </div>
    </Async>
  </div>
</template>
