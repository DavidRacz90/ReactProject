import React from 'react';


const Button = ({ clickEvent, name }) => {
  return (
    <button onClick = {clickEvent}>{name}</button>
  )
}

export default Button;
