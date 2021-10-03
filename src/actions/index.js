//action types
export const ADD_MOVIE = 'ADD_MOVIE';
export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';
export function addMovies(movies,id){
    return {
        type: ADD_MOVIE,
        movies,
        id
      }
}


export function addFavorite(movie){
    return {
        type: ADD_TO_FAVORITE,
        movie
      }
}

export function removefromFavorite(movie){
    return {
        type: REMOVE_FROM_FAVORITE,
        movie
      }
}