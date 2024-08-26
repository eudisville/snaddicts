import React, { useEffect } from 'react'
import Cards from '../Cards/Cards'
import './Products.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Products() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div>
        <div className="products-items" data-aos="fade-up">
            <div className="products-title">
                <h1>Découvrez nos chaussures</h1>
            </div>
            <div className="products-list">
                <Cards />
            </div>
        </div>
    </div>
  )
}

export default Products