import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes";
import { useRoute } from "vue-router";
import i18n from "./i18n";
import { createPinia } from "pinia";
import vue3GoogleLogin from "vue3-google-login";
import VueTippy from "vue-tippy";
import "tippy.js/dist/tippy.css"; // optional for styling

const pinia = createPinia();

createApp(App)
  .use(
    VueTippy,
    // optional
    {
      directive: "tippy", // => v-tippy
      component: "tippy", // => <tippy/>
      componentSingleton: "tippy-singleton", // => <tippy-singleton/>,
      defaultProps: {
        placement: "auto-end",
        allowHTML: true,
      }, // => Global default options * see all props
    }
  )
  .use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  })
  .use(pinia)
  .use(i18n)
  .use(router)
  .mount("#app");

router.afterEach(() => {
  const route = useRoute();
  i18n.global.locale.value = route.params.locale;
});
