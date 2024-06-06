<script setup>
import useFlashNotificationStore from "@/stores/useNotificationStore";
import { computed } from "vue";

const store = useFlashNotificationStore();

const props = defineProps({
	notification: {
		type: Object,
		required: true,
	},
	index: {
		type: String,
		required: true,
	},
});

const icon = computed(() => {
	return props.notification.type === "success"
		? "fas fa-check-circle text-green-400"
		: "fas fa-exclamation-circle text-red-400";
});

const borderClass = computed(() => {
	return props.notification.type === "success"
		? "border-l-4 border-green-400"
		: "border-l-4 border-red-400";
});
</script>
<template>
	<div
		class="pointer-events-auto mb-4 w-[350px] overflow-hidden flash-notification ring-1 ring-black ring-opacity-5"
	>
		<div :class="borderClass" class="p-4">
			<div class="flex items-start">
				<div class="flex-shrink-0">
					<i :class="icon" class="text-lg"></i>
				</div>
				<div class="ml-3 w-0 flex-1 pt-0.5">
					<p class="font-medium text-brand-lightGrey tracking-wide">
						{{ notification.title }}
					</p>
					<p class="mt-1 text-sm text-brand-lightGrey">
						{{ notification.message }}
					</p>
				</div>
				<div class="ml-4 flex flex-shrink-0">
					<button
						type="button"
						@click="store.removeFlashNotification(index)"
						class="inline-flex rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						<span class="sr-only">Close</span>
						<i class="fa-solid fa-x"></i>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.flash-notification {
	border-radius: 5px;
	border: 1px solid rgba(61, 75, 89, 0.5);
	background: linear-gradient(335deg, #171f2b 24.05%, #2c3e4e 61.46%);
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
</style>
