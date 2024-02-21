import React, { useState } from 'react';
import { Link } from 'react-scroll';
import style from './Navbar.module.css';
import logo from './../../assets/images/navbar-logo.svg';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={style.navbar}>
      <div className={style.navbar__content}>
        <Link to="hero" spy={true} smooth={true} className={style.content__logo}>
          <img src={logo} alt="devForge logo" />
        </Link>
        <div className={`${style.navbar__links} ${isOpen ? style.show : ''}`}>
          <Link
            to="why"
            spy={true}
            title="why"
            offset={-70}
            smooth={true}
            activeClass={style.navbar__active}
            onClick={() => setIsOpen(false)}
          >
            <li>Why</li>
          </Link>
          <Link
            to="who"
            spy={true}
            title="who"
            offset={-70}
            smooth={true}
            activeClass={style.navbar__active}
            onClick={() => setIsOpen(false)}
          >
            <li>Who</li>
          </Link>
          <Link
            to="what"
            spy={true}
            title="what"
            offset={-70}
            smooth={true}
            activeClass={style.navbar__active}
            onClick={() => setIsOpen(false)}
          >
            <li>What</li>
          </Link>
          <Link
            spy={true}
            to="mission"
            offset={-70}
            smooth={true}
            title="mission"
            activeClass={style.navbar__active}
            onClick={() => setIsOpen(false)}
          >
            <li>Mission</li>
          </Link>
          <Link
            spy={true}
            to="footer"
            offset={-70}
            smooth={true}
            title="contact"
            activeClass={style.navbar__active}
            onClick={() => setIsOpen(false)}
          >
            <li>Contact</li>
          </Link>
        </div>
        <div className={`${style.hamburger_menu} ${isOpen ? style.active : ''}`} onClick={toggleMenu}>
          <div className={style.hamburger_line}></div>
          <div className={style.hamburger_line}></div>
          <div className={style.hamburger_line}></div>
        </div>
      </div>
    </nav>
  );
}
