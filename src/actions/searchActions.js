import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from './types';
import axios from 'axios';
import { APIKey } from '../APIKey';

export const searchMovie = text => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text
  });
};


export const fetchMovies = text => dispatch => {
  console.log(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=en-US&query=${text}`)
  axios
    .get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=en-US&query=${text}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchMovie = id => dispatch => {
  console.log(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`)  
  axios

    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};
