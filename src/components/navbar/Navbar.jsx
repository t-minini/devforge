import { Link } from 'react-scroll';
import style from './Navbar.module.css';
import logo from './../../assets/images/navbar-logo.svg';

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
            offset={-80}
            smooth={true}
            activeClass={style.navbar__active}
          >
            <li>Why</li>
          </Link>
          <Link
            to="who"
            spy={true}
            offset={-80}
            smooth={true}
            activeClass={style.navbar__active}
          >
            <li>Who</li>
          </Link>
          <Link
            to="what"
            spy={true}
            offset={-80}
            smooth={true}
            activeClass={style.navbar__active}
          >
            <li>What</li>
          </Link>
          <Link
            to="mission"
            spy={true}
            offset={-80}
            smooth={true}
            activeClass={style.navbar__active}
          >
            <li>Mission</li>
          </Link>
          <Link
            to="footer"
            spy={true}
            offset={-80}
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
