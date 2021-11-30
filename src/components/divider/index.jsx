import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './divider.module.css';

const classes = classNames.bind(style);

export const Divider = ({ dividerClass }) => {
  let dividerStyle = classes({
    [dividerClass]: true,
  });

  return <hr className={dividerStyle} />;
};

Divider.propTypes = {
  dividerClass: PropTypes.string,
};
