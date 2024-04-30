import axios from "axios";
import useUserStore from "@/stores/useUserStore";
import {ref} from "vue";

/**
 * An axios wrapper that handles the country code restrictions on
 * requests and handles the errors from server
 * @returns {request} - a function that makes a request to the API
 */
const ip = ref(null);

export default function useApiRequest() {
	const userStore = useUserStore();

	const request = async ({
		method = "GET",
		path,
		data,
		params,
		headers = {},
	}) => {
		console.log(params);
		const baseUrl = import.meta.env.VITE_API_URL;

		if(! ip.value){
			const { data } = await axios.get("https://api.ipify.org?format=json");
			ip.value = data.ip;
		}
		
		// Attached to all requets, the node server will do a location check based 
		// off this ip address and set location cookies
		headers["Client-Ip"] = ip.value;

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
