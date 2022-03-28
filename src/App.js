import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/shop" element={<ShopPage />} exact />
        <Route path="/signin" element={<SignInAndSignUpPage />} exact />
      </Routes>
    </div>
  );
}

export default App;
