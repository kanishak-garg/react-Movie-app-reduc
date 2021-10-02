import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from './MovieCard';
import React from "react";

class App extends React.Component {

  componentDidMount(){
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    })
    // make api call
    // dispatch the action
    store.dispatch({
      type:'ADD_MOVIE',
      movies: data
    });
  }

  render(){
    const movies = this.props.store.getState();
    return (
      <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favorites</div>
        </div>
        <div className="list">
          {movies.map((movie,index) => (
            <MovieCard movie={movie} key={`movie-${index}`} />
          ))}
        </div>
      </div>
      </div>
    );
  }
}

export default App;
