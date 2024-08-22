import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Nike from "./pages/Nike";
import Adidas from "./pages/Adidas"
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nike" element={<Nike />} />
          <Route path="/adidas" element={<Adidas />} />
          <Route path="/product/:id" element={<ProductDetail />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
