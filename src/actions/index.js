//action types
export const ADD_MOVIE = 'ADD_MOVIE';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export function addMovies(movies,id){
    return {
        type: ADD_MOVIE,
        movies,
        id
      }
}


export function addFavorite(movie){
    return {
        type: ADD_FAVORITE,
        movie
      }
}

export function removeFavorite(movie){
    return {
        type: REMOVE_FAVORITE,
        movie
      }
}