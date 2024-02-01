import style from './Why.module.css';

export function Why() {
  return (
    <section id="why" className={style.why}>
      <div className={style.why__content}>
        <h2>Why Learn With devForge</h2>
        <div className={style.why__cards}>
          <div className={style.card__border}>
            <div className={style.card__inner}>
              <h3>Experienced Instructors</h3>
              <p>
                Our instructors are seasoned professionals with extensive
                industry experience. They bring real-world insights and
                practical knowledge to the classroom, ensuring a rich and
                rewarding learning experience.
              </p>
            </div>
          </div>
          <div className={style.card__border}>
            <div className={style.card__inner}>
              <h3>Hands-On Learning</h3>
              <p>
                We believe in learning by doing. Our training programs emphasise
                hands-on projects and coding exercises to reinforce theoretical
                concepts and build practical skills.
              </p>
            </div>
          </div>
          <div className={style.card__border}>
            <div className={style.card__inner}>
              <h3>Cutting-Edge Curriculum</h3>
              <p>
                Our curriculum is regularly updated to stay current with the
                latest trends and technologies in the software development
                field. You can be confident that you are learning the most
                relevant and in-demand skills.
              </p>
            </div>
          </div>
          <div className={style.card__border}>
            <div className={style.card__inner}>
              <h3>Small Class Sizes</h3>
              <p>
                To ensure personalised attention and an interactive learning
                environment, we keep our class sizes small, allowing for better
                engagement and support.
              </p>
            </div>
          </div>
          <div className={style.card__border}>
            <div className={style.card__inner}>
              <h3>Flexibility</h3>
              <p>
                We offer flexible training options to accommodate different
                schedules and learning preferences. Choose from in-person
                classes, online live sessions, or self-paced learning modules.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
