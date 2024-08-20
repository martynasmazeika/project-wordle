import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function GameGrid({ guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => (
        <p key={i} className="guess">
          {<Guess guess={guesses[i]} />}
        </p>
      ))}
    </div>
  );
}

export default GameGrid;
