import React from 'react'
import Cards from '../Cards/Cards'
import './Products.css'

function Products() {

  return (
    <div>
        <div className="products-items">
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