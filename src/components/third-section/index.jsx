import style from './thirdSection.module.css';

import mobileSchedule from '../../resources/mobile-schedule.jpeg';
import desktopSchedule from '../../resources/desktop-schedule.jpeg';

export const ThirdSection = () => {
  return (
    <section className={style.sectionContainer}>
      <h1 className={style.title}>Local families need you!</h1>
      <p className={style.paragraph}>
        Families in your area need childcare. There simply is not enough to go
        around. They need it locally and at a rate they can afford. In short,
        they need you. And you need to reduce costs or if a nanny, increase your
        pay. It’s a win, win, win! But first families need to find you. Go on,
        reach out to your neighbourhood today with a Hapu nanny share.{' '}
      </p>
      <span className={style.decoratorText}>Create your nanny share today</span>
      <img src={mobileSchedule} alt="Schedule" className={style.mobileImage} />
      <img
        src={desktopSchedule}
        alt="Schedule"
        className={style.desktopImage}
      />
    </section>
  );
};
