import { ADD_MOVIE } from "../actions";

const initialMovieState = {
    list: [],
    favorites: []
}

export default function movies(state = initialMovieState, action){
    if(action.type === ADD_MOVIE){
        return {
            ...state,
            list:action.movies
        }
    }
    return state;
}

