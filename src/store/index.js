import { configureStore } from '@reduxjs/toolkit';

import teamSlice from './team-slice';
import heroesSlice from './heroes-slice';
import LoginSlice from './login-slice';
import uiSlice from './ui-slice';



const store = configureStore({
  reducer: {heroes: heroesSlice.reducer , team: teamSlice.reducer, login: LoginSlice.reducer,ui: uiSlice.reducer},
});

export default store;