import find from 'lodash/find';

const marketName = (label, competitors, specifier) => {
	if(label.includes('{$competitor1}')){
		const n = find(competitors, (c)=>( c.RadarSportEventCompetitor.qualifier === 'home')).name;
		return label.replace('{$competitor1}', n);
	}
	if(label.includes('{$competitor2}')){
		const n = find(competitors, (c)=>( c.RadarSportEventCompetitor.qualifier === 'away')).name;
		return label.replace('{$competitor2}', n);
	}
	if(label.includes('{!goalnr}')){
		return label.replace('{!goalnr}', specifier.replace("goalnr=",''));
	}
	return label;
}

const eventName = (event) => {
	const home = find(event.competitors, (c)=>( c.RadarSportEventCompetitor.qualifier === 'home')).name;
	const away = find(event.competitors, (c)=>( c.RadarSportEventCompetitor.qualifier === 'away')).name;
	return `${home} - ${away}`;
}

export {marketName, eventName};