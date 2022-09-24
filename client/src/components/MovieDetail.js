import css from'./MovieDetail.module.scss';
import { useParams } from 'react-router-dom';
import { clearMovieDetail, getMovieDetail, addMovieFavorite } from '../actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MovieDetail() {
    const {id} = useParams()
    const movieDetail = useSelector(state => state.movieDetail)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieDetail(id))
        dispatch(clearMovieDetail())

    },[dispatch, id])

    return (
        <div className={css.container}>
            <h1>{movieDetail.Title}</h1>
            <div className={css.detailContainer}>
                <img className={css.prop}src={movieDetail.Poster} alt='movie poster'/>
                <div className={css.info}>
                    <div><span className={css.prop}>Runtime: </span> {movieDetail.Runtime}</div>
                    <div><span className={css.prop}>Year: </span> {movieDetail.Year}</div>
                    <div><span className={css.prop}>Director: </span> {movieDetail.Director}</div>
                    <div><span className={css.prop}>Actors: </span>{movieDetail.Actors}</div>
                    <div><span className={css.prop}>Synopsis: </span> {movieDetail.Plot}</div>
                    <div><span className={css.prop}>IMDB Rating: </span> {!movieDetail.Ratings?.[0]
                        ? 'N/A'
                        : movieDetail.Ratings?.[0].Value}</div>
                    <div><span className={css.prop}>Country: </span> {movieDetail.Country}</div>
                    <div><span className={css.prop}>Awards: </span> {movieDetail.Awards}</div>
                </div>
            </div>
            <button className={css.button}
              type='button' 
              onClick={() => dispatch(addMovieFavorite(movieDetail.imdbID, movieDetail.Title))}
              >Add to Favorites</button>
        </div>
    )
}

export default MovieDetail;