import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <button className='ui button'>
           <Link to={props.to}>{props.title}</Link>
        </button>
    );
  };

export default Button;