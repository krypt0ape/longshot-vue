import * as oddslib from 'oddslib';

const convertToAmerican = (raw) => {
    const v =  oddslib.from('decimal', raw).to('moneyline');
    const rounded = Math.ceil(v * 100) / 100;
    return rounded > 0 ? `+${rounded}` : rounded;
};
const convertToFractional = (raw) => {
    return oddslib.from('decimal', raw).to('fractional');
};
const convertToIndonesian = (raw) => {
    const v =  oddslib.from('decimal', raw).to('indonesian');
    const rounded = Math.ceil(v * 100) / 100;
    return rounded > 0 ? `+${rounded}` : rounded;
};
const convertToHongkong = (raw) => {
    const v = oddslib.from('decimal', raw).to('hongKong');
    const rounded = Math.ceil(v * 100) / 100;
    return rounded > 0 ? `+${rounded}` : rounded;
};
const convertToMalaysian = (raw) => {
    const v = oddslib.from('decimal', raw).to('malay');
    const rounded = Math.ceil(v * 100) / 100;
    return rounded > 0 ? `+${rounded}` : rounded;
};

export {
	convertToAmerican,
	convertToFractional,
	convertToHongkong,
	convertToIndonesian,
	convertToMalaysian,
};
