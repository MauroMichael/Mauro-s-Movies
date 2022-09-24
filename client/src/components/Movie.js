import css from "./Movie.module.scss";
import { Link } from "react-router-dom";
import { addMovieFavorite } from '../actions'
import { useDispatch } from 'react-redux'

function Movie({ id, title, year, poster }) {
  const dispatch = useDispatch();
  //Refactoring
  // function addFav () {
  //   dispatch(addMovieFavorite)
  // }
  return (
    <div className={css.container}>
      <Link className={css.link} to={`/detail/${id}`}>
        <div className={css.content}>
          <img className={css.img} src={poster} alt="movie poster" />
          <div className={css.name}>
              <h4 className={css.title}>{title}</h4>
          </div>
          <div className={css.year}>Year {year}</div>
        </div>
        </Link>
        <button className={css.button} 
                type='button' 
                onClick={() => dispatch(addMovieFavorite(id, title))}
                >Add to Favorites
        </button>
    </div>
  );
}

export default Movie;
