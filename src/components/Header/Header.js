import React, { useState, useEffect } from 'react';
import './Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  "im1.jpg",
  "im2.jpg",
  "im.jpg"
];

function Header() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 3000 });

    const interval = setInterval(() => {
      setCurrentImage((prevImage) => 
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className="header"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(${images[currentImage]})` }}
    >
      <div className="header-text" data-aos="fade-up">
        <h1>Bienvenue sur SNA</h1>
        <p>Scrollez vers le bas pour découvrir nos paires de basket.</p>
      </div>
    </header>
  );
}

export default Header;
