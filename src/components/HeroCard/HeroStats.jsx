const HeroStats = ({ stats }, { itemStyle }) => {
  return (
    <div className="stats">
    <h2 className="h6">Stats</h2>
      <div className="stats overflow-scroll">
        <p className="m-1 ">Combat: {stats.combat}</p>
        <p className="m-1">Durability: {stats.durability}</p>
        <p className="m-1">Intelligence: {stats.intelligence}</p>
        <p className="m-1">Power: {stats.power}</p>
        <p className="m-1">Speed: {stats.speed}</p>
        <p className="m-1">Strength: {stats.strength}</p>
      </div>
    </div>
  );
};
export default HeroStats;
