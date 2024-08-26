import React from 'react';
import { product } from '../Data';
import Nav from '../components/Nav/Nav';
import Cards from '../components/Cards/Card';
import Footer from '../components/Footer/Footer';
import './style.css'

const Puma = () => {

  const pumaProducts = product.filter(item => item.category === 'Puma');

  return (
    <div>
        <Nav />
        <div className="product-list">
            {pumaProducts.map(item => (
            <Cards key={item.id} product={item} />
            ))}
        </div>
        <Footer />
    </div>
  );
};

export default Puma;
