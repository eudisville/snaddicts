import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <footer>
            <div className="footer-item">
                <img src={`${process.env.PUBLIC_URL}/foot.png`}  alt="" />
            </div>
        </footer>
    </div>
  )
}

export default Footer