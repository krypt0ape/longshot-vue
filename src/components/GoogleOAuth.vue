<script setup>
import { googleSdkLoaded } from "vue3-google-login";
import useAsyncApi from '@/composables/useAsyncApi';
import useUserStore from '@/stores/useUserStore';

const userStore = useUserStore();

const { call } = useAsyncApi("POST", "/oauth/google-callback");

const login = () => {
	googleSdkLoaded((google) => {
		google.accounts.oauth2
			.initCodeClient({
				client_id:
					"300731032141-77uo4ng0gu37rnoq554tffnpciuq5l5f.apps.googleusercontent.com",
				redirect_uri: "http://localhost:5173/auth/google/callback",
				scope: "email profile openid",
				callback: async (response) => {
					console.log("Handle the response", response);
					const re = await call({
						data: {
							code: response.code,
						},
					});

					userStore.setUser(user)
				},
			})
			.requestCode();
	});
};
</script>
<template>
	<a
		@click="login"
		class="auth-login-button"
		v-tippy="{ content: 'Login With Gmail', placement: 'top' }"
	>
		<i class="fa-brands fa-google"></i>
	</a>
</template>
