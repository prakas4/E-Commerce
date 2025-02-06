import React from "react";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Topbar from "../Components/Top-bar/Topbar";
import HomePage from "./HomePage";
import About from "./About";
import Service from "./Service";
import Projects from "./Projects";
import Product from "./Product";
import CartPage from "./CartPage";
import Contact from "../Components/Contact";

const AppRoutes = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="project" element={<Projects />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="product" element={<Product />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
