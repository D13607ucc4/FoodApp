import "./header.css";
import { useTheme } from "../context/themeContext";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const { darkMode } = useTheme();
  const location = useLocation();

  return (
    <div className={`container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h1>Food App</h1>
      {!(location.pathname == "/food") && (
        <Link to={`/food`}>Volver a todos los productos</Link>
      )}

      {!(location.pathname == "/addFood") && (
        <Link to={`/addFood`}>Añadir mas productos</Link>
      )}
    </div>
  );
}

export default Header;
