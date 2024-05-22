import find from 'lodash/find';

const marketLineLabel = (label, competitors) => {
	if(label.includes('{$competitor1}')){
		const n = find(competitors, {qualifier: 'home'}).name;
		return label.replace('{$competitor1}', n);
	}
	if(label.includes('{$competitor2}')){
		const n = find(competitors, {qualifier: 'away'}).name;
		return label.replace('{$competitor2}', n);
	}

	return label;
}

export {marketLineLabel};