import { useRoute, useRouter } from "vue-router";
import { ref, computed } from "vue";

export default function useAuthModals() {
	const route = useRoute();
	const router = useRouter();

	const signupModalOpen = computed(() => {
		return route.query.modal === "signup";
	});

	const toggleSignupModal = () => {
		if (signupModalOpen.value) {
			// close modal
			router.replace({ query: {} });
		} else {
			// open modal
			router.replace({ query: { modal: "signup" } });
		}
	};

	const signinModalOpen = computed(() => {
		return route.query.modal === "signin";
	});

	const toggleSigninModal = () => {
		if (signinModalOpen.value) {
			// close modal
			router.replace({ query: {} });
		} else {
			// open modal
			router.replace({ query: { modal: "signin" } });
		}
	};

	const signoutModalOpen = computed(() => {
		return route.query.modal === "signout";
	});

	const toggleSignoutModal = () => {
		if (signoutModalOpen.value) {
			// close modal
			router.replace({ query: {} });
		} else {
			// open modal
			router.replace({ query: { modal: "signout" } });
		}
	};

	const forgotPasswordModalOpen = computed(() => {
		return route.query.modal === "forgot-password";
	});

	const toggleForgotPasswordModal = () => {
		if (forgotPasswordModalOpen.value) {
			// close modal
			router.replace({ query: {} });
		} else {
			// open modal
			router.replace({ query: { modal: "forgot-password" } });
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
