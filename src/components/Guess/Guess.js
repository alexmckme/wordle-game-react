import React from 'react';
import {checkGuess} from "../../game-helpers"

function Guess({guess, answer}) {

    let guessSquares

    if (guess === "") {
        guessSquares = (
            <>
                <span className="cell"></span>
                <span className="cell"></span>
                <span className="cell"></span>
                <span className="cell"></span>
                <span className="cell"></span>
            </>
        )
    } else {
        let objCheck = checkGuess(guess, answer)
        guessSquares = guess.split("").map((letter, index) => {
            let letterCheck = objCheck[index].status
            return (
                <span
                    key={crypto.randomUUID()}
                    className={`cell ${letterCheck}`}
                >
          {letter}
        </span>
            )
        })
    }


    return (
        <>
            {guessSquares}
        </>
    );
}

export default Guess;
