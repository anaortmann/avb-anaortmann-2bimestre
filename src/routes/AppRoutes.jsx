import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cachorros from "../pages/Cachorros";
import Favoritos from "../pages/Favoritos/FavoritesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cachorros" element={<Cachorros />} />
      <Route path="/favoritos" element={<Favoritos />} />
    </Routes>
  );
}

export default App;
