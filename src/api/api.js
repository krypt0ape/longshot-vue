import axios from "axios";
import { useLocalStorage } from "@/composables/useLocalStorage";

const ls = useLocalStorage();

const request = async ({ method = "GET", path, data, token }) => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const headers = {
    "Country-Code": ls.get("COUNTRY_CODE"),
  };

  if (!headers["Country-Code"]?.length) {
    throw new Error(`Failed to get client's countryCode`);
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const { data: response } = await axios({
    method,
    url: `${baseUrl}${path}`,
    data,
    headers,
  });

  return response;
};

export { request };
