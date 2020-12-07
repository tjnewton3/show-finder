import {GET_SEARCH_RESULTS} from '../constants/actionTypes';
import initialState from './initialState';

export default function showsReducer(state = initialState, action) {

  switch (action.type) {
    case GET_SEARCH_RESULTS:
      return {...state, shows: action.payload};

    default:
      return state;
  }
}
