




//action types
export const ADD_MOVIE = 'ADD_MOVIE';

export function addMovies(movies,id){
    return {
        type:'ADD_MOVIE',
        movies,
        id
      }
}