import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Favorites from "./components/Favorites";
import Movies from "./components/Movies";
import About from "./components/About";
import MovieDetail from './components/MovieDetail'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<Movies />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
