<script setup>
import useApi from "@/composables/useApi";

const { data } = useApi("get", "/sportsbook/bet");
</script>
<template>
  <div class="max-w-7xl mx-auto pt-[15px] relative px-4">
    <pre v-for="bet of data">{{ bet }}</pre>
  </div>
</template>

<style lang="scss" scoped>
pre {
  margin-bottom: 20px;
  padding: 20px;
  width: 100%;
  color: #e2e2e2;
  border: dashed 1px red;
  border-radius: 5px;
}
</style>
