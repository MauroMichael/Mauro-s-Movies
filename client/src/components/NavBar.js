import css from "./NavBar.module.scss";
import Search from "./Search";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={css.container}>
      <Link to="/">
        <h1 className={css.appName}>Mauro's Movies & Series</h1>
      </Link>
      <div className={css.contents}>
        <Link to="/favorites" className={css.link}>
          <button type='button' className={css.favorites}>Favorites</button>
        </Link>
        <Search />
        <Link to="/about" className={css.link}>
          <button type='button' className={css.about}>About</button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
