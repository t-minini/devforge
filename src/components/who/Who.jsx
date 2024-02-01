import style from './Who.module.css';

export function Who() {
  return (
    <section id="who" className={style.who}>
      <div className={style.who__content}>
        <h2>Who Can Benefit From Our Training?</h2>
        <div className={style.cards__container}>
          <div className={style.who__card}>
            <h3>Beginners</h3>
            <p>
              If you are new to programming or software development our
              beginner-friendly courses provide a strong foundation to kickstart
              your journey.
            </p>
          </div>
          <hr />
          <div className={style.who__card}>
            <h3>Career Switchers</h3>
            <p>
              Looking to transition into the tech industry? Our comprehensive
              training programs can help you make a smooth career switch.
            </p>
          </div>
          <hr />
          <div className={style.who__card}>
            <h3>Experienced Developers</h3>
            <p>
              Stay up-to-date with the latest advancements in software
              development and expand your skillset to take on new challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
