<script setup>
// import { useAuth0 } from "@auth0/auth0-vue";
// const { user } = useAuth0();
</script>
<template>
	<div class="mx-auto max-w-7xl text-brand-lightGrey mt-12">
	  <h1>Home page</h1>
	  <p><RouterLink to="/sports/home">Sports page</RouterLink></p>
	  <p><RouterLink to="/casino/home">Casino page</RouterLink></p>
	  <p><RouterLink to="/blog/category/all">Blog page</RouterLink></p>
	  <div>
		<!-- <pre>{{ user }}</pre> -->
	  </div>
	</div>
  </template>