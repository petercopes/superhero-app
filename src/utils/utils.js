const transformStatsToArray = (stats) => {
  let powerstatsArray = [];
  for (const key in stats) {
    powerstatsArray.push({ name: key, value: stats[key] });
  }
  return powerstatsArray;
};
const HeroOrientationAvailability = (hero,teamHeroes) => {
    let sameOrientationHeroes = 0;

    for (const teamHero of teamHeroes) {
      if (hero.biography.alignment === teamHero.biography.alignment)
        sameOrientationHeroes++;
    }
    return sameOrientationHeroes < 3;
  };



export {transformStatsToArray, HeroOrientationAvailability};