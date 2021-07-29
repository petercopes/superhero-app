const HeroStats = ({ stats }) => {
  
  return (
    <div>
    <h2 className="h6 p-1 m-0">Stats</h2>
      <div className="stats overflow-scroll">
        {
          stats.map(stat=> <p key={stat.name} className="m-1">{stat.name}: {stat.value}</p> )
        }
      </div>
    </div>
  );
};
export default HeroStats;
