<script setup>
import { useAuth0 } from "@auth0/auth0-vue";
import { useRoute } from "vue-router";
import PrimaryButton from "./Buttons/PrimaryButton.vue";
import NeutralButton from "./Buttons/NeutralButton.vue";

const route = useRoute();

const { loginWithRedirect, isAuthenticated } = useAuth0();

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

defineProps({
	className: "",
	showControls: true,
});
</script>
<template>
	<slot v-if="isAuthenticated" />
	<div v-else :class="class" class="flex items-center gap-x-4">
		<template v-if="showControls">
			<NeutralButton @click="login">Sign in</NeutralButton>
			<PrimaryButton @click="signup">Register</PrimaryButton>
		</template>
	</div>
</template>
