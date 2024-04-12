<template>
	<Modal :cross="false" :open="props.show"  @close="handleClose" class="max-w-2xl">
		<template #dialog-title>
			<div
				class="px-6 py-4 bg-brand-accentBgHeader flex justify-between items-center"
			>
				<img src="/img/ColorWhite_Full.png" class="w-[100px]" />
				<div class="text-brand-grey text-right">
					<slot name="header" />
				</div>
			</div>
		</template>
		<div class="px-6 py-4 bg-brand-darkBg">
			<slot />
		</div>
	</Modal>
</template>
<script setup>
import Modal from "./Modal.vue";

const props = defineProps({
	show: Boolean
})

const emits = defineEmits(["close"]);

const handleClose = () => {
	emits("close");
};
</script>
