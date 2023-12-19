import './App.css';
import Home from "./pages/Home.js"
import Contact from "./pages/Contact.js"
import Team from "./pages/Team.js"
import Buy from "./pages/Buy.js"
import Sell from "./pages/Sell.jsx"
import Product from "./pages/Product.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js"
import SingUp from "./pages/signup"
import ProductDetails from "./pages/ProductDetails.js"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/product" element={<Product />} />
          <Route path="/buy/:id" element={<ProductDetails/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SingUp />} />
        </Routes> 
        </BrowserRouter>
    </div>
  );
}

export default App;
