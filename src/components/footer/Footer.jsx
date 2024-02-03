import style from './Footer.module.css';
import linkedin from './../../assets/images/linkedin-icon.svg';
import logo from './../../assets/images/footer-logo.svg';
import { Link } from 'react-scroll';

export function Footer() {
  return (
    <footer id="footer" className={style.contact}>
      <div className={style.contact__content}>
        <div className={style.content__top}>
          <h2>
            Get started on your <br />
            software development journey.
          </h2>
          <p>
            Whether you're aiming to build a career as a software developer or
            seeking to enhance your existing skills, devForge's software
            development training programs are the perfect launchpad. Join us
            today and embark on a transformative learning experience that will
            set you on the path to success.
          </p>
        </div>
        <div>
          <p>Contact us for more information</p>
          <p>+353 86 342 0309</p>
          <p>alan@devforge.ie</p>
          <img src={linkedin} alt="" />
        </div>
        <div>
          <img src={logo} alt="" />
          <p>devForge Limited</p>
          <p>Athlone, Co. Westmeath</p>
        </div>
        <hr />
        <div>
          <p>Copyright © devForge Limited 2024</p>
          <Link to="hero" spy={true} offset={-80} smooth={true}>
            back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
