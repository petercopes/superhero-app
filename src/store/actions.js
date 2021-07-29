import { HeroesActions } from "./heroes-slice";
import { LoginActions } from "./login-slice";
import {TeamActions} from "./team-slice";
import { uiActions } from "./ui-slice";
const Axios = require("axios");
const accessToken = "2070372629804352";
export const setName = (payload) => {
  return (dispatch) => {
    dispatch(TeamActions.setName({name : payload}))
  }; 
}

export const fetchHeroes = (payload) => {  
  const url = `/${accessToken}/search/${payload}`;
  return async(dispatch) => {
    try {
      dispatch(uiActions.setSearchStatus({status:"pending"}));
      
      const response = await Axios.get(url);
      if (!response.status === 200) {
        throw new Error("Could not fetch data!");
      }
      if(response.data.response ==="error"){
        dispatch(uiActions.setSearchStatus({status:"failed"}));
        dispatch(HeroesActions.setHeroes({heroes:[]}));
      }
      else{
        dispatch(HeroesActions.setHeroes({heroes:response.data.results}));
        dispatch(uiActions.setSearchStatus({status:"success"}));
      }
      
    } catch (error) {
        console.log(error);
        dispatch(uiActions.setSearchStatus({status:"failed"}));
    }
  };
};
export const clearSearch = () =>{
  return (dispatch)=>{
    dispatch(HeroesActions.setHeroes({heroes:[]}));
  }

}
export const logIn = (payload) => {
  const url = "http://challenge-react.alkemy.org";
  return async(dispatch) => {
    try {
      dispatch(uiActions.setLoginStatus({status:"pending"}));
      const data = {
        email: payload.email,
        password: payload.password
      }
      console.log(data);
      const response = await Axios.post(url, data);
      if (!response.status === 201|| !response.status === 200) {
        throw new Error("Could not fetch data!");
      }
      //localStorage
      window.localStorage.setItem("token", response.data.token)
      dispatch(LoginActions.setLogged({isLogged:true,errors:null}));
      dispatch(uiActions.setLoginStatus({status:"success"}));

    } catch (error) {
    //   dispatch(uiActions.showNotification({status: "error", title: "Error!", message: "Invalid email - password Combination!"}));
        console.log(error);
        dispatch(LoginActions.setLogged({isLogged:false,error:{message:"Attempt to log in failed!"}}));
        dispatch(uiActions.setLoginStatus({status:"failed"}));
    }
  };
} 
export const addHero = (payload) =>{
  return (dispatch) => {
    dispatch(TeamActions.addHero({hero : payload}));
    dispatch(uiActions.setHeroAddStatus({status:"success",message:"Hero added Succesfully!"}));
  };
}
export const deleteHero = (payload) =>{
  return (dispatch) => {
    
    dispatch(TeamActions.deleteHero({hero: payload}))
  };
}
export const setHeroAddStatus = (payload) =>{
  return (dispatch) =>{
    dispatch(uiActions.setHeroAddStatus(payload));
  }

}
export const setSearchStatus = (payload) =>{
  return (dispatch) =>{
    dispatch(uiActions.setSearchStatus(payload));
  }

}


