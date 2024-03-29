import { Link } from 'react-scroll';
import style from './Footer.module.css';
import logo from './../../assets/images/footer-logo.svg';

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
            development training programs are the perfect launchpad.
          </p>
        </div>
        <div className={style.content__bottom}>
          <div className={style.bottom__top}>
            <p>Contact us for more information</p>
            <p>+353 86 342 0309</p>
            <a
              target="_blank"
              rel="noreferrer"
              title="send us an e-mail"
              href="mailto:alan@devforge.ie"
            >
              alan@devforge.ie
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              title="go to linkedIn profile"
              href="https://www.linkedin.com/company/devforge-ltd/"
            >
              <svg
                fill="none"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0C6.71562 0 0 6.71562 0 15C0 23.2844 6.71562 30 15 30C23.2844 30 30 23.2844 30 15C30 6.71562 23.2844 0 15 0ZM11.3281 21.2172H8.29062V11.4422H11.3281V21.2172ZM9.79062 10.2422C8.83125 10.2422 8.21094 9.5625 8.21094 8.72187C8.21094 7.86406 8.85 7.20469 9.82969 7.20469C10.8094 7.20469 11.4094 7.86406 11.4281 8.72187C11.4281 9.5625 10.8094 10.2422 9.79062 10.2422ZM22.4219 21.2172H19.3844V15.8C19.3844 14.5391 18.9437 13.6828 17.8453 13.6828C17.0063 13.6828 16.5078 14.2625 16.2875 14.8203C16.2062 15.0188 16.1859 15.3 16.1859 15.5797V21.2156H13.1469V14.5594C13.1469 13.3391 13.1078 12.3187 13.0672 11.4406H15.7062L15.8453 12.7984H15.9062C16.3062 12.1609 17.2859 11.2203 18.925 11.2203C20.9234 11.2203 22.4219 12.5594 22.4219 15.4375V21.2172Z"
                  fill="#323232"
                />
              </svg>
            </a>
          </div>
          <div className={style.bottom__middle}>
            <img src={logo} alt="" />
            <p>devForge Limited</p>
            <p>Athlone, Co. Westmeath, Ireland</p>
          </div>
          <hr />
          <div className={style.bottom__bottom}>
            <p>Copyright © devForge Ltd 2024</p>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              title="go back to top"
              className={style.backToTop__link}
            >
              back to top
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
