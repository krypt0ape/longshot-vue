<script setup>
import NeutralButton from "./Buttons/NeutralButton.vue";
import { computed} from "vue";

const ghostmode = computed(()=>{
	return "on";
})
</script>
<template>
	<NeutralButton><i class="fa-solid fa-user-secret mr-2"></i>Ghost Mode {{ ghostmode }}</NeutralButton>
</template>