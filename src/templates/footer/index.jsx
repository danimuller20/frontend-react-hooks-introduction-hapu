import { Button } from '../../components/button';
import { Divider } from '../../components/divider';

import calendar from '../../resources/calendar.svg';
import hapuLogo from '../../resources/hapu-logo.svg';
import facebook from '../../resources/facebook.svg';
import twitter from '../../resources/twitter.svg';
import instagram from '../../resources/instagram.svg';

import style from './footer.module.css';

export const Footer = () => {
  const footerNavList = [
    'Share Your Nanny',
    'Our Story',
    'Blog',
    'Terms & Privacy',
  ];
  return (
    <footer className={style.footerContainer}>
      <h1 className={style.title}>Become a nanny share host</h1>
      <h2 className={style.subtitle}>
        Takes less than 5 minutes to get started
      </h2>
      <Button type="button" buttonClass="footerButton">
        <>
          <img src={calendar} alt="Calendar" />
          <span className={style.buttonText}>
            <span>Create Your Nanny Share</span>
            <span>Takes less than 5 minutes</span>
          </span>
        </>
      </Button>
      <span className={style.decorationText}>Or browse local nanny-shares</span>
      <div className={style.footerInformations}>
        <img src={hapuLogo} alt="Hapu logo" />
        <ul className={style.listContainer}>
          {footerNavList.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
          ;
        </ul>
        <div className={style.socialMediaContainer}>
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <Divider dividerClass={'noneDisplay'} />
      <small>Copyright © 2017 Hapu PTY Limited All rights reserved</small>
    </footer>
  );
};
