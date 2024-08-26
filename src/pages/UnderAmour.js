import React from 'react';
import { product } from '../Data';
import Nav from '../components/Nav/Nav';
import Cards from '../components/Cards/Card';
import Footer from '../components/Footer/Footer';
import './style.css'

const UnderAmour = () => {

  const underAmourProducts = product.filter(item => item.category === 'Under Armour');

  return (
    <div>
        <Nav />
        <div className="product-list">
            {underAmourProducts.map(item => (
            <Cards key={item.id} product={item} />
            ))}
        </div>
        <Footer />
    </div>
  );
};

export default UnderAmour;
