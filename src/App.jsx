// import React from 'react';
// import Header from './Components/header/header';
// import logo from './assets/logo/Screenshot 2025-01-09 180608.png';
// import ProductsSection from './Components/header/products/products_section/products_section';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import './App.css'; // Main App styles

// const App = () => {
//   return (
//     <>
//     <Header />
//     <div className="App">
//       <div id="home" className="section">
//         <h1>Welcome to Our Website</h1>
//         <img src={logo} alt="Logo" className="logo" />  
//       </div>
//       <section id="about" className="section">
//         <h1>About Us</h1>
//         <p>Learn more about our company and mission.</p>
//         <img src={logo} alt="Logo" className="logo" />  
//       </section>
//       <section id="products" className="section">
//   <h1>Our Products</h1>
//   <p>Explore our wide range of products.</p>
//   <div className="products-grid">
//     <div className="product-item">
//       <a href="https://example.com/product1" target="_blank" rel="noopener noreferrer">
//         <img src={logo} alt="Product 1" className="product-image" />
//         <p className="product-title">Product 1</p>
//       </a>
//     </div>
//     <div className="product-item">
//       <a href="https://example.com/product2" target="_blank" rel="noopener noreferrer">
//         <img src={logo} alt="Product 2" className="product-image" />
//         <p className="product-title">Product 2</p>
//       </a>
//     </div>
//     <div className="product-item">
//       <a href="https://example.com/product3" target="_blank" rel="noopener noreferrer">
//         <img src={logo} alt="Product 3" className="product-image" />
//         <p className="product-title">Product 3</p>
//       </a>
//     </div>
//     <div className="product-item">
//       <a href="https://example.com/product4" target="_blank" rel="noopener noreferrer">
//         <img src={logo} alt="Product 4" className="product-image" />
//         <p className="product-title">Product 4</p>
//       </a>
//     </div>
//     <div className="product-item">
//       <a href="https://example.com/product5" target="_blank" rel="noopener noreferrer">
//         <img src={logo} alt="Product 5" className="product-image" />
//         <p className="product-title">Product 5</p>
//       </a>
//     </div>
//     <div className="product-item">
//       <a href="https://example.com/product6" target="_blank" rel="noopener noreferrer">
//         <img src={logo} alt="Product 6" className="product-image" />
//         <p className="product-title">Product 6</p>
//       </a>
//     </div>
//     <div className="product-item">
//       <a href="https://example.com/product7" target="_blank" rel="noopener noreferrer">
//         <img src={logo} alt="Product 7" className="product-image" />
//         <p className="product-title">Product 7</p>
//       </a>
//     </div>
//   </div>
// </section>

      
//       <section id="events" className="section">
//         <h1>Upcoming Events</h1>
//         <p>Stay updated with our latest events.</p>
//       </section>
//       <section id="contact us" className="section">
//         <h1>Contact Us</h1>
//         <p>Get in touch with us for more information.</p>
//       </section>
      
      
//     </div>
//     </>
//   );
// };

// export default App;



import React from 'react';
import Home from './pages/home'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';
import './App.css'; // Main App styles
import Header from './Components/header/header';

const App = () => {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
