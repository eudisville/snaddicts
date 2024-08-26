import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const navItems = [
    { name: "Nike", id: "/nike" },
    { name: "Adidas", id: "/adidas" },
    { name: "New Balance", id: "/new-balance" },
    { name: "Converse", id: "/converse" },
    { name: "Puma", id: "/puma" },
    { name: "Under Armour", id: "/under-armour" },
];

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='navbar'>
            <div className="nav-items">
                <div className="logo">
                    <Link to="/">
                        <img 
                            src={`${process.env.PUBLIC_URL}/SNA.jpg`} 
                            alt="Logo" 
                        />
                    </Link>
                </div>
                <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        {navItems.map((navItem, index) => (
                            <li key={index}>
                                <Link
                                    to={navItem.id}
                                    style={{ textDecoration: 'none', color: 'black' }}
                                    onClick={() => setIsMenuOpen(false)} // Fermer le menu au clic sur un lien
                                >
                                    {navItem.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="nav-icons">
                    <a 
                        href="https://www.instagram.com/sna.com_?igshid=MWdvemNscTY0b2Fzdw%3D%3D&utm_source=qr" 
                        target='_blank' 
                        rel="noopener noreferrer" 
                        className='contact-us'
                    >
                        Contactez Nous
                    </a>
                </div>
                <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    &#9776;
                </button>
            </div>
        </div>
    );
}

export default Nav;
