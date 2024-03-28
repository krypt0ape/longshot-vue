<script setup>
import { computed, onMounted } from 'vue'
import { useAuth0 } from "@auth0/auth0-vue";
import useAsync from '@/composables/useAsync';
import useUserStore from '@/stores/useUserStore';
import { useLocalStorage } from "@/composables/useLocalStorage";
import useIpApi from "@/composables/useIpApi";
const ls = useLocalStorage()
const { call: callIpApi } = useIpApi()

const userStore = useUserStore();
const { isLoading } = useAuth0();
const { loading, error, call } = useAsync(userStore.getUser);

onMounted(async () => {
  //ls.set('COUNTRY_CODE', (await callIpApi()).countryCode)
})

const ready = computed(() => {
  return !loading.value && !isLoading.value;
})

const errorMessage = computed(() => {
  if (!error) return null;
  if (error.response && error.response.data && error.response.data.message) {
    return error.response.data.message;
  }
  return error.message;
});
call();
</script>
<template>
  <div>
    <div v-if="error" class="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
      <div class="bg-red-500 opacity-75 rounded-xl m-12 text-white p-4">
        <p class="text-lg">{{ errorMessage }}</p>
        <p class="text-brand-lightGrey">Please refresh the page, if the error persits please contact support.</p>
      </div>
    </div>
    <div v-else-if="!ready" class="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center">
      <img src="/img/ColorWhite_Full.png" class="animate-pulse w-[150px]" />
    </div>
    <slot v-else />
  </div>
</template>