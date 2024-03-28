import axios from "axios";
import { ref } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";

export const useGameApi = () => {
  const loading = ref(true);
  const error = ref(null);

  const { getAccessTokenSilently } = useAuth0();

  const startSession = async (identifier, currency) => {
    const token = await getAccessTokenSilently();
    const headers = {
		"Country-Code": "UK",
	};
    if (token) {
      headers.Authorization = `Bearer ${await token}`;
    }

    try {
      loading.value = true;

      const baseURL = import.meta.env.VITE_API_URL;

      const { data } = await axios.get(
        `/game/start-session/${identifier}/${token ? currency?.ISO || "" : ""}`, // only logged in (token) can request real session
        {
          baseURL,
          headers,
          params: { locale: navigator.language },
        }
      );

      loading.value = false;
      return data.data;
    } catch (err) {
      loading.value = false;
      error.value = err;
      console.error(err);
    }
  };

  return {
    loading,
    error,
    startSession,
  };
};
