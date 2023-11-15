import React from 'react';
import Guess from "../Guess"
import guess from "../Guess";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function GuessedTries({guessedTries, answer}) {


  let guessedTriesElements = guessedTries.map((guess) => {
    return (
        <p
            key={crypto.randomUUID()}
            className="guess"
        >
          <Guess
              guess={guess}
              answer={answer}
          />
        </p>
    )
  })

  return (
      <div className="guess-results">
        {guessedTriesElements}
      </div>
  );
}

export default GuessedTries;
