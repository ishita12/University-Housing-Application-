import * as actionTypes from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
  profile: null,
  profiles: null,
  loading: false
}


const profReducer = (state= initialState, action) => {

 switch(action.type) {
  case actionTypes.PROFILE_LOADING:
  return {
    ...state,
    loading: true
  }
  case actionTypes.GET_PROFILE:
   return {
     ...state,
     profile: action.payload,
     loading: false
   }
   case actionTypes.CLEAR_CURRENT_PROFILE:
    return {
      ...state,
      profile: null
    }
  case actionTypes.GET_PROFILES:
    return {
      ...state,
      profiles: action.payload,
      loading: false
    }



  default:
    return state;


 }

}



export default profReducer;
