// src/components/FeaturedProducts.js
import React from 'react';

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <div className="container">
        <h2>Featured Products</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="/path/to/product1.jpg" className="card-img-top" alt="Product 1" />
              <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">Description of Product 1.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="/path/to/product2.jpg" className="card-img-top" alt="Product 2" />
              <div className="card-body">
                <h5 className="card-title">Product 2</h5>
                <p className="card-text">Description of Product 2.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="/path/to/product3.jpg" className="card-img-top" alt="Product 3" />
              <div className="card-body">
                <h5 className="card-title">Product 3</h5>
                <p className="card-text">Description of Product 3.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
