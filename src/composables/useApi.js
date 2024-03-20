import { ref, onMounted } from 'vue';
import {request} from "../api/api"

export default function useApi(method, path, options) {
	const data = ref(null);
	const loading = ref(true);
	const error = ref(null);
	
	onMounted(()=>{
		refetch();
	})

	const refetch = () => {
		request({
			method: method,
			path: path,
			data: options
		}).then((response) => {
			data.value = response;
		}).catch((err) => {
			console.log(err);
			error.value = err;
		}).finally(() => {
			loading.value = false
		});
	}

	return {
		data, loading, error, refetch
	}
}