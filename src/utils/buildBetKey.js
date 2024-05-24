 const buildBetKey = (sportEventId, outcomeId, marketId) => {
	return `${sportEventId}|${outcomeId}|${marketId}`;	
 }
 export {buildBetKey};