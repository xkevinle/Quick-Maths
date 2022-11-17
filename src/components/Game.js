import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const operators = ['+', '-', 'x', '/'];

function Game({ name, setStep, score, setScore }) {
  const [answer, setAnswer] = React.useState('');
  const [num1, setNum1] = React.useState(Math.floor(Math.random() * 13));
  const [num2, setNum2] = React.useState(Math.floor(Math.random() * 13));
  const [operator, setOperator] = React.useState(operators[Math.floor(Math.random() * operators.length)]);
  const [status, setStatus] = React.useState('');
  const [attempts, setAttempts] = React.useState(0);
  const [problemNumber, setProblemNumber] = React.useState(1); 

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
      setScore(score + 15);
      setProblemNumber(problemNumber + 1);
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
      setProblemNumber(problemNumber + 1);
    }
  }

  React.useEffect(() => {
    if(problemNumber === 3) {
      if(!localStorage.getItem(name)) {
        localStorage.setItem(name, score);
      } else if (Number(localStorage.getItem(name)) < score){
        localStorage.setItem(name, score);
      }
      setStep(2);
      setProblemNumber(0);
    }
  }, [name, problemNumber, score, setStep])

  const handleSetName = () => {
    setScore(0);
    setStep(0);
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant='h3'>Quick Maths</Typography>
      <Typography>User: {name}</Typography>
      <Button variant='outlined' onClick={handleSetName}>Set Name</Button>
      <Typography>Score: {score}</Typography>
      <Typography>What is {num1} {operator} {num2}?</Typography>
      <TextField label='Answer' variant='outlined' value={answer} onChange={e => setAnswer(e.target.value)} onKeyDown={handleEnter} />
      <Button variant='outlined' onClick={handleAnswer}>Submit Answer</Button>
      <Typography>{status}</Typography>
      <Typography>*Note: Please round division answers down to the nearest whole number.</Typography>
    </Box>
  );
}

export default Game;
