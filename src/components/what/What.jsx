import style from './What.module.css';
import logo from './../../assets/images/navbar-logo.svg';
import one from './../../assets/images/what-images/what-01.jpg';
import two from './../../assets/images/what-images/what-02.jpg';


export function What() {
  return (
    <section id="what" className={style.what}>
      <div className={style.what__content}>
        <h2>What We Offer</h2>
        <div className={style.content__left}>
          <div className={style.left__text}>
            <img src={logo} alt="" />
            <p>01</p>
            <h3>Introduction to Programming</h3>
            <p>
              Learn the fundamentals of programming, including concepts like
              variables, data types, loops, and conditional statements.
            </p>
          </div>
          <div className={style.left__img}>
            <img src={one} alt="" />
          </div>
        </div>
        <div className={style.content__right}>
          <div className={style.right__img}>
            <img src={two} alt="" />
          </div>
          <div className={style.right__text}>
            <img src={logo} alt="" />
            <p>02</p>
            <h3>Web Development</h3>
            <p>
            Dive into front-end web development with HTML, CSS, and JavaScript. Master back-end development using Python, Ruby, or NodeJS and explore frameworks like React, Angular, or Django to build dynamic web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
