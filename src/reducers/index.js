import { ADD_FAVORITE, ADD_MOVIE } from "../actions";

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
        default:
            return state;
    }
        
}

