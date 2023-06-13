import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Product = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1 className="head">Tech World</h1>
      <p>Buy Trending laptops here!!</p>
      <div className="container">
        <div
          className="container-info"
          onClick={() => {
            navigate('/products');
          }}
        >
          <img src="https://thumbs.dreamstime.com/b/web-181534964.jpg" alt="Customer"></img>
          <h3>Pro-info</h3>
        </div>
        <div
          className="container-info"
          onClick={() => {
            navigate('/product-details');
          }}
        >
          <img src="https://thumbs.dreamstime.com/b/web-181534964.jpg" alt="Products"></img>
          <h3>Products</h3>
        </div>
      </div>
    </div>
  );
};

export default Product;
