import React from 'react';
import Card from './Card';
import { product } from '../../Data'
import './Cards.css'

const Cards = () => {
  return (
    <div className="cards-container">
      {product.map((item) => (
        <Card key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Cards;