import React from "react";
import Header from "../Components/header/header";
import logo from "/assets/logo/lg.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "./home.css"; // Main App styles

const App = () => {
  return (
    <>
      <div className="App">
        <div id="home" className="section">
          <h1>Welcome to Our Website</h1>
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <section id="about" className="section">
          <h1>About Us</h1>
          <p>Learn more about our company and mission.</p>
          <img src={logo} alt="Logo" className="logo" />
        </section>
        <section id="products" className="section">
          <h1>Our Products</h1>
          <p>Explore our wide range of products.</p>
          <div className="products-grid">
            <div className="product-item">
              <Link to="/product/1">
                <img src={logo} alt="Product 1" className="product-image" />
                <p className="product-title">Conference Systems</p>
              </Link>
            </div>
            <div className="product-item">
              <Link to="product/2">
                <img src={logo} alt="Product 2" className="product-image" />
                <p className="product-title">Amplifiers</p>
              </Link>
            </div>
            <div className="product-item">
              <Link to="/product/3">
                <img src={logo} alt="Product 3" className="product-image" />
                <p className="product-title">Microphone</p>
              </Link>
            </div>
            <div className="product-item">
              <Link to="/product/4">
                <img src={logo} alt="Product 4" className="product-image" />
                <p className="product-title">Speakers</p>
              </Link>
            </div>
            <div className="product-item">
              <Link to="/product/5">
                <img src={logo} alt="Product 5" className="product-image" />
                <p className="product-title">Portable Speaker</p>
              </Link>
            </div>
            <div className="product-item">
              <Link to="/product/6">
                <img src={logo} alt="Product 6" className="product-image" />
                <p className="product-title">DJ Lights</p>
              </Link>
            </div>
            <div className="product-item">
              <Link to="/product/7">
                <img src={logo} alt="Product 7" className="product-image" />
                <p className="product-title">Accesories</p>
              </Link>
            </div>
          </div>
        </section>

        <section id="events" className="section">
          <h1>Upcoming Events</h1>
          <p>Stay updated with our latest events.</p>
        </section>
        <section id="contact us" className="section">
          <h1>Contact Us</h1>
          <p>Get in touch with us for more information.</p>
        </section>
      </div>
    </>
  );
};

export default App;
