import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Blog from './components/blog';
import Contact from './components/contact';
import Footer from './components/footer';
import './index.css';

export default function App() {
  const [active, setActive] = useState('home');
  const location = useLocation();

  useEffect(() => {
    // If not on home route, set active based on pathname
    if (location.pathname !== '/') {
      if (location.pathname === '/blog') setActive('blog');
      else if (location.pathname === '/contact') setActive('contact');
      else setActive('');
      return;
    }

    // On home, run scroll-spy
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'home';
      sections.forEach((section) => {
        const top = section.offsetTop;
        if (window.pageYOffset >= top - 80) {
          current = section.getAttribute('id');
        }
      });
      setActive(current);
    };

    handleScroll(); // initial
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <>
      <Navbar active={active} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
