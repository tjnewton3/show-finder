import * as types from '../constants/actionTypes';

export function fetchResults(searchPhrase) {
  const endpoint = `https://api.tvmaze.com/search/shows?q=${searchPhrase}`;
  return (dispatch) => {
    fetch(endpoint)
      .then(res => res.json())
      .then(response => dispatch({
        type: types.GET_SEARCH_RESULTS,
        payload: response
      }));
  }
}
