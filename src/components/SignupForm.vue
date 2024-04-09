<script setup>
import { onMounted } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';
import useApi from '@/composables/useApi';

const { user } = useAuth0();
const { data, loading, error } = useApi('post', '/auth/complete-registration', {
  affiliateCode: "",
  signupCode: "",
  acceptedTerms: 1
});
</script>
<template>
  <p>Username</p>
  <pre>{{ user }}</pre>
  <p>{{ error }}</p>

</template>