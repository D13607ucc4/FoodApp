import "./header.css";
import { useTheme } from "../context/themeContext";

function Header() {
  const { darkMode } = useTheme();
  console.log("darkMode: ", darkMode);
  return (
    <div className={`container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h1>Food App</h1>
    </div>
  );
}

export default Header;
