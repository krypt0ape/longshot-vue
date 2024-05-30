<script setup>
import useBetslipStore from "@/stores/useBetslipStore";
import {computed} from 'vue'

const store = useBetslipStore();

const totalBets = computed(()=>{
	return Object.keys(store.betslip).length
})
</script>
<template>
	<span v-if="totalBets" className="_betslip-badge ml-2 font-bold text-xs text-brand-bodyBg">
		{{ totalBets }}
	</span>
</template>
<style scoped>
._betslip-badge {
	display: flex;
	padding: 4px;
	justify-content: center;
	align-items: center;
	border-radius: 75px;
	height: 18px;
	width: 18px;
	background: linear-gradient(180deg, #68d763 0%, #3aaa35 100%);
}
</style>
