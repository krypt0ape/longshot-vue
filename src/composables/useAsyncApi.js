import { ref } from "vue";
import useApiRequest from "./useApiRequest";

/**
 * useAsyncApi - returns a call function to call
 * the api when required, it holds the response in
 * local state and returns from the call function so
 * it can be handled by the component as required.
 */
export default function useAsyncApi(method, path) {
	const data = ref(null);
	const loading = ref(false);
	const error = ref(null);

	const request = useApiRequest();

	const call = async (options = {}) => {
		try {
			loading.value = true;

			const baseOptions = {
				method: method,
				path: path,
			};

			const requestOptions = {
				...baseOptions,
				...options,
			};

			let response = await request(requestOptions);

			loading.value = false;

			data.value = response.data;
			return response.data;
		} catch (err) {
			console.error(err);
			error.value = err;
		} finally {
			loading.value = false;
		}
	};

	return {
		loading,
		error,
		call,
		data,
	};
}
