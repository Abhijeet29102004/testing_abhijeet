import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/header/header';

const ProductDetails = () => {
  const { id } = useParams();
   console.log(id);
  const productData = {
    1: { title: 'Product 1', description: 'Details about Product 1' },
    2: { title: 'Product 2', description: 'Details about Product 2' },
    3: { title: 'Product 3', description: 'Details about Product 3' },
    4: { title: 'Product 4', description: 'Details about Product 4' },
    5: { title: 'Product 5', description: 'Details about Product 5' },
    6: { title: 'Product 6', description: 'Details about Product 6' },
    7: { title: 'Product 7', description: 'Details about Product 7' },
  };

  const product = productData[id] || { title: 'Unknown Product', description: 'No details available.' };

  return (
    <div>
        <Header/>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      
    </div>
  );
};

export default ProductDetails;
