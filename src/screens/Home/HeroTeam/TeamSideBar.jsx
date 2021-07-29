import { useSelector } from "react-redux";
import HeroStats from "../../../components/HeroCard/HeroStats";
import { transformStatsToArray } from "../../../utils/utils";

const TeamSideBar = () => {
  const stats = transformStatsToArray(
    useSelector((state) => state.team.powerstats)
  ).sort((statA, statB) => statB.value - statA.value);


  return <HeroStats stats={stats} />;
};
export default TeamSideBar;
