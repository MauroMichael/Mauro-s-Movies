import css from "./Search.module.scss";
import 'animate.css';
import Swal from "sweetalert2";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovies, getSeries, clearElements } from "../actions";
import { useNavigate } from "react-router-dom";

function Search() {
  const [title, setTitle] = useState("");
  const [option, setOption] = useState("movies");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSelect(e) {
    if (e.target.value === "movies") setOption("movies");
    if (e.target.value === "series") setOption("series");
    dispatch(clearElements())
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(title.length === 0) return Swal.fire({
      position: 'top',
      icon: 'info',
      iconColor: '#ffa420',
      color: '#ffa420',
      background: 'black',
      title: 'You must to input a name',
      showConfirmButton: false,
      timer: 2500,
      showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
    });
    if (option === "movies") dispatch(getMovies(title));
    if (option === "series") dispatch(getSeries(title));
    setTitle("");
    navigate("/");
  }

  return (
    <div className={css.mainContainer}>
      <form className={css.formContainer} onSubmit={handleSubmit}>
        <select
          className={css.select}
          htmlFor="title"
          onChange={handleSelect}
        >
          <option value="movies">Movie: </option>
          <option value="series">Series: </option>
        </select>
        <input
          className={css.input}
          type="text"
          id="title"
          autoComplete="off"
          placeholder="Input a word"
          value={title}
          onChange={handleChange}
        />
        <button className={css.submit} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
