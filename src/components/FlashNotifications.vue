<script setup>
import useNotificationStore from "@/stores/useNotificationStore";
import FlashNotification from "@/components/FlashNotification.vue";

const store = useNotificationStore();
</script>
<template>
	<div
		aria-live="assertive"
		class="pointer-events-none fixed inset-0  flex items-start px-4 py-6 sm:items-start sm:p-6 z-50"
	>
	<transition-group name="list" tag="div">
				<FlashNotification
					v-for="(notification, key) in store.flashNotifications"
					:key="key"
					:index="key"
					:notification="notification"
				/>
			</transition-group>
	</div>
</template>
<style scoped>
.list-enter-active,
.list-leave-active {
	transition: transform 0.2s ease-out;
}
.list-enter-from,
.list-leave-to {
	transform: translateX(-100%);
}
.list-enter-to,
.list-leave-from {
	transform: translateX(0);
}
</style>
