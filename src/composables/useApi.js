import { ref, onMounted } from "vue";
import useApiRequest from "./useApiRequest";

/**
 * useApi calls the api on component mount and holds 
 * the response data in local state and returns the response data
 * when using refetch so it can be handled by the component as required.
 */
export default function useApi(method, path, defaultOptions = {}, callback = null) {
  const data = ref();
  const loading = ref(true);
  const error = ref(null);

  const request = useApiRequest();

  onMounted(() => {
    refetch();
  });

  const refetch = async (newOptions = null) => {

	const baseOptions = {
		method: method,
        path: path,
		token: token.value,
	};
	const options = newOptions || defaultOptions;

    try {
      let response = await request({
		...baseOptions, ...options
	  });

	  // Forcing a delay make the UI less jarring
	  await new Promise(resolve => setTimeout(resolve, 1000));  

      callback && callback(data.value);
      data.value = response.data;

	  return response.data;

    } catch (err) {
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
