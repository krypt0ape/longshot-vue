import { ref } from "vue";
import { request } from "../api/api";
import { useAuth0 } from "@auth0/auth0-vue";

export default function useAsyncApi(method, path) {
  const { getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();

  const auth0Ready = async () => {
    setTimeout(async () => !isLoading.value || (await auth0Ready()), 50);
  };

  const loading = ref(true);
  const error = ref(null);
  const token = ref();

  const call = async (data = undefined, uri = "") => {
    await auth0Ready();

    if (isAuthenticated.value) {
      token.value = await getAccessTokenSilently();
    }

    try {
      loading.value = true;

      const r = await request({
        method: method,
        path: `${path}/${uri}`,
        data,
        token: token.value ?? null,
      });

      loading.value = false;

      return r.data;
    } catch (err) {
      loading.value = false;
      error.value = err;
    }
  };

  return {
    loading,
    error,
    call,
  };
}
