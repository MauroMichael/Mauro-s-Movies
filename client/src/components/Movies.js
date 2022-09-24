import css from "./Movies.module.scss";
import Movie from "./Movie";
import { useSelector } from "react-redux";

function Movies() {
let movies = useSelector((state) => state.moviesLoaded);

  return (
    <>
      <p className={css.count}>Total Results: {movies.length}</p>
    <div className={css.container}>
      {
          movies?.map((m) => (
          <Movie
            key={m.imdbID}
            id={m.imdbID}
            title={m.Title}
            year={m.Year}
            poster={m.Poster}
          />
        ))
      }
    </div>
    </>
  );
}

export default Movies;
