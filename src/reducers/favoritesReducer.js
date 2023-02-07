import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/favoritesActions";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return { ...state, displayFavorites: !state.displayFavorites };
    case ADD_FAVORITE:
      return { ...state, favorites: [action.payload, ...state.favorites] };
    case REMOVE_FAVORITE:
      return {
        favorites: state.favorites.filter(
          (movie) => action.payload !== movie.id
        ),
      };
    default:
      return state;
  }
};
export default favoritesReducer;
