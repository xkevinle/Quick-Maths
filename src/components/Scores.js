import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function Scores({ setStep, setScore }) {
  const [scoreList, setScoreList] = React.useState([]);

  React.useEffect(() => {
    let scores = [];
    let scoreKeys = Object.keys(localStorage);
    scoreKeys.forEach(key => {
      scores.push({ name: key, score: localStorage.getItem(key) })
    });

    setScoreList(scores.sort((a, b) => b.score - a.score));
  }, []);

  const handleNewGame = () => {
    setScore(0);
    setStep(1);
  }

  return (
    <div>
      <h1>High Scores</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scoreList.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button sx={{ margin: '1rem'}}variant='outlined' onClick={handleNewGame}>New Game</Button>
    </div>

  );
}

export default Scores;
