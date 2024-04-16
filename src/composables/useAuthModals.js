import { useRoute, useRouter } from "vue-router";
import { ref, computed } from "vue";

export default function useAuthModals() {
	const route = useRoute();
	const router = useRouter()

	const signupModalOpen = computed(()=>{
		return route.query.modal === "signup";
	})
	
	const toggleSignupModal = () => {
		if(signupModalOpen.value){
			// close modal
			router.replace({ query: { } })
		}else {
			// open modal
			router.replace({ query: { modal: 'signup' } })
		}
	};

	const signinModalOpen = computed(()=>{
		return route.query.modal === "signin";
	})

	const toggleSigninModal = () => {
		if(signinModalOpen.value){
			// close modal
			router.replace({ query: { } })
		}else {
			// open modal
			router.replace({ query: { modal: 'signin' } })
		}
	};

	const logoutModalOpen = computed(()=>{
		return route.query.modal === "logout";
	})

	const toggleLogoutModal = () => {
		if(logoutModalOpen.value){
			// close modal
			router.replace({ query: { } })
		}else {
			// open modal
			router.replace({ query: { modal: 'logout' } })
		}
	};

	const forgotPasswordModalOpen = computed(()=>{
		return route.query.modal === "forgot-password";
	})

	const toggleForgotPasswordModal = () => {
		if(forgotPasswordModalOpen.value){
			// close modal
			router.replace({ query: { } })
		}else {
			// open modal
			router.replace({ query: { modal: 'forgot-password' } })
		}
	}

	return {
		signinModalOpen,
		toggleSigninModal,
		signupModalOpen,
		toggleSignupModal,
		logoutModalOpen,
		toggleLogoutModal,
		forgotPasswordModalOpen,
		toggleForgotPasswordModal
	};
}
