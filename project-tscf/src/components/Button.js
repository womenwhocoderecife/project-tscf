import React from 'react';
import { orangeColor } from '../styles/theme';
import 'bootstrap/dist/css/bootstrap.css';


const buttonStyle = {
    color: '#000000',
    backgroundColor: orangeColor,
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 'bold',
    fontSize: '0.80rem',
    width: 'auto',
    minWidth: '100px',
    height: 'auto',
    minHeight: '2.2rem',
    borderRadius:'0.2rem'
    


}

function Button({ onClick, text }){
  return (
    <button className='btn' style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
