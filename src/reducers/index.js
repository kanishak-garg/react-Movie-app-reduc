import { combineReducers } from "redux";
import { ADD_TO_FAVORITE, ADD_MOVIE, REMOVE_FROM_FAVORITE,SET_SHOW_FAVORITES } from "../actions";

const initialMovieState = {
    list: [],
    favorites: [],
    showFavorites: false
}

function movies(state = initialMovieState, action){
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
            const filteredArray = state.favorites.filter((movie) => {
                return movie.Title !== action.movie.Title;
            })
            return {
                ...state,
                favorites: filteredArray
            }
        case SET_SHOW_FAVORITES:
                return {
                    ...state,
                    showFavorites: action.val
                    
                }
        default:
            return state;
    }
        
}

const initialSearchState = {
    results:{}
}
function search(state=initialSearchState,action){
    return state;
}

const initialRootState = {
    movies: initialMovieState,
    search: initialSearchState
}

// export default function rootReducer(state=initialRootState,action){
//     return {
//         movies: movies(state.movies,action),
//         search: search(state.search,action)
//     }
// }
// combine reducers method is equivalent to root reducer, combineReducers is inbuilt in redux and handle
// it in same way as root reducer(manually built)
export default combineReducers({
    movies,
    search
})