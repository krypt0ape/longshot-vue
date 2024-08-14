 const buildBetKey = (sportEventId, outcomeId, marketId, specifier = '') => {
	return `${sportEventId}|${outcomeId}|${marketId}|${specifier}`;	
 }
 export {buildBetKey};