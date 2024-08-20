import React from 'react';

function GameOverBanner({ hasWon, guessCount, correctAnswer }) {
  return (<div className={`${hasWon ? "happy" : "sad"} banner`}>
    {hasWon ?
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guessCount}</strong>.
        </p> :
        <p>
          Sorry, the correct answer is <strong>{correctAnswer}</strong>.
        </p>
    }
  </div>);
}

export default GameOverBanner;
