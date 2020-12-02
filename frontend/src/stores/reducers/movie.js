import {
  GET_ALL_MOVIES,
  GET_ALL_MOVIES_IS_LOADING,
} from '../actions/types';

const initialState = {
  movies: [],
  isLoading: false
}

const getMoviesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MOVIES:
      return {
        ...state,
        movies: action.movieData,
        isLoading: false
      }
    case GET_ALL_MOVIES_IS_LOADING:
      return {
        ...state,
        isLoading: true
      }
      default:
        return state;
  }
}

export default getMoviesListReducer;
