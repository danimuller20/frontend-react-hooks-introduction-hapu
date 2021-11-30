import { Button } from '../../components/button';
import shape from '../../resources/shape.svg';
import style from './header.module.css';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.leftSidHeader}>
        <img src={shape} alt="Hapu logo" />
        <ul className={style.headerList}>
          <li>
            <a href="#">Create Your Nanny Share</a>
          </li>
          <li>
            <a href="#">Browse Shares</a>
          </li>
          <li>
            <a href="#">Our Story</a>
          </li>
        </ul>
      </div>
      <div className={style.rightSideHeader}>
        <Button type="button" buttonClass="headerButton">
          Become a Nanny Share Host
        </Button>
        <a className={style.singIn} href="#">
          Sign In
        </a>
      </div>
    </header>
  );
};
