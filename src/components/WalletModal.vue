<script setup>
import { ref, computed } from "vue";
import useUserStore from "@/stores/useUserStore";

const store = useUserStore();

const activeTab = ref("deposit");
const tabs = [
	{
		title: "deposit",
		active: activeTab.value === "deposit",
		action: () => setActiveTab("deposit"),
	},
	{
		title: "withdraw",
		active: activeTab.value === "withdraw",
		action: () => setActiveTab("withdraw"),
	},
	{
		title: "buy crypto",
		active: activeTab.value === "buy crypto",
		action: () => setActiveTab("buy crypto"),
	},
];
</script>
<template>
	<Modal :open="false">
		<div class="bg-brand-dark-light flex px-[40px] py-[25px]">
			<h2 class="text-2xl font-medium">
				<FontAwesome icon="fa-solid fa-wallet" class="text-brand-darkerGrey mr-2" />
				Your Wallet
			</h2>
		</div>
		<div class="grid grid-cols-3 px-8 bg-brand-dark pb-2 pt-[25px] space-x-4">
			<TabsPrimaryTab v-for="(tab, index) in tabs" :key="index" :item="tab" />
		</div>
		<div class="bg-brand-dark-light px-6 py-4">
			<div v-if="store.user.risk_status === 'OK'">
				<WalletDeposit v-if="activeTab === 'deposit'" />
				<p v-if="activeTab === 'withdrawal'">withdraw</p>
				<p v-if="activeTab === 'buy crypto'">buy crypto</p>
			</div>
			<div v-else-if="store.user.risk_status === 'ACTION_REQUIRED'">
				<WalletRiskAmlCheck
					v-if="store.riskManagement.aml_status !== 'COMPLETED'"
				/>
				<WalletRiskKycCheck v-else />
			</div>
			<WalletRiskWithdrawOnly
				v-else-if="store.user.risk_status === 'WITHDRAW_ONLY'"
			/>
			<WalletRiskBlocked v-else-if="store.user.risk_status === 'BLOCKED'" />
		</div>
	</Modal>
</template>
