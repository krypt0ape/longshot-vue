import { ref } from 'vue'
import { useLocalStorage } from './useLocalStorage'

export default function useRecentlyPlayed(){
	const storage = useLocalStorage("LAST_GAMES");

	const list = ref(storage.get([]));

	const update = (game) => {
		const index = list.value.findIndex((g) => g === game);

		if(index !== -1){
			list.value.splice(index, 1);
		}

		list.value.unshift(game);

		if(list.value.length > 10){
			list.value.pop();
		}

		storage.set(list.value);
	}

	return {
		list, update
	}
}