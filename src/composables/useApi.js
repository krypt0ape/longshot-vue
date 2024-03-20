import { ref, onMounted } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { request } from "../api/api";

export default function useApi(method, path, options) {
  const data = ref();
  const loading = ref(true);
  const error = ref(null);

  const { getAccessTokenSilently } = useAuth0();

  onMounted(() => {
    refetch();
  });

  const refetch = async () => {
    const token = await getAccessTokenSilently();
    request({
      method: method,
      path: path,
      data: options,
      token: token ?? null,
    })
      .then((response) => {
        data.value = response;
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
