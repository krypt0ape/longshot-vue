<template>
	<FormSelect :options="options" :selected="1"/>
  </template>
  
  <script setup>
  import FormSelect from './Form/Select.vue'
  import { ref } from 'vue'
  
  const options = [
	{ id: 1, name: 'Winner' },
	{ id: 2, name: 'Total' },
	{ id: 3, name: 'Handicap' },
  ]
  </script>