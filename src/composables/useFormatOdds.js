import { ref, computed } from "vue";
import {
	convertToAmerican,
	convertToFractional,
	convertToHongkong,
	convertToIndonesian,
	convertToMalaysian,
} from "@/utils/oddsFormat";

const oddsFormat = ref(window.localStorage.getItem("oddsFormat") || "fractional");

const useOddsFormat = (rawOdds) => {
	const raw = ref(
		parseFloat(rawOdds).toFixed(2)
	);

	const odds = computed(() => {
		// Prevents errors in odds conversion
		if(raw.value == 1.00) raw.value = 1.01; 
		 try {
			if (oddsFormat.value === "decimal") return raw.value;
			if (oddsFormat.value === "fractional") return convertToFractional(raw.value);
			if (oddsFormat.value === "american") return convertToAmerican(raw.value);
			if (oddsFormat.value === "indonesian") return convertToIndonesian(raw.value);
			if (oddsFormat.value === "hongkong") return convertToHongkong(raw.value);
			if (oddsFormat.value === "malaysian") return convertToMalaysian(raw.value);
		 }catch(err){
			console.log("Odds Error " + raw.value)
		 }

		 	return raw.value;
	});
	const setOddsFormat = (format) => {
		oddsFormat.value = format;
		window.localStorage.setItem("oddsFormat", format);
	};

	return {
		odds, setOddsFormat, oddsFormat
	}
};

export default useOddsFormat;
