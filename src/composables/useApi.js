import { ref, onMounted } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { request } from "../api/api";

export default function useApi(method, path, defaultOptions, callback = null) {
  const data = ref();
  const loading = ref(true);
  const error = ref(null);
  const token = ref(null);

  const { getAccessTokenSilently } = useAuth0();

  onMounted(() => {
    refetch();
  });

  const refetch = async (options = defaultOptions) => {
    try {
      token.value = await getAccessTokenSilently();
    } catch (e) {}

    request({
      method: method,
      path: path,
      data: { ...defaultOptions, ...options },
      token: token.value,
    })
      .then((response) => {
        data.value = response;
        callback && callback(data.value);
      })
      .catch((err) => {
        console.log(err);
        error.value = err;
      })
      .finally(() => {
        loading.value = false;
      });
  };

  return {
    data,
    loading,
    error,
    refetch,
  };
}
