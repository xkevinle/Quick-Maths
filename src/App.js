import React from 'react';
import Game from './components/Game';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {
  const [name, setName] = React.useState('');
  const [inGame, setInGame] = React.useState(false);

  const handleEnter = e => {
    if (e.key === 'Enter') setInGame(true);
  }

  return (
    <div className="App">
      <Typography sx={{ position: 'absolute', top: 20}}variant='h3'>Quick Maths</Typography>
      {inGame === false ?
        <>
          <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TextField label='Enter your name' variant='outlined' onKeyDown={handleEnter} onChange={e => setName(e.target.value)} />
            <Button sx={{ marginLeft: '1rem' }} variant='outlined' onClick={() => setInGame(true)}>Submit</Button>
          </Container>
        </>
        : <Game name={name} setInGame={setInGame} />}
    </div>
  );
}

export default App;
