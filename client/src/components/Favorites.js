import css from "./Favorites.module.scss";
import { useDispatch } from "react-redux";
import { getFavorites, removeMovieFavorite } from "../actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Favorites() {
  const favs = useSelector((state) => state.moviesFavorites);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  function remove (id) {
    dispatch(removeMovieFavorite(id));
    setTimeout(() => {
      dispatch(getFavorites());

    },1000)
    
  }
  return (
    <div className={css.supremeContainer}>
      <h1 className={css.favTitle}>Favorites</h1>
      <p className={css.count}>Total: {favs.length}</p>
    <div className={css.mainContainer}>
      {favs?.map((f) => (
        <div key={f.imdbID}>
            <div className={css.container}>
            <Link className={css.link} to={`/detail/${f.imdbID}`}>
              <div className={css.content}>
                <img className={css.img} src={f.Poster} alt="movie poster" />
                <div className={css.name}>
                    <h4 className={css.title}>{f.Title}</h4>
                </div>
                <div className={css.year}>Year: {f.Year}</div>
              </div>
              </Link>
              <button
                className={css.favoriteButton}
                type="button"
                onClick={() => remove(f.imdbID, f.Title)}
                >
                Remove Favorite
              </button>
            </div>
          </div>
      ))}
    </div>
    </div>
  );
}

export default Favorites;
