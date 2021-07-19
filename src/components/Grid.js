/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Store } from '../store';
import './Grid.scss';

const Grid = () => {
  const [position, setPosition] = useState(0);
  const {
    state: { xGridSize, yGridSize, stepSize },
  } = React.useContext(Store);

  const handleCellMovement = (event) => {
    let newPosition = 0;

    switch (event.key) {
      case 'ArrowDown':
        newPosition = position + xGridSize * stepSize;
        if (newPosition >= xGridSize * yGridSize) return;
        setPosition(newPosition);
        break;
      case 'ArrowUp':
        newPosition = position - xGridSize * stepSize;
        if (newPosition < 0) return;
        setPosition(newPosition);
        break;
      case 'ArrowRight':
        newPosition = position + stepSize;
        if (newPosition > xGridSize * yGridSize) return;
        setPosition(newPosition);
        break;
      case 'ArrowLeft':
        newPosition = position - stepSize;
        if (newPosition < 0) return;
        setPosition(newPosition);
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  };

  const gridSize = Array(xGridSize * yGridSize)
    .fill()
    .map((x, i) => i);
  return (
    <div onKeyDown={handleCellMovement} className='grid-container' tabIndex='0'>
      {gridSize.map((cell, i) => (
        <React.Fragment key={i}>
          <div
            className={i === position ? 'cell focused' : 'cell'}
            key={cell}
          />
          {(i + 1) % xGridSize === 0 && <div className='line-break' />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Grid;
