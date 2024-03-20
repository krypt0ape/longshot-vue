import axios, { AxiosHeaders } from "axios";
import { useAuth0 } from "@auth0/auth0-vue";

let token;

const startSession = async (identifier, currency) => {
  const headers = {};

  if (!token && useAuth0()?.isAuthenticated.value) {
    const { getAccessTokenSilently } = useAuth0();

    token = getAccessTokenSilently;
  }

  if (token) {
    headers.Authorization = `Bearer ${await token()}`;
  }
  const baseURL = import.meta.env.VITE_API_URL;
  const { data } = await axios.get(
    `/game/start-session/${identifier}/${token ? currency?.ISO || "" : ""}`, // only logged in (token) can request real session
    {
      baseURL,
      headers,
      params: { locale: navigator.language },
    }
  );

  return data.data;
};

export { startSession };
