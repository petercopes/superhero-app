import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { loginStatus: "initial" , searchStatus: "initial" , heroAddStatus:{status:"initial",message:""}},
  reducers: {
    setLoginStatus(state,action) {
      state.loginStatus = action.payload.status;
    },
    setSearchStatus(state,action) {
        state.searchStatus = action.payload.status;
    },
    setHeroAddStatus(state, action) {
        state.heroAddStatus = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;