import React from 'react';

const Buttonjps = ({ onClick, color, text }) => {
  return (
      <button onClick={onClick} className={`ui ${color} button`}>
        {text}
      </button>
  );
};

export default Buttonjps;