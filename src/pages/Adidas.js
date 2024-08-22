import React from 'react'
import { product } from '../Data'
import Cards from '../components/Cards/Card'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import './style.css'

function Adidas() {

    const adidasProducts = product.filter(item => item.category === 'Adidas')

  return (
    <div>
        <Nav />
        <div className="product-list">
            {adidasProducts.map(item => (
                <Cards key={item.id} product={item} />
            ))}
        </div>
        <Footer />
    </div>
  )
}

export default Adidas