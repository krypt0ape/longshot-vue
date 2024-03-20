import axios from "axios";
import { useAuth0 } from "@auth0/auth0-vue";

export type ApiRequest = { 
	method?: string,
	path: string,
	data?: any
}

const request = async ({ method = 'GET', path, data }: ApiRequest): Promise<any> =>{
	const baseUrl = import.meta.env.VITE_API_URL;
	
	const { getAccessTokenSilently } = useAuth0();
	
	const token = await getAccessTokenSilently();
	
	if(!path.startsWith('/')) {
		path = `/${path}`;
	}
	
	const { data: response } = await axios({
		method,
		url: `${baseUrl}${path}`,
		data,
		headers: (token) ? { Authorization: `Bearer ${token}` } : {}
	});

	return response;
};

export {
	request
};
