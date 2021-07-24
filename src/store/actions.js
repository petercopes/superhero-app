import { HeroesActions } from "./heroes-slice";
import {TeamActions} from "./team-slice";
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
      
      const response = await Axios.get(url);
      if (!response.status === 200) {
        throw new Error("Could not fetch data!");
      }
      const responseHeroes = response.data ?  response.data.results : [];
      dispatch(HeroesActions.setHeroes({heroes:responseHeroes}));

    } catch (error) {
    //   dispatch(uiActions.showNotification({status: "error", title: "Error!", message: "Fetching cart data failed!"}));
        console.log(error);
    }
  };
};
export const addHero = (payload) =>{
  return (dispatch) => {
    dispatch(TeamActions.addHero({hero : payload}))
  };
}
export const deleteHero = (payload) =>{
  return (dispatch) => {
    
    dispatch(TeamActions.deleteHero({hero: payload}))
  };
}


