import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Nike from "./pages/Nike";
import Adidas from "./pages/Adidas"
import ProductDetail from "./pages/ProductDetail";
import Converse from "./pages/Converse";
import Puma from "./pages/Puma";
import NewBalance from "./pages/NewBalance";
import UnderAmour from "./pages/UnderAmour";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nike" element={<Nike />} />
          <Route path="/adidas" element={<Adidas />} />
          <Route path="/converse" element={<Converse />}></Route>
          <Route path="/puma" element={<Puma />}></Route>
          <Route path="/new-balance" element={<NewBalance />}></Route>
          <Route path="/under-armour" element={<UnderAmour />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
