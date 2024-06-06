import { useRoute, useRouter } from "vue-router";
import { ref, computed } from "vue";

export default function useAuthModals() {
	const route = useRoute();
	const router = useRouter();

	const closeModal = () => {
		const newQuery = { ...router.currentRoute.value.query, authmodal: "" };
		router.replace({ query: newQuery });
	}

	const openModal = (name) => {
		const newQuery = { ...router.currentRoute.value.query, authmodal: name };
		router.replace({ query: newQuery });
	}

	const signupModalOpen = computed(() => {
		return route.query.authmodal === "signup";
	});

	const toggleSignupModal = () => {
		if (signupModalOpen.value) {
			// close modal
			closeModal();
		} else {
			// open modal
			openModal("signup");
		}
	};

	const signinModalOpen = computed(() => {
		return route.query.authmodal === "signin";
	});

	const toggleSigninModal = () => {
		if (signinModalOpen.value) {
			// close modal
			closeModal();
		} else {
			// open modal
			openModal("signin")
		}
	};

	const signoutModalOpen = computed(() => {
		return route.query.modal === "signout";
	});

	const toggleSignoutModal = () => {
		if (signoutModalOpen.value) {
			// close modal
			closeModal()
		} else {
			// open modal
			openModal("signout")
		}
	};

	const forgotPasswordModalOpen = computed(() => {
		return route.query.modal === "forgot-password";
	});

	const toggleForgotPasswordModal = () => {
		if (forgotPasswordModalOpen.value) {
			// close modal
			closeModal();
		} else {
			// open modal
			openModal('forgot-password')
		}
	};

	return {
		signinModalOpen,
		toggleSigninModal,
		signupModalOpen,
		toggleSignupModal,
		signoutModalOpen,
		toggleSignoutModal,
		forgotPasswordModalOpen,
		toggleForgotPasswordModal,
	};
}
