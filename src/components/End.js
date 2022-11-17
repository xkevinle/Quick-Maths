import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function End({ score, setStep, setScore }) {
  const handleNewGame = () => {
    setScore(0);
    setStep(1);
  }

  return (
    <div>
      <Typography variant='h3'>Game over!</Typography>
      <p>You scored {score} points!</p>
      <Button sx={{ marginRight: '1rem' }} variant='outlined' onClick={handleNewGame}>New Game</Button>
      <Button variant='outlined' onClick={() => setStep(3)}>High Scores</Button>
    </div>
  );
}

export default End;
