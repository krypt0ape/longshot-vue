import axios, { AxiosHeaders } from "axios";
import { useAuth0 } from "@auth0/auth0-vue";
import type { Currency } from "@/components/CurrencyOverlay.vue";

export type LaunchOptions = {
  game_launcher_url: string;
  game_url: string;
  strategy: string;
};

let token: any;

const startSession = async (
  identifier: string,
  currency?: Currency
): Promise<LaunchOptions> => {
  const headers = new AxiosHeaders();

  if (!token && useAuth0()?.isAuthenticated.value) {
    const { getAccessTokenSilently } = useAuth0();

    token = getAccessTokenSilently;
  }

  if (token) {
    headers.Authorization = `Bearer ${await token()}`;
  }
  const baseURL = import.meta.env.VITE_API_URL;
  const { data } = await axios.get<{ success: Boolean; data: LaunchOptions }>(
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
