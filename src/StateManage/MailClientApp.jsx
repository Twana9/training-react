import { useState } from "react";
import initialLetters from "./MailData.js";
import Letter from "./Letter";

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedLetterID, setHighlightedLetterID] = useState(null);

  function handleHover(letterID) {
    setHighlightedLetterID(letterID);
  }
  function handleStar(starredID) {
    setLetters(
      letters.map((letter) => {
        if (letter.id === starredID)
          return { ...letter, isStarred: !letter.isStarred };
        else return letter;
      })
    );
  }
  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            onToggleStar={handleStar}
            onHover={handleHover}
            isHighlightedLetter={highlightedLetterID === letter.id}
            letter={letter}
          />
        ))}
      </ul>
    </>
  );
}
