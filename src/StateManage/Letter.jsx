export default function Letter({
  onHover,
  onToggleStar,
  isHighlightedLetter,
  letter,
}) {
  return (
    <li
      style={{ background: isHighlightedLetter ? "blue" : "" }}
      onFocus={() => onHover(letter.id)}
      onPointerMove={() => onHover(letter.id)}
    >
      <button onClick={() => onToggleStar(letter.id)}>
        {letter.isStarred ? "Unstar" : "Star"}
      </button>
      {letter.subject}
    </li>
  );
}
