import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { product } from '../Data';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import AOS from 'aos'
import 'aos/dist/aos.css'

const ProductDetail = () => {
  useEffect(() => { 
    AOS.init({ duration: 2000 })
  }, [])

  const { id } = useParams();
  const selectedProduct = product.find((item) => item.id === parseInt(id));

  if (!selectedProduct) {
    return <h2>Produit non trouvé</h2>;
  }

  

  return (
    <div>
      <Nav />
      <div className="product-details" data-aos="fade-up">
        <div className="product-image">
          <img src={`/${selectedProduct.imageUrl}`} alt={selectedProduct.name} />
        </div>
        <div className="product-detail">
          <h1>{selectedProduct.name}</h1>
          <p className='description'>{selectedProduct.description}</p>
          <p className='card-stock' style={{ color: selectedProduct.inStock ? 'green' : 'red' }} >{selectedProduct.inStock ? "En Stock" : "Rupture de stock"}</p>
          <p className='price'>{selectedProduct.price} <span>XOF</span></p>
          <div className="btn">
            <Link to="https://wa.me/qr/Y46LGJCVLHBHL1" target='_blank'><button className='book'>Commander</button></Link>
            <Link to="/"><button className='back'>Retour</button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
