import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return range(0, 5).map((i) => {
    return guess !== undefined ? (
      <span key={i} className={`cell ${guess[i].status}`}>
        {guess[i].letter}
      </span>
    ) : (
      <span key={i} className="cell"></span>
    );
  });
}

export default Guess;
