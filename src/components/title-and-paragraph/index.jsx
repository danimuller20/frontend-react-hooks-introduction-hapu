import PropTypes from 'prop-types';
import style from './titleAndParagraph.module.css';

export const TitleAndParagraph = ({ subtitle, text }) => {
  return (
    <div className={style.contentContainer}>
      <h2 className={style.subtitle}>{subtitle}</h2>
      <p className={style.paragraph}>{text}</p>
    </div>
  );
};

TitleAndParagraph.propTypes = {
  subtitle: PropTypes.string,
  text: PropTypes.string,
};
