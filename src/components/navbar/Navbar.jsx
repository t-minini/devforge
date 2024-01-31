import style from './Navbar.module.css';
import logo from './../../assets/images/navbar-logo.svg';
import { Link } from 'react-scroll';

export function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.navbar__content}>
        <Link to="hero" spy={true} smooth={true}>
          <img src={logo} alt="devForge logo" />
        </Link>
        <ul className={style.navbar__links}>
          <Link
            to="why"
            spy={true}
            smooth={true}
            offset={-90}
            activeClass={style.navbar__active}
          >
            <li>Why</li>
          </Link>
          <Link
            to="what"
            spy={true}
            smooth={true}
            activeClass={style.navbar__active}
          >
            <li>What</li>
          </Link>
          <Link
            to="who"
            spy={true}
            smooth={true}
            activeClass={style.navbar__active}
          >
            <li>Who</li>
          </Link>
          <Link
            to="mission"
            spy={true}
            smooth={true}
            activeClass={style.navbar__active}
          >
            <li>Mission</li>
          </Link>
          <Link
            to="footer"
            spy={true}
            smooth={true}
            activeClass={style.navbar__active}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
