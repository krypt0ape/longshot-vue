<script setup>
import { onMounted } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';

const {user} = useAuth0();
const {execute, loading, error} = useApi('/signup');
onMounted(()=>{
	execute();
})
</script>
<template>
		<p>Username</p>
		<pre>{{ user }}</pre>
		<p>{{ error }}</p>
		
</template>