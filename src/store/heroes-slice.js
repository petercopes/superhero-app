import {createSlice} from '@reduxjs/toolkit';

const heroesSlice = createSlice({
  name: 'heroes',
  initialState: {
    heroesList: []
  },
  reducers: {
    setHeroes(state, action) {
      state.heroesList = action.payload.heroes;
    }

  }
});
export const HeroesActions = heroesSlice.actions;
export default heroesSlice;