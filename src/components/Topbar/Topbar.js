import React from 'react'
import { Link } from 'react-router-dom'
import './Topbar.css'

function Topbar() {
  return (
    <div className='bar'>
      <div className="left">
        <h5>Bienvenue sur SNA</h5>
        </div>
      <div className="right">
        <Link to="https://www.instagram.com/invites/contact/?igsh=yqfssme39lh&utm_content=uazcgys" target='_blank'><h5>Nos pages</h5></Link>
      </div>
    </div>
  )
}

export default Topbar