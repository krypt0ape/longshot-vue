<template>
  <div class="mx-10 my-6 p-6 bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 shadow-md" role="alert">
    <div class="flex">
      <div class="pr-4"><i class="fa-duotone fa-circle-info"></i></div>
      <div>
        <p class="font-bold">KYC Verification</p>
        <p class="text-sm">Your credentials require us to walk you through KYC verification</p>
      </div>
      <PrimaryButton class="ml-auto mr-0" @click="start">Launch KYC</PrimaryButton>
    </div>
  </div>
  <div id="sumsub-websdk-container"></div>
</template>

<script setup>
import useKyc from "@/composables/useKyc";
import useAsync from '@/composables/useAsync';
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue'

const { start } = useKyc();

</script>