import { ref } from "vue";
import { request } from "../api/api";

export default function useAsyncApi(method, path) {

  const loading = ref(true);
  const error = ref(null);
  const token = ref();

  const call = async (data = undefined, uri = "", params = undefined) => {
    

    // if (isAuthenticated.value) {
    //   token.value = await getAccessTokenSilently();
    // }

    try {
      loading.value = true;

      const r = await request({
        method: method,
        path: `${path}/${uri}`,
        data,
        params,
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
