import React from 'react';
import Button from '@mui/material/Button';

function End ({ score, setStep, setScore }) {
  const handleNewGame = () => {
    setScore(0);
    setStep(1);
  }

  return (
    <div>
      Game over!
      <p>You scored {score} points!</p>
      <Button variant='outlined' onClick={handleNewGame}>New Game</Button>
      <Button variant='outlined' onClick={() => setStep(3)}>High Scores</Button>
    </div>
  );
}

export default End;
