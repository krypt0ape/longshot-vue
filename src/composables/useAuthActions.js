import { useRoute } from "vue-router";
import { ref } from "vue";

const signupModalOpen = ref(false);

export default function useAuthActions() {
	const route = useRoute();

	

	const signup = () => {
		signupModalOpen.value = true;
	};

	const login = () => {
		
	};

	const logout = () => {
		
	};

	const toggleSignupModal = () => {
		signupModalOpen.value = !signupModalOpen.value;
	}

	return {
		login,
		logout,
		signup,
		signupModalOpen,
		toggleSignupModal
	};
}
