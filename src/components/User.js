import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function User({ setName, setStep }) {
  const handleEnter = e => {
    if (e.key === 'Enter') setStep(1);
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography sx={{ position: 'absolute', top: 50}} variant='h3'>Quick Maths</Typography>
      <TextField label='Enter your name' variant='outlined' onKeyDown={handleEnter} onChange={e => setName(e.target.value)} />
      <Button sx={{ marginTop: '1rem' }} variant='outlined' onClick={() => setStep(1)}>Start Game</Button>
    </Box>
  );
}

export default User;
