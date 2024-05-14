import React from "react";
import "./scss/app.scss";
import { Route, Link, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import { CartProvider } from "./components/CartContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <CartProvider>
      <div className='wrapper'>
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className='content'>
          <Routes>
            <Route path='' element={<Home searchValue={searchValue} />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
