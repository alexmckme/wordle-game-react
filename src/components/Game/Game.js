import React from 'react';
import GuessInput from "../GuessInput"
import GuessedTries from "../GuessedTries"
import Banner from "../Banner"

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

    const [guessedTries, setGuessedTries] = React.useState(range(NUM_OF_GUESSES_ALLOWED))

    const [gameStatus, setGameStatus] = React.useState("ongoing")

    let actualNumberOfTries = guessedTries.filter((guess) => guess !== "").length

    return (
        <>


            <GuessedTries
                guessedTries={guessedTries}
                answer={answer}
            />


            <GuessInput
                setGuessedTries={setGuessedTries}
                answer={answer}
                setGameStatus={setGameStatus}
                NUM_OF_GUESSES_ALLOWED={NUM_OF_GUESSES_ALLOWED}
                actualNumberOfTries={actualNumberOfTries}
            />

            <Banner
                gameStatus={gameStatus}
                actualNumberOfTries={actualNumberOfTries}
                answer={answer}
            />


        </>
    );
}

export default Game;
