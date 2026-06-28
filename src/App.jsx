import "./App.css";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Products from "./components/Products.jsx";
import Navbar from "./components/Navbar.jsx";

import Franchies from "./pages/Franchies.jsx";
import TodaysOffer from "./pages/TodaysOffer.jsx";
import StoreLocator from "./pages/StoreLocator.jsx";

import { Routes, Route } from "react-router-dom";

import IcecreamDetail from "./components/IcecreamDetailPage.jsx";
import Login from "./components/login.jsx";


function App() {

  const products = [
    {
      id: 1,
      name: "Vanilla Delight",
      ingreat: "Creamy Vanilla",
      price: 99,
      image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc"
    },
    {
      id: 2,
      name: "Chocolate Heaven",
      ingreat: "Rich Chocolate",
      price: 119,
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371"
    },
    {
      id: 3,
      name: "Strawberry Bliss",
      ingreat: "Fresh Strawberry",
      price: 109,
      image: "https://images.unsplash.com/photo-1488900128323-21503983a07e"
    },
    {
      id: 4,
      name: "Mango Magic",
      ingreat: "Alphonso Mango",
      price: 129,
      image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f"
    }
  ];


  return (
    <>
      <Header />
      <Navbar />


      <Routes>

        <Route 
          path="/login"
          element={<Login />}
        />


        <Route 
          path="/"
          element={<Products products={products} />}
        />


        <Route
          path="/offer"
          element={<TodaysOffer />}
        />


        <Route
          path="/franchise"
          element={<Franchies />}
        />


        <Route
          path="/store-loc"
          element={<StoreLocator />}
        />


        <Route
          path="/details/:ID"
          element={<IcecreamDetail products={products} />}
        />

      </Routes>


      <Footer />

    </>
  );
}


export default App;