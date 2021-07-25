import {createSlice} from '@reduxjs/toolkit';

const teamSlice = createSlice({
  name: 'team',
  initialState: {
    teamName: "",
    powerstats : {
        intelligence:0,
        strength:0,
        speed:0,
        durability:0,
        power:0,
        combat:0
    },
    heroesList: [],
    averageHeight: 0,
    averageWeight: 0
  },
  reducers: {
    setName(state, action){
        state.teamName = action.payload.name;
    },
    addHero(state, action) {
    
      state.heroesList.push(action.payload.hero);
      state.averageHeight = (state.averageHeight+parseFloat(action.payload.hero.appearance.height[1]))/state.heroesList.length;
      state.averageWeight = (state.averageWeight+parseFloat(action.payload.hero.appearance.weight[1]))/state.heroesList.length;
      state.powerstats = {
          intelligence: state.powerstats.intelligence+parseFloat(action.payload.hero.powerstats.intelligence),
          strength: state.powerstats.strength+parseFloat(action.payload.hero.powerstats.strength),
          speed: state.powerstats.speed+parseFloat(action.payload.hero.powerstats.speed),
          durability: state.powerstats.durability+parseFloat(action.payload.hero.powerstats.durability),
          power: state.powerstats.power+parseFloat(action.payload.hero.powerstats.power),
          combat: state.powerstats.combat+parseFloat(action.payload.hero.powerstats.combat)
        }
    },
    deleteHero(state, action) {
        const heroToDelete = action.payload.hero;
        state.heroesList = state.heroesList.filter(hero=>hero.id!== heroToDelete.id);
        state.averageHeight = (state.averageHeight-parseFloat(heroToDelete.appearance.height[1]))/state.heroesList.length;
        state.averageWeight = (state.averageWeight-parseFloat(heroToDelete.appearance.weight[1]))/state.heroesList.length;
        state.powerstats = {
          intelligence: state.powerstats.intelligence-parseFloat(heroToDelete.powerstats.intelligence),
          strength: state.powerstats.strength-parseFloat(heroToDelete.powerstats.strength),
          speed: state.powerstats.speed-parseFloat(heroToDelete.powerstats.speed),
          durability: state.powerstats.durability-parseFloat(heroToDelete.powerstats.durability),
          power: state.powerstats.power-parseFloat(heroToDelete.powerstats.power),
          combat: state.powerstats.combat-parseFloat(heroToDelete.powerstats.combat)
        }
        
    }

  }
});
export const TeamActions = teamSlice.actions;
export default teamSlice;