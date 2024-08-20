import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GameGrid from "../GameGrid";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameOverBanner from "../GameOverBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const GameCondition = Object.freeze({
    InProgress: 0,
    Victory: 1,
    Loss: 2,
  });

  const [guesses, setGuesses] = React.useState([]);
  const [gameCondition, setGameCondition] = React.useState(
    GameCondition.InProgress
  );

  function makeGuess(guess) {
    const checkedGuess = checkGuess(guess, answer);
    const nextGuesses = [...guesses, checkedGuess];
    setGuesses(nextGuesses);
    // Handle loss
    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED && guess !== answer) {
      setGameCondition(GameCondition.Loss);
    }
    // Handle victory
    else if (guess === answer) {
      setGameCondition(GameCondition.Victory);
    }
  }

  return (
    <>
      <GuessInput
        isEnabled={gameCondition === GameCondition.InProgress}
        makeGuess={makeGuess}
      ></GuessInput>
      <GameGrid guesses={guesses}></GameGrid>
      {gameCondition !== GameCondition.InProgress ? (
        <GameOverBanner
          hasWon={gameCondition === GameCondition.Victory}
          guessCount={guesses.length}
          correctAnswer={answer}
        />
      ) : undefined}
    </>
  );
}

export default Game;
