import HomePage from "./pages/homePage";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import "./App.css";
import ProductPageDetail from "./pages/productPageDetail";
import AddFoodPage from "./pages/addFoodPage";
import Header from "./components/header";

/*
const comidas = [
  { id: "1", img: "🍔", name: "Hamburguesa", price: 157, stock: 0 },
  { id: "2", img: "🍕", name: "Pizza", price: 189, stock: 9 },
  { id: "3", img: "🍣", name: "Sushi", price: 132, stock: 6 },
  { id: "4", img: "🌮", name: "Taco", price: 175, stock: 2 },
  { id: "5", img: "🥗", name: "Ensalada", price: 108, stock: 7 },
  { id: "6", img: "🍜", name: "Ramen", price: 198, stock: 3 },
  { id: "7", img: "🍩", name: "Dona", price: 123, stock: 5 },
  { id: "8", img: "🥪", name: "Sándwich", price: 144, stock: 1 },
  { id: "9", img: "🥞", name: "Panqueques", price: 160, stock: 8 },
  { id: "10", img: "🍟", name: "Papas fritas", price: 116, stock: 6 }
];
 */

function App() {
  {
    /* Ejemplo de como debemos hacer las rutas */
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Navigate replace to="/food" />} />

        <Route path="/food" element={<HomePage />} />

        <Route path="/food/:productId" element={<ProductPageDetail />} />

        <Route path="/addFood" element={<AddFoodPage />} />
      </Routes>
    </>
  );
}

export default App;
