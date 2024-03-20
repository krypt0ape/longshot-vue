import { ref, onMounted } from 'vue';
import {request} from "../api/api"
import { useAuth0 } from "@auth0/auth0-vue";

export default function useAsyncApi(method, path) {
	const loading = ref(true);
	const error = ref(null);
	
	const { getAccessTokenSilently } = useAuth0();
	
	const call = async (options)=>{
		const token = await getAccessTokenSilently();

		try {
			loading.value = true;
			const r =  await request({
				method: method,
				path: path,
				data: options,
				token: token ?? null
			});
			loading.value = false;
			return r;
		}catch(err){
			loading.value = false;
			error.value = err;
			console.log(err);
		}
	}

	return {
		loading, error, call
	}
}