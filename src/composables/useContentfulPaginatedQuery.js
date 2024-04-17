import useAsyncApi from "./useAsyncApi";
import { ref } from "vue";
/**
 * Reusable composable function to fetch paginated data from Contentful
 */
export default function useContentfulPaginatedQuery(q) {
	const itemsPerPage = ref(q.limit);
	const totalItems = ref(0);
	const totalPages = ref(0);
	const currentPage = ref(0);
	const query = ref(q);
	const data = ref(false);

	const {
		call: getEntries,
		error,
		loading,
	} = useAsyncApi("post", "/contentful/entries");

	// IF we need to update or set the query after the hook
	// is initialized
	const updateQuery = (newQuery) => { 
		query.value = newQuery;	
	}

	const fetch = async () => {
		loading.value = true;
		error.value = null;
console.log('query.value', query.value);
		// This needs to be set for pagination to work
		if(! query.value.skip) query.value.skip = 0;

		try {
			const response = await getEntries({data: query.value});
			totalItems.value = response.total;
			totalPages.value = Math.ceil(totalItems.value / itemsPerPage.value);
			currentPage.value = Math.ceil(query.value.skip / itemsPerPage.value) + 1;
			data.value =  response;
		} catch (err) {
			error.value = err;
		} finally {
			loading.value = false;
		}
	}

	const next = () => {
		if (query.value.skip + itemsPerPage.value < totalItems.value) {
			query.value.skip += itemsPerPage.value;
			fetch();
		}
	}

	const prev = () => {
		if (query.value.skip >= itemsPerPage.value) {
			query.value.skip -= itemsPerPage.value;
			fetch();
		}
	}

	const skipToPage = (page) => {
		query.value.skip = (page - 1) * itemsPerPage.value;
		fetch();
	}

	return {
		itemsPerPage,
		totalPages,
		totalItems,
		query,
		fetch,
		next,
		prev,
		skipToPage,
		loading,
		error,
		updateQuery,
		data,
		currentPage
	}
}