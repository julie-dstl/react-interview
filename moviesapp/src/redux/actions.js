export const SET_MOVIES = 'SET_MOVIES';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';
export const TOGGLE_DISLIKE = 'TOGGLE_DISLIKE';
export const SET_FILTER = 'SET_FILTER';
export const SET_PAGE_SIZE = 'SET_PAGE_SIZE';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const setMovies = (movies) => ({
  type: SET_MOVIES,
  payload: movies
});

export const deleteMovie = (id) => ({
  type: DELETE_MOVIE,
  payload: id
});

export const toggleLike= (id) => ({
  type: TOGGLE_LIKE,
  payload: id
});

export const toggleDislike = (id) => ({
  type: TOGGLE_DISLIKE,
  payload: id
});


export const setFilter = (category) => ({
  type: SET_FILTER,
  payload: category
});

export const setPageSize = (size) => ({
  type: SET_PAGE_SIZE,
  payload: size
});

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page
});