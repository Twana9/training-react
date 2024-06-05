import { useState } from "react";
import initialLetters from "./MailData";
import Letter2 from "./Letter2";

export default function MailClientApp2() {
  const [selectedIDs, setSelectedIDs] = useState(new Set());

  function handleToggle(toggledID) {
    const nextIds = new Set(selectedIDs);
    if (nextIds.has(toggledID)) {
      nextIds.delete(toggledID);
    } else {
      nextIds.add(toggledID);
    }
    setSelectedIDs(nextIds);
  }

  return (
    <>
      <h3>Inbox</h3>
      <ul>
        {initialLetters.map((letter) => (
          <Letter2
            key={letter.id}
            onToggle={handleToggle}
            letter={letter}
            isSelected={selectedIDs.has(letter.id)}
          />
        ))}
      </ul>
      <h2>{selectedIDs.size}</h2>
    </>
  );
}
