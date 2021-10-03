import { ADD_TO_FAVORITE, ADD_MOVIE, REMOVE_FROM_FAVORITE } from "../actions";

const initialMovieState = {
    list: [],
    favorites: []
}

export default function movies(state = initialMovieState, action){
    switch(action.type){
        case ADD_MOVIE:
            return{
                ...state,
                list:action.movies
            }
        case ADD_TO_FAVORITE:
            return {
                ...state,
                favorites: [action.movie, ...state.favorites]
            }
        case REMOVE_FROM_FAVORITE:
            const fav = state.favorites.filter((movie) => {
                return movie.Title !== action.movie.Title;
            })
            return {
                ...state,
                favorites: fav
            }

        default:
            return state;
    }
        
}

