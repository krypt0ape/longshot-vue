<script setup>
import { useAuth0 } from "@auth0/auth0-vue";
const { isAuthenticated } = useAuth0();
</script>
<template>
  <div v-if="isAuthenticated">
    <i class="fa-solid fa-star" />
  </div>
</template>