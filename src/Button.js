import React from 'react';


const Button = ({ clickEvent, name }) => (
    <button onClick = {clickEvent}>{name}</button>
  
)

export default Button;
