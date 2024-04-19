import axios from "axios";
import { useLocalStorage } from "@/composables/useLocalStorage";

const ls = useLocalStorage();

const request = async ({ method = "GET", path, data, params }) => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const headers = {
    //"Country-Code": ls.get("COUNTRY_CODE"),
    // TODO handle this, its hardcoded for now
    "Country-Code": "UK",
  };

  if (!headers["Country-Code"]?.length) {
    throw new Error(`Failed to get client's countryCode`);
  }

//   if (token) {
//     headers.Authorization = `Bearer ${token}`;
//   }

  let response;

  try {
    response = await axios({
      method,
      url: `${baseUrl}${path}`,
      data,
      params,
      headers,
	  withCredentials: true
    });
  } catch (error) {
    const json = error.toJSON();
    if (json.status === 403 && json.message === "REGISTRATION_INCOMPLETE") {
      console.log("ok");
    } else {
      throw error;
    }
  }

  return response;
};

export { request };
