import find from 'lodash/find';

const marketLineLabel = (label, competitors) => {
	if(label === '{$competitor1}'){
		return find(competitors, {qualifier: 'home'}).name;
	}
	if(label === '{$competitor2}'){
		return find(competitors, {qualifier: 'away'}).name;
	}

	return label;
}

export {marketLineLabel};