import { ref } from "vue";
import { request } from "../api/api";
import { useAuth0 } from "@auth0/auth0-vue";
import { Method } from "axios";

export default function useAsyncApi(method: Method, path: string) {
  const loading = ref(true);
  const error = ref(null);

  const { getAccessTokenSilently } = useAuth0();

  const call = async (data?: any, uri?: string) => {
    const token = await getAccessTokenSilently();

    try {
      loading.value = true;
      const r = await request({
        method: method,
        path: `${path}/${uri}`,
        data,
        token: token ?? null,
      });
      loading.value = false;
      return r;
    } catch (err: any) {
      loading.value = false;
      error.value = err;
      console.log(err);
    }
  };

  return {
    loading,
    error,
    call,
  };
}
