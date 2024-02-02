import style from './What.module.css';
import logo from './../../assets/images/navbar-logo.svg';
import one from './../../assets/images/what-images/what-01.jpg';
import two from './../../assets/images/what-images/what-02.jpg';
import three from './../../assets/images/what-images/what-03.jpg';
import four from './../../assets/images/what-images/what-04.jpg';
import five from './../../assets/images/what-images/what-05.jpg';
import six from './../../assets/images/what-images/what-06.jpg';

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
              Dive into front-end web development with HTML, CSS, and
              JavaScript. Master back-end development using Python, Ruby, or
              NodeJS and explore frameworks like React, Angular, or Django to
              build dynamic web applications.
            </p>
          </div>
        </div>
        <div className={style.content__left}>
          <div className={style.left__text}>
            <img src={logo} alt="" />
            <p>03</p>
            <h3>Mobile App Development</h3>
            <p>
              Create mobile apps for Android and iOS platforms using
              industry-leading tools and frameworks.
            </p>
          </div>
          <div className={style.left__img}>
            <img src={three} alt="" />
          </div>
        </div>
        <div className={style.content__right}>
          <div className={style.right__img}>
            <img src={four} alt="" />
          </div>
          <div className={style.right__text}>
            <img src={logo} alt="" />
            <p>04</p>
            <h3>Full-Stack Development</h3>
            <p>
              Become a versatile developer by mastering both front-end and
              back-end technologies.
            </p>
          </div>
        </div>
        <div className={style.content__left}>
          <div className={style.left__text}>
            <img src={logo} alt="" />
            <p>05</p>
            <h3>Database Management</h3>
            <p>
              Learn to design and manage databases using SQL and NoSQL
              technologies.
            </p>
          </div>
          <div className={style.left__img}>
            <img src={five} alt="" />
          </div>
        </div>
        <div className={style.content__right}>
          <div className={style.right__img}>
            <img src={six} alt="" />
          </div>
          <div className={style.right__text}>
            <img src={logo} alt="" />
            <p>06</p>
            <h3>DevOps and Agile Practices</h3>
            <p>
              Discover the principles of DevOps and Agile methodologies to
              streamline development processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
