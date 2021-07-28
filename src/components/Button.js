import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { color, text, onClick } = props;

  return (
    <button
      onClick={onClick}
      className='btn'
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
