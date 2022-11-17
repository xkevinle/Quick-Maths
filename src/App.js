import React from 'react';
import User from './components/User';
import Game from './components/Game';
import End from './components/End';
import Scores from './components/Scores';
import './App.css';

function App() {
  const [name, setName] = React.useState('');
  const [step, setStep] = React.useState(0);
  const [score, setScore] = React.useState(0);

  const setComponent = () => {
    if (step === 0) return <User name={name} setName={setName} setStep={setStep} />
    else if (step === 1) return <Game score={score} setName={setName} setScore={setScore} name={name} setStep={setStep} />
    else if (step === 2) return <End name={name} score={score} setStep={setStep} setScore={setScore} />
    else if (step === 3) return <Scores setStep={setStep} setScore={setScore} />
  }

  return (
    <div className="App">
      {setComponent()}

    </div>
  );
}

export default App;
