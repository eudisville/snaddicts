import React from 'react';
import { product } from '../Data';
import Nav from '../components/Nav/Nav';
import Cards from '../components/Cards/Card';
import Footer from '../components/Footer/Footer';
import './style.css'

const Converse = () => {

  const converseProducts = product.filter(item => item.category === 'Converse');

  return (
    <div>
        <Nav />
        <div className="product-list">
            {converseProducts.map(item => (
            <Cards key={item.id} product={item} />
            ))}
        </div>
        <Footer />
    </div>
  );
};

export default Converse;
