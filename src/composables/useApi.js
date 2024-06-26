import { ref, onMounted } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { request } from "../api/api";

export default function useApi(method, path, defaultOptions, callback = null) {
  const data = ref();
  const loading = ref(true);
  const error = ref(null);
  const token = ref(null);

  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  onMounted(() => {
    refetch();
  });

  const refetch = async (options = defaultOptions) => {
    if (isAuthenticated.value) {
      token.value = await getAccessTokenSilently();
    }

    try {
      let response = await request({
        method: method,
        path: path,
        data: { ...defaultOptions, ...options },
        token: token.value,
      });
      callback && callback(data.value);
      data.value = response.data;
    } catch (err) {
      // console.error(err);
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return {
    data,
    loading,
    error,
    refetch,
  };
}
