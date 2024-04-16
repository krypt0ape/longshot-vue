import { ref, onMounted } from "vue";
import { request } from "../api/api";
import { delay } from "lodash";

export default function useApi(method, path, defaultOptions, callback = null) {
  const data = ref();
  const loading = ref(true);
  const error = ref(null);
  const token = ref(null);

  

  onMounted(() => {
    refetch();
  });

  const refetch = async (options = defaultOptions) => {
    try {
      let response = await request({
        method: method,
        path: path,
        data: { ...defaultOptions, ...options },
        token: token.value,
      });

	  await new Promise(resolve => setTimeout(resolve, 1000));  // Forcing a delay make the UI less jarring
      callback && callback(data.value);
      data.value = response.data;
    } catch (err) {
       console.error(err);
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
