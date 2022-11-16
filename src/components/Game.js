import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const operators = ['+', '-', 'x', '/'];

function Game({ name, setInGame }) {
  const [answer, setAnswer] = React.useState('');
  const [num1, setNum1] = React.useState(Math.floor(Math.random() * 13));
  const [num2, setNum2] = React.useState(Math.floor(Math.random() * 13));
  const [operator, setOperator] = React.useState(operators[Math.floor(Math.random() * operators.length)]);
  const [score, setScore] = React.useState(0);
  const [status, setStatus] = React.useState('');
  const [attempts, setAttempts] = React.useState(0);

  if(operator === '/' && num2 === 0) {
    setNum2(Math.floor(Math.random() * 12) + 1)
  }

  React.useEffect(() => {
    const statusTimer = setTimeout(() => {
      setStatus('')
    }, 3000);
    return () => clearTimeout(statusTimer);
  }, [status]);

  const handleEnter = e => {
    if (e.key === 'Enter') handleAnswer();
  }

  const handleAnswer = () => {
    if (
      (operator === '+' && Number(answer) === num1 + num2) ||
      (operator === '-' && Number(answer) === num1 - num2) ||
      (operator === 'x' && Number(answer) === num1 * num2) ||
      (operator === '/' && Number(answer) === Math.floor(num1 / num2))
    ) {
      setStatus('Correct!');
      setNum1(Math.floor(Math.random() * 13));
      setNum2(Math.floor(Math.random() * 13));
      setOperator(operators[Math.floor(Math.random() * operators.length)]);
      setAnswer('');
      setScore(score + 15)
    }
    else if (attempts < 2) {
      setStatus('Wrong answer try again!');
      setAttempts(attempts + 1);
      if (score > 0) setScore(score - 5);
    }
    else {
      setStatus('Wrong answer new problem given.');
      setNum1(Math.floor(Math.random() * 13));
      setNum2(Math.floor(Math.random() * 13));
      setOperator(operators[Math.floor(Math.random() * operators.length)]);
      setAttempts(0);
      if (score > 0) setScore(score - 5);
    }
  }

  return (
    <Box>
      <Typography>Hello {name}!</Typography>
      <Typography>What is {num1} {operator} {num2}?</Typography>
      <Button variant='outlined' onClick={() => setInGame(false)}>Set Name</Button>
      <TextField label='Answer' variant='outlined' value={answer} onChange={e => setAnswer(e.target.value)} onKeyDown={handleEnter} />
      <Button variant='outlined' onClick={handleAnswer}>Submit Answer</Button>
      <Typography>{status}</Typography>
      <Typography>Score: {score}</Typography>
      <Typography>*Note: Please round division answers down to the nearest whole number.</Typography>
    </Box>
  );
}

export default Game;
