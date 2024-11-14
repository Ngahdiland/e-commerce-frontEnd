import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Collection from "./pages/collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/collection" element={<Collection/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/product/:productId" element={<Product/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/place-order" element={<PlaceOrder/>}></Route>
        <Route path="/orders" element={<Orders/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;