import { Link } from 'react-scroll';
import style from './Hero.module.css';
import heroLogo from './../../assets/images/hero-logo.svg';

export function Hero() {
  return (
    <section id="hero" className={style.hero}>
      <div className={style.hero__content}>
        <h1>Welcome to</h1>
        <img src={heroLogo} alt="" />
        <Link to="why" offset={-80} smooth={true} className={style.hero__link}>
          Learn Now
        </Link>
      </div>
    </section>
  );
}
