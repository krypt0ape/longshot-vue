import axios from "axios";
import useUserStore from "@/stores/useUserStore";

/**
 * An axios wrapper that handles the country code restrictions on
 * requests and handles the errors from server
 * @returns {request} - a function that makes a request to the API
 */
export default function useApiRequest() {
	const request = async ({
		method = "GET",
		path,
		data,
		params,
		headers = {},
	}) => {
		const baseUrl = import.meta.env.VITE_API_URL;

		const userStore = useUserStore();

		// TODO handle this, its hardcoded for now
		//"Country-Code": ls.get("COUNTRY_CODE"),
		headers["Country-Code"] = "US";

		if (!headers["Country-Code"]?.length) {
			throw new Error(`Failed to get client's countryCode`);
		}

		try {
			const req =  await axios({
				method,
				url: `${baseUrl}${path}`,
				data,
				params,
				headers,
				withCredentials: true,
			});
			return req.data;

		} catch (error) {
			const json = error.toJSON();
			console.error(json)
			if(json.status === 401){
				userStore.logout();
			}else {
				throw new Error(json.message);
			}
		}
	};

	return request;
}
