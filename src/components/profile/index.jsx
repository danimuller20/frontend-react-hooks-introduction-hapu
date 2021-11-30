import PropTypes from 'prop-types';
import { Button } from '../button';
import style from './profile.module.css';

export const Profile = ({
  avatar,
  title,
  profileComment,
  description,
  list,
}) => {
  return (
    <div className={style.sectionContainer}>
      <img className={style.profileImage} src={avatar} alt="Profile" />
      <h1 className={style.title}>{title}</h1>
      <h2 className={style.subtitle}>{profileComment}</h2>
      <p className={style.description}>{description}</p>
      <Button type="button" buttonClass="profileButton">
        <>
          <span>Create Your Nanny Share Today</span>
          <span>Takes less than 5 minutes</span>
        </>
      </Button>
      <ul className={style.profileList}>
        {list && list.map((item) => <li key={Math.random()}>{item}</li>)}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  title: PropTypes.string,
  profileComment: PropTypes.string,
  description: PropTypes.string,
  list: PropTypes.array,
};
