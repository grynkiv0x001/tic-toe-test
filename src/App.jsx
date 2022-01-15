import React, { useState } from 'react';

import { Square } from './components/Square';
import './App.css';

const App = () => {
  const [squares, setsquares] = useState(Array(9).fill('o'));

  const handleClick = (squareIndex) => {
    const changedSquares= squares.slice();

    console.log('Index: ', changedSquares);

    changedSquares[squareIndex] = 'x';
    setsquares(changedSquares);
  };

  return (
    <div className="board">
      {squares.map((square, index) => {
        return (
          <Square key={index} value={square} index={index} onClick={handleClick} />
        );
      })}
    </div>
  );
};

export default App;
