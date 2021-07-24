import { configureStore } from '@reduxjs/toolkit';

import teamSlice from './team-slice';
import heroesSlice from './heroes-slice';



const store = configureStore({
  reducer: {heroes: heroesSlice.reducer , team: teamSlice.reducer},
});

export default store;