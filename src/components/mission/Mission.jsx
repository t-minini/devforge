import style from './Mission.module.css';

export function Mission() {
  return (
    <section id="mission" className={style.mission}>
      <div className={style.mission__content}>
        <h2>Our Mission</h2>
        <p>
          At devForge, we are passionate about empowering individuals with the
          knowledge and skills needed to thrive in the world of software
          development. Our comprehensive software development training programs
          are designed to equip aspiring developers and seasoned professionals
          alike with the expertise they need to succeed in the fast-paced tech
          industry.
        </p>
      </div>
    </section>
  );
}
