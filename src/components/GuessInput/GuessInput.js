import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function GuessInput({setGuessedTries, answer, setGameStatus, NUM_OF_GUESSES_ALLOWED, actualNumberOfTries}) {

    const [inputGuess, setInputGuess] = React.useState("")

    const [enabledInput, setEnabledInput] = React.useState(true)


    return (
        <form
            className="guess-input-wrapper"
            onSubmit={(event) => {
                event.preventDefault()
                console.log(inputGuess)
                setGuessedTries(prevGuessedTries => {
                    let newGuessedTries = [...prevGuessedTries]
                    for (let i = 0; i<newGuessedTries.length; i++) {
                        if (newGuessedTries[i].length !== 5) {
                            newGuessedTries[i] = inputGuess
                            break
                        }
                    }
                    if (!newGuessedTries.includes(answer) && (NUM_OF_GUESSES_ALLOWED === actualNumberOfTries+1)) {
                        setGameStatus("lost")
                        setEnabledInput(false)
                    }
                    return newGuessedTries
                })
                if (inputGuess === answer) {
                    setGameStatus("won")
                    setEnabledInput(false)
                }

                setInputGuess("")
            }}
        >
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                disabled={enabledInput ? "" : "disabled"}
                required
                minLength={5}
                maxLength={5}
                pattern="[a-zA-Z]{5}"
                title="5 letter word"
                id="guess-input"
                type="text"
                value={inputGuess}
                onChange={(event) => {
                    setInputGuess(event.target.value.toUpperCase())
                }}
            />
        </form>
    );
}

export default GuessInput;
