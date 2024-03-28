import { ref } from "vue";
import { request } from "../api/ipApi";

export default function useIpApi() {
  const loading = ref(true);
  const error = ref(null);

  const call = async () => {
    try {
      loading.value = true;
      const response = await request();
      loading.value = false;
      return response;
    } catch (err) {
      loading.value = false;
      error.value = err;
      console.error(err);
    }
  };

  return {
    loading,
    error,
    call,
  };
}
