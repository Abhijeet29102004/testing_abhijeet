import React from 'react';
import './Products.css';
import Card from '../components/Card.jsx'; // Import the Card component

import im1 from "../assets/microphone.png";
import im2 from "../assets/microphone.png";
import im3 from "../assets/microphone.png";
import im4 from "../assets/microphone.png";
import im5 from "../assets/microphone.png";
import im6 from "../assets/microphone.png";
import im7 from "../assets/microphone.png";




// Array of image links and product names
const productData = [
  { id: 1, img: im1, name: "Product 1" },
  { id: 2, img: im2, name: "Product 2" },
  { id: 3, img: im3, name: "Product 3" },
  { id: 4, img: im4, name: "Product 4" },
  { id: 5, img: im5, name: "Product 5" },
  { id: 6, img: im6, name: "Product 6" },
  { id: 7, img: im7, name: "Product 7" }
];

function Products() {
  // Calculate the number of placeholders needed
  const itemsPerRow = 3;
  const totalItems = productData.length;
  const placeholdersNeeded = (itemsPerRow - (totalItems % itemsPerRow)) % itemsPerRow;

  return (
    <div id="products" className="container">
      <h1>Our Products</h1>
      <div className="product-list">
        {/* Render the product cards */}
        {productData.map((product) => (
          <Card
            key={product.id}
            img={product.img}
            name={product.name}
            link={`#product${product.id}`}
          />
        ))}

        {/* Render placeholder items */}
        {Array.from({ length: placeholdersNeeded }).map((_, index) => (
          <div key={`placeholder-${index}`} className="placeholder-item"></div>
        ))}
      </div>
    </div>
  );
}

export default Products;