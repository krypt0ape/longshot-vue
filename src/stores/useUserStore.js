import { defineStore } from 'pinia';
import { ref } from 'vue';
import { request } from '@/api/api';

export default defineStore('user', () => {
	const user = ref({});
	const riskManagement = ref({});

	const getUser = async () => {
		const response = await request({
			path: '/user',
		});
		user.value = response.user;
		riskManagement.value = response.userRiskManagement;
	}

	return {
		user,
		riskManagement,
		getUser
	}
});