import {createSlice} from '@reduxjs/toolkit';

const LoginSlice = createSlice({
  name: 'login',
  initialState: {
    loggedIn:false,
    error: null
  },
  reducers: {
    setLogged(state, action) {
      state.loggedIn = action.payload.isLogged;
      state.errors = action.payload.error
    }

  }
});
export const LoginActions = LoginSlice.actions;
export default LoginSlice;