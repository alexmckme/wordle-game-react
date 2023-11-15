import React from 'react';
import game from "../Game";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function Banner({gameStatus, actualNumberOfTries, answer}) {

  let shownBannerElement

  if (gameStatus === "won") {
    shownBannerElement = (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in <strong>{actualNumberOfTries} guesses</strong>.
          </p>
        </div>
    )
  } else if (gameStatus === "lost") {
    shownBannerElement = (
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
    )
  } else if (gameStatus === "ongoing") {
    shownBannerElement = <></>
  }

  return shownBannerElement
}

export default Banner;
