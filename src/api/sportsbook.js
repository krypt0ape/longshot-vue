export const PLACE_BET = ({bets}) => ({
	path: "/sportsbook/bet",
	method: "POST",
	data: bets
});