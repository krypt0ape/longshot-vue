import { ref } from "vue";

export default function useAsync(func) {
  const loading = ref(false);
  const error = ref(false);

  const call = async (body = {}) => {
    try {
      loading.value = true;
      return await func(body);
    } catch (err) {
      console.error(err);
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return {
    call,
    loading,
    error,
  };
}
