import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar({ active }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // navigate home then scroll a bit later
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <h1 className="logo">Varun Khandelwal</h1>
      <nav>
        <ul>
          <li>
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, 'home')}
              className={active === 'home' ? 'active' : ''}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleScrollTo(e, 'about')}
              className={active === 'about' ? 'active' : ''}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              className={active === 'projects' ? 'active' : ''}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => handleScrollTo(e, 'skills')}
              className={active === 'skills' ? 'active' : ''}
            >
              Skills
            </a>
          </li>
          <li>
            <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
              My Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
