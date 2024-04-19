import { onMounted } from "vue";
import useAsyncApi from "./useAsyncApi";

/**
 * Wraps aound async api and calls the api on mounted
 */
export default function useApi(method, path, defaultOptions = {}) {
  const {data, loading, error, call} = useAsyncApi(method, path);

  onMounted(() => {
    refetch(defaultOptions);
  });

  const refetch = async (newOptions = null) => {
	const options = newOptions || defaultOptions;

	await call(options);
  };

  return {
    data,
    loading,
    error,
    refetch,
  };
}
