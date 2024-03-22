<script setup>
import { useAuth0 } from "@auth0/auth0-vue";
import { useRoute } from "vue-router";
import PrimaryButton from "./Buttons/PrimaryButton.vue";
import NeutralButton from "./Buttons/NeutralButton.vue";

defineProps({
	showControls: {
		type: Boolean,
		default: true,
	},
});

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
</script>
<template>
	<slot v-if="isAuthenticated" />
	<div v-else-if="showControls" v-bind="$attrs" class="flex items-center gap-x-4">
		<NeutralButton @click="login">Sign in</NeutralButton>
		<PrimaryButton @click="signup">Register</PrimaryButton>
	</div>
</template>
