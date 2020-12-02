import toastr from 'toastr';
import { axios, _catchAxiosError } from '../../services/axios';
import { BASE_URL } from '../../services/config';
import {
  GET_ALL_MOVIES,
  GET_ALL_MOVIES_IS_LOADING,
} from './types';

const getAllMovies = movieData => ({
  type: GET_ALL_MOVIES,
  movieData
});

const isLoading = () => ({
  type: GET_ALL_MOVIES_IS_LOADING
});

export const getAllMoviesRequest = (onError = false) => async dispatch => {
  try {
    dispatch(isLoading());
    const response = await axios({
      method: 'get',
      url: `${BASE_URL}/movies`
    });
    const { data } = response.data;
    console.log('response.data', response.data)
    dispatch(getAllMovies(data));
  } catch(error) {
    const reportError = await _catchAxiosError(error, onError);
    toastr.error(reportError);
    throw error
  }
}

export const likeMovieRequest = (id, onError = false) => async dispatch => {
  try {
    const response = await axios({
      method: 'patch',
      url: `${BASE_URL}/movie/${id}`
    })
    const { message } = response.data;
    dispatch(getAllMoviesRequest())
    toastr.success(message)
  } catch(error) {
    const reportError = await _catchAxiosError(error, onError);
    toastr.error(reportError);
    throw error
  }
}