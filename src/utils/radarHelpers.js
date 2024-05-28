import find from "lodash/find";

const marketName = (label, competitors, specifier) => {
  if (label.includes("{$competitor1}")) {
    const n = find(
      competitors,
      (c) => c.RadarSportEventCompetitor.qualifier === "home"
    ).name;
    label = label.replace("{$competitor1}", n);
  }
  if (label.includes("{$competitor2}")) {
    const n = find(
      competitors,
      (c) => c.RadarSportEventCompetitor.qualifier === "away"
    ).name;
    label = label.replace("{$competitor2}", n);
  }
  if (label.includes("{!goalnr}")) {
    const number = specifier.replace("goalnr=", "");
    label = label.replace("{!goalnr}", addOrdinalSuffix(number));
  }
  if (label.includes("{!bookingnr}")) {
    const number = specifier.replace("bookingnr=", "");
    label = label.replace("{!bookingnr}", addOrdinalSuffix(number));
  }
  if (label.includes("{!cornernr}")) {
    const number = specifier.replace("cornernr=", "");
    label = label.replace("{!cornernr}", addOrdinalSuffix(number));
  }
  if (label.includes("{total}")) {
    label = label.replace("{total}", specifier.replace("total=", ""));
  }
  if (label.includes("{hcp}")) {
    label = label.replace("{hcp}", specifier.replace("hcp=", ""));
  }
  if (label.includes("{from}") && label.includes("{to}")) {
    const [from, to] = specifier.split("|");
    label = label.replace("{from}", from.replace("from=", ""));
    label = label.replace("{to}", to.replace("to=", ""));
  }
  return label;
};

const eventName = (event) => {
  const home = find(
    event.competitors,
    (c) => c.RadarSportEventCompetitor.qualifier === "home"
  ).name;
  const away = find(
    event.competitors,
    (c) => c.RadarSportEventCompetitor.qualifier === "away"
  ).name;
  return `${home} - ${away}`;
};

const addOrdinalSuffix = (number) => {
  let j = number % 10,
    k = number % 100;
  if (j == 1 && k != 11) {
    return number + "st";
  }
  if (j == 2 && k != 12) {
    return number + "nd";
  }
  if (j == 3 && k != 13) {
    return number + "rd";
  }
  return number + "th";
};

export { marketName, eventName };
