import { combineReducers } from 'redux';
import showsReducer from "./showsReducer";
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  shows: showsReducer,
});

export default rootReducer;
