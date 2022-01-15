import React from 'react';

import './Square.css';

export const Square = ({value, index, onClick}) => {
  return (
    <div className="square" onClick={() => onClick(index)}>
      {value}
    </div>
  );
};
