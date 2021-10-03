import React from 'react';
import { addFavorite, removefromFavorite } from '../actions';

class MovieCard extends React.Component {

    
    handleFavoriteClick = () => {
        const { movie } = this.props;
        this.props.dispatch(addFavorite(movie));
    }

    handleunFavoriteClick = () => {
        const { movie } = this.props;
        this.props.dispatch(removefromFavorite(movie));
        console.log('un click');
    }
    
    render(){
        const { movie,isFavorite } = this.props;
        return(
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        { isFavorite 
                            ? <button className="unfavorite-btn" onClick={this.handleunFavoriteClick}>Unfavorite</button>
                            : <button className="favorite-btn" onClick={this.handleFavoriteClick}>favorite</button>
                        }
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;