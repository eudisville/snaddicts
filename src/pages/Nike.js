import React from 'react';
import { product } from '../Data';
import Nav from '../components/Nav/Nav';
import Cards from '../components/Cards/Card';
import Footer from '../components/Footer/Footer';
import './style.css'

const Nike = () => {

  const nikeProducts = product.filter(item => item.category === 'Nike');

  return (
    <div>
        <Nav />
        <div className="product-list">
            {nikeProducts.map(item => (
            <Cards key={item.id} product={item} />
            ))}
        </div>
        <Footer />
    </div>
  );
};

export default Nike;
