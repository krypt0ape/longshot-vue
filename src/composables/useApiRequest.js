import axios from "axios";
import useUserStore from "@/stores/useUserStore";

/**
 * An axios wrapper that handles the country code restrictions on
 * requests and handles the errors from server
 * @returns {request} - a function that makes a request to the API
 */
export default function useApiRequest() {
	const userStore = useUserStore();

	const request = async ({
		method = "GET",
		path,
		data,
		params,
		headers = {},
	}) => {
		const baseUrl = import.meta.env.VITE_API_URL;
console.log(baseUrl);
		

		// TODO handle this, its hardcoded for now
		//"Country-Code": ls.get("COUNTRY_CODE"),
		headers["Country-Code"] = "UK";

		if (!headers["Country-Code"]?.length) {
			throw new Error(`Failed to get client's countryCode`);
		}

		try {
			return await axios({
				method,
				url: `${baseUrl}${path}`,
				data,
				params,
				headers,
				withCredentials: true,
			});

		} catch (error) {
			if(error.response?.status === 401){
				userStore.signout();
				return { data: null } 
			}else {
				console.error(error)
				throw error;
			}
		}
	};

	return request;
}
