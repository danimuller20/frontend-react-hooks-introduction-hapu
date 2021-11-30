import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './button.module.css';

const classes = classNames.bind(style);

export const Button = ({ buttonClass, children, ...props }) => {
  const btnClassName = classes({
    [buttonClass]: true,
  });

  return (
    <button className={btnClassName} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  buttonClass: PropTypes.string,
  buttonState: PropTypes.bool,
};
