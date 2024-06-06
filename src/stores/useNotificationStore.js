import {ref} from "vue";
import {defineStore} from "pinia";

const FLASH_TIMEOUT = 5000;

export default defineStore("notification", () => {
	const flashNotifications = ref({});

	const addFlashNotification = (notification) => {
		const key = Date.now();
		flashNotifications.value[key] = notification;
		setTimeout(() => {
			delete flashNotifications.value[key];
		}, FLASH_TIMEOUT);
		return key;
	};

	const removeFlashNotification = (key) => { 
		if(! key) console.error('Key is required to remove flash notification')
		delete flashNotifications.value[key];
	}

	return {
		flashNotifications,
		addFlashNotification,
		removeFlashNotification
	};
})