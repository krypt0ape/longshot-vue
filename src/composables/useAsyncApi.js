import { ref, onMounted } from 'vue';
import {request} from "../api/api"

export default function useAsyncApi(method, path) {
	const loading = ref(true);
	const error = ref(null);
	
	const call = async (options)=>{
		try {
			loading.value = true;
			const r =  await request({
				method: method,
				path: path,
				data: options
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