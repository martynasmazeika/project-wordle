import React from "react";

function GuessInput({ makeGuess, isEnabled = true }) {
  const [guessInput, setGuessInput] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        makeGuess(guessInput);
        setGuessInput("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guessInput}
        onChange={(event) => {
          if (event.target.value.length >= 6) {
            return;
          }
          setGuessInput(event.target.value.toUpperCase());
        }}
        id="guess-input"
        type="text"
        autoComplete="off"
        required
        disabled={!isEnabled}
      />
    </form>
  );
}

export default GuessInput;
