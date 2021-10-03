import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from './MovieCard';
import React from "react";
import { addMovies,setShowFavorite } from "../actions";

class App extends React.Component {

  componentDidMount(){
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate();
      console.log(store.getState());
    })
    // make api call
    // dispatch the action
    store.dispatch(addMovies(data));
  }

  isMovieFavorite = (movie) => {
    const { favorites } = this.props.store.getState();
    const index = favorites.indexOf(movie);
    if(index !== -1){
      //found the movie
      return true;
    }
    return false;
  } 

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavorite(val));
  }

  render(){
    const { list, favorites, showFavorites } = this.props.store.getState();
    
    const displayMovies = showFavorites ? favorites: list;

    return (
      <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className={`tab ${showFavorites? '':'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
          <div className={`tab ${showFavorites? 'active-tabs': ''}`} onClick={() => this.onChangeTab(true)}>Favorites</div>
        </div>
        <div className="list">
          {displayMovies.map((movie,index) => (
            <MovieCard 
              movie={movie} 
              key={`movie-${index}`} 
              dispatch={this.props.store.dispatch} 
              isFavorite={this.isMovieFavorite(movie)}
            />

          ))}
        </div>
        {displayMovies.length>0 ? null : <div className="no-movies">No movies available to show</div>}
      </div>
      </div>
    );
  }
}

export default App;
