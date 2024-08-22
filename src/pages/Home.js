import React from 'react'
import Topbar from '../components/Topbar/Topbar'
import Nav from '../components/Nav/Nav'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Products from '../components/Products/Products'

function Home() {
  return (
    <div>
        <Topbar />
        <Nav />
        <Header />
        <Products />
        <Footer />
    </div>
  )
}

export default Home