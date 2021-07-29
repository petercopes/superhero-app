const transformStatsToArray = (stats) => {
  let powerstatsArray = [];
  for (const key in stats) {
    powerstatsArray.push({ name: key, value: stats[key] });
  }
  return powerstatsArray;
};



export {transformStatsToArray};