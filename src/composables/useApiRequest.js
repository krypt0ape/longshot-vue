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
			const req =  await axios({
				method,
				url: `${baseUrl}${path}`,
				data,
				params,
				headers,
				withCredentials: true,
			});
			// Add 1 sec delay to make the UI less jarring
			await new Promise((resolve) => setTimeout(resolve, 1000));
			if(! req.data.success){
				throw new Error(req.data.message);	
			}
			return req.data;

		} catch (error) {
			if(error.response?.status === 401){
				userStore.setUser(null)
				return { data: null } 
			}else {
				//console.error(error)
				throw error;
			}
		}
	};

	return request;
}
