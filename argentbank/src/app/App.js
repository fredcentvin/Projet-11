
import React from "react";
import {Routes, Route} from "react-router-dom";
// import { useSelector } from "react-redux";
import Header  from "../container/Header";
import Footer from "../container/Footer";
import Home from "../pages/Home";
import Error from "../pages/Error.jsx";
import Login from "../pages/Login.jsx";
import Profile from "../pages/Profile.jsx";
import './App.css';

export default function App () {
  // const isConnected = useSelector((state) => state.auth.isConnected);
  return (
  <div>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </div>
  );
}

