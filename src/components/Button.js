import React from 'react';
import PropTypes from 'prop-types';

const Button = ({name, onClick} ) => {
  return <button name={name} onClick={onClick}> {name} </button>
}

// Button.propTypes = {
//   name: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// }

export default Button;
