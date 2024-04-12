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

	const loginModalOpen = computed(()=>{
		return route.query.modal === "login";
	})

	const toggleLoginModal = () => {
		if(loginModalOpen.value){
			// close modal
			router.replace({ query: { } })
		}else {
			// open modal
			router.replace({ query: { modal: 'login' } })
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

	return {
		loginModalOpen,
		toggleLoginModal,
		signupModalOpen,
		toggleSignupModal,
		logoutModalOpen,
		toggleLogoutModal
	};
}
