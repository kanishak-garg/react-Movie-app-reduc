import { ADD_FAVORITE, ADD_MOVIE, REMOVE_FAVORITE } from "../actions";

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
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [action.movie, ...state.favorites]
            }
        case REMOVE_FAVORITE:
            const fav = state.favorites.filter((movie) => {
                return movie !== action.movie;
            })
            return {
                ...state,
                favorites: fav
            }

        default:
            return state;
    }
        
}

