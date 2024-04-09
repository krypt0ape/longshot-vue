import { useAuth0 } from "@auth0/auth0-vue";
import { useRoute } from "vue-router";

export default function useAuthActions() {
	const route = useRoute();

	const { loginWithRedirect, logout: logoutWithRedirect } = useAuth0();

	const signup = () => {
		loginWithRedirect({
			appState: {
				target:
					"/signup?offer=" +
					route.query.offer +
					"&referrer=" +
					route.query.referrer,
			},
			authorizationParams: {
				screen_hint: "signup",
			},
		});
	};

	const login = () => {
		loginWithRedirect({
			appState: {
				target: window.location.pathname,
			},
		});
	};

	const logout = () => {
		logoutWithRedirect({ logoutParams: { returnTo: window.location.origin } });
	};

	return {
		login,
		logout,
		signup,
	};
}
