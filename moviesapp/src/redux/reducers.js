import {
  SET_MOVIES,
  DELETE_MOVIE,
  TOGGLE_LIKE,
  TOGGLE_DISLIKE,
  SET_FILTER,
  SET_PAGE_SIZE,
  SET_CURRENT_PAGE
} from './actions';

const initialState = {
  movies: [],
  filter: [],
  pageSize: 4,
  currentPage: 1
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload };

    case DELETE_MOVIE:
      return { 
        ...state, 
        movies: state.movies.filter(movie => movie.id !== action.payload)
      };

    case TOGGLE_DISLIKE:
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie.id === action.payload
            ? { ...movie, dislikes: movie.dislikes + 1 }
            : movie
        )
      };

    case TOGGLE_LIKE:
      return {
        ...state,
        movies: state.movies.map(movie =>
            movie.id === action.payload
                ? { ...movie, likes: movie.likes + 1 }
                : movie
        )
      };

    case SET_FILTER:
      return { ...state, filter: action.payload };

    case SET_PAGE_SIZE:
      return { ...state, pageSize: action.payload };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };

    default:
      return state;
  }
};

export default moviesReducer;