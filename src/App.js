import React, { useState, useEffect } from "react";

import { auth } from "./firebase/utils";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Components/SingleProduct/Product";
import Home from "./Screens/Home/Home";
import "./Styles/reset.scss";
import Header from "./Components/Header/Header";
import { handleAccount } from "./Redux/actions/accountData";
import Login from "./Screens/Login/Login";
import ProductDetail from "./Screens/ProductDetail/ProductDetail";

function App() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      dispatch(handleAccount(user));
    });
  }, []);
  return (
    <div className="Main_App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
