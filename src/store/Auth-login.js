import { createStore } from "redux";

const createReducer = (state = {login: false }, action) => {
  if (action.type == "toggle") {
    
    return {
     login :!state.login,
    };
  }
 
  return state;
};
const store = createStore(createReducer);

export default store;
