import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes";
import i18n from "./i18n";
import { createPinia } from "pinia";
import { createAuth0 } from "@auth0/auth0-vue";
import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css' // optional for styling


const oAuth = createAuth0({
	domain: import.meta.env.VITE_AUTH0_DOMAIN,
	clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
	authorizationParams: {
	  redirect_uri: window.location.origin,
	  audience: import.meta.env.VITE_AUTH0_AUDIENCE,
	},
  });

const pinia = createPinia();
createApp(App).use(
	VueTippy,
	// optional
	{
	  directive: 'tippy', // => v-tippy
	  component: 'tippy', // => <tippy/>
	  componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
	  defaultProps: {
		placement: 'auto-end',
		allowHTML: true,
	  }, // => Global default options * see all props
	}
  ).use(pinia).use(i18n).use(oAuth).use(router).mount("#app");
