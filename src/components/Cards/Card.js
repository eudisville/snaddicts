import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ product }) => {
  return (
    <div className="card">
      <img
        src={product.imageUrl || 'https://via.placeholder.com/150'}
        alt={product.name}
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">{product.name}</h2>
        <p className="card-price">{product.price} XOF</p>
        <p className="card-stock" style={{ color: product.inStock ? 'green' : 'red' }}>{product.inStock ? 'En Stock' : 'Rupture de Stock'}</p>
        <Link to={`/product/${product.id}`} className="details-link">Voir les détails</Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    category: PropTypes.string.isRequired,
    inStock: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Card;